<?php
/**
 * YSCELLGADGET CMS - Database Configuration
 * File: config.php
 */

// ======================================================
// DATABASE CONFIGURATION
// ======================================================

// Cek environment (production/development)
$is_production = false; // Set ke true jika di production server

// Database credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'yscellgadget_cms');
define('DB_USER', 'root');      // Ganti dengan user database Anda
define('DB_PASS', '');          // Ganti dengan password database Anda

// ======================================================
// JWT & SECURITY CONFIGURATION
// ======================================================
define('JWT_SECRET', 'yscellgadget_secret_key_2026_' . date('Y'));
define('TOKEN_EXPIRY', 86400); // 24 jam

// ======================================================
// CORS CONFIGURATION
// ======================================================
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ======================================================
= DATABASE CONNECTION
-- ======================================================

class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        try {
            $this->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            
            if ($this->connection->connect_error) {
                throw new Exception("Connection failed: " . $this->connection->connect_error);
            }
            
            $this->connection->set_charset("utf8mb4");
        } catch (Exception $e) {
            $this->handleError($e);
        }
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    
    public function getConnection() {
        return $this->connection;
    }
    
    private function handleError($e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Database connection failed',
            'message' => $e->getMessage()
        ]);
        exit();
    }
    
    // Execute query dengan prepared statement
    public function execute($sql, $params = [], $types = "") {
        $stmt = $this->connection->prepare($sql);
        if (!$stmt) {
            throw new Exception("Prepare failed: " . $this->connection->error);
        }
        
        if (!empty($params)) {
            if (empty($types)) {
                $types = str_repeat('s', count($params));
            }
            $stmt->bind_param($types, ...$params);
        }
        
        $stmt->execute();
        return $stmt;
    }
    
    // Get single row
    public function getRow($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }
    
    // Get multiple rows
    public function getRows($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        $result = $stmt->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
    }
    
    // Insert dan return ID
    public function insert($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        return $this->connection->insert_id;
    }
    
    // Update/Delete dan return affected rows
    public function executeQuery($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        return $stmt->affected_rows;
    }
}

// ======================================================
// HELPER FUNCTIONS
// ======================================================

function sendResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}

function sendError($message, $statusCode = 400) {
    sendResponse(['success' => false, 'error' => $message], $statusCode);
}

function validateToken($token) {
    // Simple token validation (untuk demo)
    // Di production gunakan JWT library
    $parts = explode('_', $token);
    if (count($parts) !== 2) return false;
    
    $username = $parts[0];
    $timestamp = (int)$parts[1];
    
    // Cek expiry (24 jam)
    if (time() - $timestamp > TOKEN_EXPIRY) return false;
    
    return $username;
}

function getCurrentAdminId() {
    // Ambil dari token yang sudah divalidasi
    global $current_admin_id;
    return $current_admin_id ?? null;
}

// Start session untuk admin ID
session_start();
$current_admin_id = $_SESSION['admin_id'] ?? null;
?>
