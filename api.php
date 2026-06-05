<?php
/**
 * YSCELLGADGET CMS - REST API
 * File: api.php
 */

require_once 'config.php';

class API {
    private $db;
    private $method;
    private $endpoint;
    private $id;
    
    public function __construct() {
        $this->db = Database::getInstance();
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->parseEndpoint();
    }
    
    private function parseEndpoint() {
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $parts = explode('/', trim($path, '/'));
        
        // Cari api.php dalam array
        $api_index = array_search('api.php', $parts);
        if ($api_index !== false) {
            $this->endpoint = $parts[$api_index + 1] ?? '';
            $this->id = $parts[$api_index + 2] ?? null;
        }
        
        // Jika masih kosong, cek parameter endpoint
        if (empty($this->endpoint) && isset($_GET['endpoint'])) {
            $this->endpoint = $_GET['endpoint'];
            $this->id = $_GET['id'] ?? null;
        }
    }
    
    public function handle() {
        try {
            // Cek autentikasi untuk endpoint tertentu
            $public_endpoints = ['login', 'check-session'];
            
            if (!in_array($this->endpoint, $public_endpoints)) {
                $this->checkAuth();
            }
            
            switch ($this->method) {
                case 'GET':
                    $this->handleGet();
                    break;
                case 'POST':
                    $this->handlePost();
                    break;
                case 'PUT':
                    $this->handlePut();
                    break;
                case 'DELETE':
                    $this->handleDelete();
                    break;
                default:
                    sendError('Method not allowed', 405);
            }
        } catch (Exception $e) {
            sendError($e->getMessage(), 500);
        }
    }
    
    private function checkAuth() {
        $headers = getallheaders();
        $token = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        
        if (empty($token)) {
            sendError('Unauthorized - Token required', 401);
        }
        
        $username = validateToken($token);
        if (!$username) {
            sendError('Invalid or expired token', 401);
        }
        
        // Set current admin ID
        $admin = $this->db->getRow(
            "SELECT id FROM admin WHERE username = ?",
            [$username]
        );
        
        if (!$admin) {
            sendError('Admin not found', 401);
        }
        
        global $current_admin_id;
        $current_admin_id = $admin['id'];
        $_SESSION['admin_id'] = $admin['id'];
    }
    
    private function handleGet() {
        switch ($this->endpoint) {
            case 'berita':
                if ($this->id) {
                    $this->getBeritaById();
                } else {
                    $this->getAllBerita();
                }
                break;
            case 'review':
                if ($this->id) {
                    $this->getReviewById();
                } else {
                    $this->getAllReview();
                }
                break;
            case 'trend':
                if ($this->id) {
                    $this->getTrendById();
                } else {
                    $this->getAllTrend();
                }
                break;
            case 'backup':
                $this->getBackup();
                break;
            case 'stats':
                $this->getStats();
                break;
            default:
                sendError('Endpoint not found', 404);
        }
    }
    
    private function handlePost() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        switch ($this->endpoint) {
            case 'login':
                $this->login($data);
                break;
            case 'logout':
                $this->logout();
                break;
            case 'check-session':
                $this->checkSession($data);
                break;
            case 'berita':
                $this->createBerita($data);
                break;
            case 'review':
                $this->createReview($data);
                break;
            case 'trend':
                $this->createTrend($data);
                break;
            case 'reset-default':
                $this->resetToDefault();
                break;
            default:
                sendError('Endpoint not found', 404);
        }
    }
    
    private function handlePut() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        switch ($this->endpoint) {
            case 'berita':
                if ($this->id) {
                    $this->updateBerita($this->id, $data);
                } else {
                    sendError('ID required', 400);
                }
                break;
            case 'review':
                if ($this->id) {
                    $this->updateReview($this->id, $data);
                } else {
                    sendError('ID required', 400);
                }
                break;
            case 'trend':
                if ($this->id) {
                    $this->updateTrend($this->id, $data);
                } else {
                    sendError('ID required', 400);
                }
                break;
            default:
                sendError('Endpoint not found', 404);
        }
    }
    
    private function handleDelete() {
        switch ($this->endpoint) {
            case 'berita':
                if ($this->id) {
                    $this->deleteBerita($this->id);
                } else {
                    sendError('ID required', 400);
                }
                break;
            case 'review':
                if ($this->id) {
                    $this->deleteReview($this->id);
                } else {
                    sendError('ID required', 400);
                }
                break;
            case 'trend':
                if ($this->id) {
                    $this->deleteTrend($this->id);
                } else {
                    sendError('ID required', 400);
                }
                break;
            default:
                sendError('Endpoint not found', 404);
        }
    }
    
    // ==================================================
    // AUTHENTICATION METHODS
    // ==================================================
    
    private function login($data) {
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';
        
        if (empty($username) || empty($password)) {
            sendError('Username and password required', 400);
        }
        
        $admin = $this->db->getRow(
            "SELECT id, username, password FROM admin WHERE username = ?",
            [$username]
        );
        
        if (!$admin) {
            sendError('Invalid credentials', 401);
        }
        
        // Verifikasi password (bcrypt)
        if (!password_verify($password, $admin['password'])) {
            sendError('Invalid credentials', 401);
        }
        
        // Update last login
        $this->db->executeQuery(
            "UPDATE admin SET last_login = NOW() WHERE id = ?",
            [$admin['id']]
        );
        
        // Generate token (format: username_timestamp)
        $token = $admin['username'] . '_' . time();
        
        sendResponse([
            'success' => true,
            'token' => $token,
            'username' => $admin['username'],
            'user_id' => $admin['id']
        ]);
    }
    
    private function logout() {
        session_destroy();
        sendResponse(['success' => true, 'message' => 'Logged out']);
    }
    
    private function checkSession($data) {
        $token = $data['token'] ?? '';
        $username = validateToken($token);
        
        if ($username) {
            sendResponse(['success' => true, 'username' => $username]);
        } else {
            sendResponse(['success' => false], 401);
        }
    }
    
    // ==================================================
    // BERITA CRUD
    // ==================================================
    
    private function getAllBerita() {
        $berita = $this->db->getRows(
            "SELECT id, title, description, detail, image_url, 
                    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at 
             FROM berita 
             ORDER BY created_at DESC"
        );
        sendResponse($berita);
    }
    
    private function getBeritaById() {
        $berita = $this->db->getRow(
            "SELECT * FROM berita WHERE id = ?",
            [$this->id]
        );
        
        if (!$berita) {
            sendError('Berita not found', 404);
        }
        
        sendResponse($berita);
    }
    
    private function createBerita($data) {
        $required = ['title', 'description', 'detail'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                sendError("Field '$field' is required", 400);
            }
        }
        
        $id = $this->db->insert(
            "INSERT INTO berita (title, description, detail, image_url, author_id) 
             VALUES (?, ?, ?, ?, ?)",
            [
                $data['title'],
                $data['description'],
                $data['detail'],
                $data['image_url'] ?? null,
                getCurrentAdminId()
            ]
        );
        
        sendResponse(['success' => true, 'id' => $id, 'message' => 'Berita created']);
    }
    
    private function updateBerita($id, $data) {
        $fields = [];
        $params = [];
        
        $allowed = ['title', 'description', 'detail', 'image_url'];
        foreach ($allowed as $field) {
            if (isset($data[$field])) {
                $fields[] = "$field = ?";
                $params[] = $data[$field];
            }
        }
        
        if (empty($fields)) {
            sendError('No fields to update', 400);
        }
        
        $params[] = $id;
        $sql = "UPDATE berita SET " . implode(', ', $fields) . " WHERE id = ?";
        
        $affected = $this->db->executeQuery($sql, $params);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    private function deleteBerita($id) {
        $affected = $this->db->executeQuery("DELETE FROM berita WHERE id = ?", [$id]);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    // ==================================================
    // REVIEW CRUD
    // ==================================================
    
    private function getAllReview() {
        $review = $this->db->getRows(
            "SELECT id, title, rating, review_text, detail, image_url,
                    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at 
             FROM review 
             ORDER BY rating DESC, created_at DESC"
        );
        sendResponse($review);
    }
    
    private function getReviewById() {
        $review = $this->db->getRow("SELECT * FROM review WHERE id = ?", [$this->id]);
        if (!$review) sendError('Review not found', 404);
        sendResponse($review);
    }
    
    private function createReview($data) {
        $required = ['title', 'rating', 'review_text'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                sendError("Field '$field' is required", 400);
            }
        }
        
        $id = $this->db->insert(
            "INSERT INTO review (title, rating, review_text, detail, image_url, author_id) 
             VALUES (?, ?, ?, ?, ?, ?)",
            [
                $data['title'],
                $data['rating'],
                $data['review_text'],
                $data['detail'] ?? null,
                $data['image_url'] ?? null,
                getCurrentAdminId()
            ]
        );
        
        sendResponse(['success' => true, 'id' => $id]);
    }
    
    private function updateReview($id, $data) {
        $fields = [];
        $params = [];
        
        $allowed = ['title', 'rating', 'review_text', 'detail', 'image_url'];
        foreach ($allowed as $field) {
            if (isset($data[$field])) {
                $fields[] = "$field = ?";
                $params[] = $data[$field];
            }
        }
        
        if (empty($fields)) {
            sendError('No fields to update', 400);
        }
        
        $params[] = $id;
        $sql = "UPDATE review SET " . implode(', ', $fields) . " WHERE id = ?";
        
        $affected = $this->db->executeQuery($sql, $params);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    private function deleteReview($id) {
        $affected = $this->db->executeQuery("DELETE FROM review WHERE id = ?", [$id]);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    // ==================================================
    // TREND CRUD
    // ==================================================
    
    private function getAllTrend() {
        $trend = $this->db->getRows(
            "SELECT * FROM trend ORDER BY display_order ASC"
        );
        sendResponse($trend);
    }
    
    private function getTrendById() {
        $trend = $this->db->getRow("SELECT * FROM trend WHERE id = ?", [$this->id]);
        if (!$trend) sendError('Trend not found', 404);
        sendResponse($trend);
    }
    
    private function createTrend($data) {
        $required = ['title'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                sendError("Field '$field' is required", 400);
            }
        }
        
        $id = $this->db->insert(
            "INSERT INTO trend (icon, title, trend_number, description) 
             VALUES (?, ?, ?, ?)",
            [
                $data['icon'] ?? 'fas fa-chart-line',
                $data['title'],
                $data['trend_number'] ?? null,
                $data['description'] ?? null
            ]
        );
        
        sendResponse(['success' => true, 'id' => $id]);
    }
    
    private function updateTrend($id, $data) {
        $fields = [];
        $params = [];
        
        $allowed = ['icon', 'title', 'trend_number', 'description', 'display_order'];
        foreach ($allowed as $field) {
            if (isset($data[$field])) {
                $fields[] = "$field = ?";
                $params[] = $data[$field];
            }
        }
        
        if (empty($fields)) {
            sendError('No fields to update', 400);
        }
        
        $params[] = $id;
        $sql = "UPDATE trend SET " . implode(', ', $fields) . " WHERE id = ?";
        
        $affected = $this->db->executeQuery($sql, $params);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    private function deleteTrend($id) {
        $affected = $this->db->executeQuery("DELETE FROM trend WHERE id = ?", [$id]);
        sendResponse(['success' => true, 'affected' => $affected]);
    }
    
    // ==================================================
    // BACKUP & UTILITY METHODS
    // ==================================================
    
    private function getBackup() {
        $berita = $this->db->getRows("SELECT * FROM berita");
        $review = $this->db->getRows("SELECT * FROM review");
        $trend = $this->db->getRows("SELECT * FROM trend");
        
        sendResponse([
            'berita' => $berita,
            'review' => $review,
            'trend' => $trend
        ]);
    }
    
    private function getStats() {
        $stats = $this->db->getRow("SELECT * FROM dashboard_stats");
        sendResponse($stats);
    }
    
    private function resetToDefault() {
        // Clear existing data
        $this->db->executeQuery("TRUNCATE TABLE berita");
        $this->db->executeQuery("TRUNCATE TABLE review");
        $this->db->executeQuery("TRUNCATE TABLE trend");
        
        // Insert default berita
        $defaultBerita = [
            ['Oppo Find X9 ULTRA: Kamera 200MP', 'Oppo memamerkan teknologi kamera profesional.', 'Detail lengkap Oppo Find X9 ULTRA...', 'https://cdn.phototourl.com/free/2026-06-01-86b46fc7-b0fa-4595-9d68-3ac98be05d51.webp'],
            ['Google Pixel 10: AI Generatif di Ponsel', 'Spesifikasi Utama Google Pixel 10', 'Tensor G5 chip, kamera 48MP...', 'https://cdn.phototourl.com/free/2026-06-01-911eae52-efe6-4294-ae22-5419c45c83dc.jpg']
        ];
        
        foreach ($defaultBerita as $berita) {
            $this->db->insert(
                "INSERT INTO berita (title, description, detail, image_url) VALUES (?, ?, ?, ?)",
                $berita
            );
        }
        
        // Insert default review
        $defaultReview = [
            ['Review Samsung Galaxy S26 Ultra', 4.8, 'Kamera 200MP luar biasa jernih', 'Detail review lengkap...', 'https://placehold.co/400x250/1a1a2e/0acf83?text=Samsung+S26+Ultra'],
            ['Review iPhone 17 Pro Max', 4.9, 'Dynamic Island, A19 Bionic', 'Detail review iPhone...', 'https://placehold.co/400x250/16213e/f4a261?text=iPhone+17+Pro+Max']
        ];
        
        foreach ($defaultReview as $review) {
            $this->db->insert(
                "INSERT INTO review (title, rating, review_text, detail, image_url) VALUES (?, ?, ?, ?, ?)",
                $review
            );
        }
        
        // Insert default trend
        $defaultTrend = [
            ['fas fa-robot', 'AI On-Device', '+245%', 'Peningkatan AI di chip HP'],
            ['fas fa-folder-open', 'Ponsel Lipat 3', '12 Model', 'Layar lipat tiga segmen']
        ];
        
        foreach ($defaultTrend as $trend) {
            $this->db->insert(
                "INSERT INTO trend (icon, title, trend_number, description) VALUES (?, ?, ?, ?)",
                $trend
            );
        }
        
        sendResponse(['success' => true, 'message' => 'Data reset to default']);
    }
}

// Run API
$api = new API();
$api->handle();
?>
