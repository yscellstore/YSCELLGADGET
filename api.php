<?php
// =====================================================
// YSCELLGADGET CMS - COMPATIBLE API
// =====================================================

// Header untuk JSON
header('Content-Type: application/json');

// Matikan semua error
error_reporting(0);

// Koneksi database
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'yscellgadget_cms';

$conn = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi
if (!$conn) {
    echo json_encode(array('error' => 'Database connection failed: ' . mysqli_connect_error()));
    exit();
}

// Set charset
mysqli_set_charset($conn, 'utf8');

// Ambil parameter dengan cara aman
$endpoint = '';
if (isset($_GET['endpoint'])) {
    $endpoint = $_GET['endpoint'];
}

$id = 0;
if (isset($_GET['id'])) {
    $id = (int)$_GET['id'];
}

$method = $_SERVER['REQUEST_METHOD'];

// ==================== FUNGSI ====================
function sendJSON($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit();
}

// ==================== ENDPOINTS ====================

// GET BERITA
if ($endpoint == 'berita' && $method == 'GET') {
    if ($id > 0) {
        $sql = "SELECT * FROM berita WHERE id = $id";
    } else {
        $sql = "SELECT * FROM berita ORDER BY id DESC";
    }
    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    sendJSON($data);
}

// POST BERITA
elseif ($endpoint == 'berita' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $desc = '';
    if (isset($input['description'])) {
        $desc = mysqli_real_escape_string($conn, $input['description']);
    }
    
    $detail = '';
    if (isset($input['detail'])) {
        $detail = mysqli_real_escape_string($conn, $input['detail']);
    }
    
    $image = '';
    if (isset($input['image_url'])) {
        $image = mysqli_real_escape_string($conn, $input['image_url']);
    }
    
    $sql = "INSERT INTO berita (title, description, detail, image_url) 
            VALUES ('$title', '$desc', '$detail', '$image')";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true, 'id' => mysqli_insert_id($conn)));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// UPDATE BERITA
elseif ($endpoint == 'berita' && $method == 'PUT' && $id > 0) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $desc = '';
    if (isset($input['description'])) {
        $desc = mysqli_real_escape_string($conn, $input['description']);
    }
    
    $detail = '';
    if (isset($input['detail'])) {
        $detail = mysqli_real_escape_string($conn, $input['detail']);
    }
    
    $image = '';
    if (isset($input['image_url'])) {
        $image = mysqli_real_escape_string($conn, $input['image_url']);
    }
    
    $sql = "UPDATE berita SET 
            title = '$title', 
            description = '$desc', 
            detail = '$detail', 
            image_url = '$image' 
            WHERE id = $id";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// DELETE BERITA
elseif ($endpoint == 'berita' && $method == 'DELETE' && $id > 0) {
    $sql = "DELETE FROM berita WHERE id = $id";
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// ==================== REVIEW ====================

// GET REVIEW
elseif ($endpoint == 'review' && $method == 'GET') {
    if ($id > 0) {
        $sql = "SELECT * FROM review WHERE id = $id";
    } else {
        $sql = "SELECT * FROM review ORDER BY id DESC";
    }
    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    sendJSON($data);
}

// POST REVIEW
elseif ($endpoint == 'review' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $rating = 4.0;
    if (isset($input['rating'])) {
        $rating = (float)$input['rating'];
    }
    
    $review_text = '';
    if (isset($input['review_text'])) {
        $review_text = mysqli_real_escape_string($conn, $input['review_text']);
    }
    
    $detail = '';
    if (isset($input['detail'])) {
        $detail = mysqli_real_escape_string($conn, $input['detail']);
    }
    
    $image = '';
    if (isset($input['image_url'])) {
        $image = mysqli_real_escape_string($conn, $input['image_url']);
    }
    
    $sql = "INSERT INTO review (title, rating, review_text, detail, image_url) 
            VALUES ('$title', $rating, '$review_text', '$detail', '$image')";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true, 'id' => mysqli_insert_id($conn)));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// UPDATE REVIEW
elseif ($endpoint == 'review' && $method == 'PUT' && $id > 0) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $rating = 4.0;
    if (isset($input['rating'])) {
        $rating = (float)$input['rating'];
    }
    
    $review_text = '';
    if (isset($input['review_text'])) {
        $review_text = mysqli_real_escape_string($conn, $input['review_text']);
    }
    
    $detail = '';
    if (isset($input['detail'])) {
        $detail = mysqli_real_escape_string($conn, $input['detail']);
    }
    
    $image = '';
    if (isset($input['image_url'])) {
        $image = mysqli_real_escape_string($conn, $input['image_url']);
    }
    
    $sql = "UPDATE review SET 
            title = '$title', 
            rating = $rating, 
            review_text = '$review_text', 
            detail = '$detail', 
            image_url = '$image' 
            WHERE id = $id";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// DELETE REVIEW
elseif ($endpoint == 'review' && $method == 'DELETE' && $id > 0) {
    $sql = "DELETE FROM review WHERE id = $id";
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// ==================== TREND ====================

// GET TREND
elseif ($endpoint == 'trend' && $method == 'GET') {
    if ($id > 0) {
        $sql = "SELECT * FROM trend WHERE id = $id";
    } else {
        $sql = "SELECT * FROM trend ORDER BY id DESC";
    }
    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    sendJSON($data);
}

// POST TREND
elseif ($endpoint == 'trend' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $icon = 'fas fa-robot';
    if (isset($input['icon'])) {
        $icon = mysqli_real_escape_string($conn, $input['icon']);
    }
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $number = '';
    if (isset($input['trend_number'])) {
        $number = mysqli_real_escape_string($conn, $input['trend_number']);
    }
    
    $desc = '';
    if (isset($input['description'])) {
        $desc = mysqli_real_escape_string($conn, $input['description']);
    }
    
    $sql = "INSERT INTO trend (icon, title, trend_number, description) 
            VALUES ('$icon', '$title', '$number', '$desc')";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true, 'id' => mysqli_insert_id($conn)));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// UPDATE TREND
elseif ($endpoint == 'trend' && $method == 'PUT' && $id > 0) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $icon = 'fas fa-robot';
    if (isset($input['icon'])) {
        $icon = mysqli_real_escape_string($conn, $input['icon']);
    }
    
    $title = '';
    if (isset($input['title'])) {
        $title = mysqli_real_escape_string($conn, $input['title']);
    }
    
    $number = '';
    if (isset($input['trend_number'])) {
        $number = mysqli_real_escape_string($conn, $input['trend_number']);
    }
    
    $desc = '';
    if (isset($input['description'])) {
        $desc = mysqli_real_escape_string($conn, $input['description']);
    }
    
    $sql = "UPDATE trend SET 
            icon = '$icon', 
            title = '$title', 
            trend_number = '$number', 
            description = '$desc' 
            WHERE id = $id";
    
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// DELETE TREND
elseif ($endpoint == 'trend' && $method == 'DELETE' && $id > 0) {
    $sql = "DELETE FROM trend WHERE id = $id";
    if (mysqli_query($conn, $sql)) {
        sendJSON(array('success' => true));
    } else {
        sendJSON(array('success' => false, 'error' => mysqli_error($conn)), 500);
    }
}

// ==================== AUTHENTICATION ====================

// LOGIN
elseif ($endpoint == 'login' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $username = '';
    if (isset($input['username'])) {
        $username = mysqli_real_escape_string($conn, $input['username']);
    }
    
    $password = '';
    if (isset($input['password'])) {
        $password = $input['password'];
    }
    
    $sql = "SELECT * FROM admin WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
    $admin = mysqli_fetch_assoc($result);
    
    if ($admin && password_verify($password, $admin['password'])) {
        $token = bin2hex(random_bytes(32));
        $sql = "UPDATE admin SET session_token = '$token', last_login = NOW() WHERE id = " . $admin['id'];
        mysqli_query($conn, $sql);
        
        sendJSON(array(
            'success' => true,
            'token' => $token,
            'username' => $admin['username']
        ));
    } else {
        sendJSON(array('success' => false, 'error' => 'Invalid credentials'), 401);
    }
}

// CHECK SESSION
elseif ($endpoint == 'check-session' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $token = '';
    if (isset($input['token'])) {
        $token = mysqli_real_escape_string($conn, $input['token']);
    }
    
    $sql = "SELECT username FROM admin WHERE session_token = '$token'";
    $result = mysqli_query($conn, $sql);
    $admin = mysqli_fetch_assoc($result);
    
    if ($admin) {
        sendJSON(array('success' => true, 'username' => $admin['username']));
    } else {
        sendJSON(array('success' => false), 401);
    }
}

// LOGOUT
elseif ($endpoint == 'logout' && $method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $token = '';
    if (isset($input['token'])) {
        $token = mysqli_real_escape_string($conn, $input['token']);
    }
    
    $sql = "UPDATE admin SET session_token = NULL WHERE session_token = '$token'";
    mysqli_query($conn, $sql);
    sendJSON(array('success' => true));
}

// ==================== BACKUP & RESET ====================

// BACKUP
elseif ($endpoint == 'backup' && $method == 'GET') {
    $berita = mysqli_query($conn, "SELECT * FROM berita");
    $review = mysqli_query($conn, "SELECT * FROM review");
    $trend = mysqli_query($conn, "SELECT * FROM trend");
    
    $data = array(
        'berita' => mysqli_fetch_all($berita, MYSQLI_ASSOC),
        'review' => mysqli_fetch_all($review, MYSQLI_ASSOC),
        'trend' => mysqli_fetch_all($trend, MYSQLI_ASSOC)
    );
    sendJSON($data);
}

// RESET DEFAULT
elseif ($endpoint == 'reset-default' && $method == 'POST') {
    mysqli_query($conn, "DELETE FROM berita");
    mysqli_query($conn, "DELETE FROM review");
    mysqli_query($conn, "DELETE FROM trend");
    
    mysqli_query($conn, "ALTER TABLE berita AUTO_INCREMENT = 1");
    mysqli_query($conn, "ALTER TABLE review AUTO_INCREMENT = 1");
    mysqli_query($conn, "ALTER TABLE trend AUTO_INCREMENT = 1");
    
    sendJSON(array('success' => true));
}

// ==================== ROOT ====================
elseif ($endpoint == '') {
    sendJSON(array(
        'status' => 'success',
        'message' => 'YSCELLGADGET API is running',
        'database' => $db,
        'endpoints' => array(
            'GET ?endpoint=berita' => 'Get all berita',
            'GET ?endpoint=berita&id=1' => 'Get berita by ID',
            'POST ?endpoint=berita' => 'Create berita',
            'PUT ?endpoint=berita&id=1' => 'Update berita',
            'DELETE ?endpoint=berita&id=1' => 'Delete berita',
            'GET ?endpoint=review' => 'Get all review',
            'GET ?endpoint=trend' => 'Get all trend',
            'POST ?endpoint=login' => 'Admin login'
        )
    ));
}

// 404
else {
    sendJSON(array('error' => 'Endpoint not found: ' . $endpoint), 404);
}

// Tutup koneksi
mysqli_close($conn);
?>