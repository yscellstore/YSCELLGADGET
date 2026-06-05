-- =====================================================
-- YSCELLGADGET CMS - Database Structure
-- =====================================================

-- Buat database
CREATE DATABASE IF NOT EXISTS yscellgadget_cms;
USE yscellgadget_cms;

-- Tabel admin
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    session_token VARCHAR(255) NULL,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel berita
CREATE TABLE IF NOT EXISTS berita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    detail TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel review
CREATE TABLE IF NOT EXISTS review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating DECIMAL(2,1) DEFAULT 4.0,
    review_text TEXT,
    detail TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel trend
CREATE TABLE IF NOT EXISTS trend (
    id INT AUTO_INCREMENT PRIMARY KEY,
    icon VARCHAR(100) DEFAULT 'fas fa-robot',
    title VARCHAR(255) NOT NULL,
    trend_number VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert admin default (username: admin, password: yscell2026)
INSERT INTO admin (username, password) VALUES ('admin', 'yscell2026')
ON DUPLICATE KEY UPDATE username = username;

-- Insert default berita
INSERT INTO berita (title, description, detail, image_url) VALUES
('Oppo Find X9 ULTRA: Kamera 200MP', 'Oppo memamerkan teknologi kamera profesional.', 'Oppo Find X9 ULTRA hadir dengan layar LTPO AMOLED, 1B colors, 144Hz, Dolby Vision, HDR10+, 800 nits (typ), 1800 nits (HBM), 3600 nits (peak), chip snapdragon elite gen 5, dan pengisian 100W.', 'https://cdn.phototourl.com/free/2026-06-01-86b46fc7-b0fa-4595-9d68-3ac98be05d51.webp'),
('Google Pixel 10: AI Generatif di Ponsel', 'Spesifikasi Utama Google Pixel 10Prosesor & OS: Google Tensor G5 (3nm); Android 16Layar: LTPO AMOLED, 120HzKamera Belakang: Utama 48 MP (OIS), Ultrawide 13 MP, dan Lensa Telefoto 10.8 MP (5x optical zoom)RAM & Kapasitas: RAM 12GB dengan pilihan penyimpanan internal 128GB atau 256GBBaterai: 4970 mAh dengan pengisian cepat 30W', 'Tensor G5 chip, kamera 48MP, dan fitur AI Gemini yang revolusioner. Tersedia 5 warna baru.', 'https://cdn.phototourl.com/free/2026-06-01-911eae52-efe6-4294-ae22-5419c45c83dc.jpg'),
('SAMSUNG S26 ULTRA: HORIZONTAL STABILIZER & PRIVACY DISPLAY', 'PONSEL GALAXY AI TERGACOR.', 'Layar: 6,9 inci QHD+ Dynamic AMOLED 2X (120Hz)Prosesor: Snapdragon 8 Elite Gen 5 for GalaxyRAM & Memori Internal: RAM 12GB/16GB dengan pilihan memori 256GB, 512GB, hingga 1TBKamera Belakang: 200 MP (Utama), 50 MP (Telefoto), 10 MP, dan 50 MPKamera Depan: 12 MPBaterai: Kapasitas 5000 mAh dengan Super Fast ChargingSistem Operasi: Android 16, One UI 8.5', 'https://cdn.phototourl.com/free/2026-06-01-24bb9481-7362-4d99-b053-f9963c2b995c.jpg');

-- Insert default review
INSERT INTO review (title, rating, review_text, detail, image_url) VALUES
('Review Samsung Galaxy S26 Ultra', 4.8, 'Kamera 200MP luar biasa jernih, chip snapdragon 8 elite gen 5 sangat cepat. Sayangnya harga cukup tinggi.', 'Baterai tahan 1 hari pemakaian normal. Layar Dynamic AMOLED 2x terbaik di kelasnya.', 'https://placehold.co/400x250/1a1a2e/0acf83?text=Samsung+S26+Ultra'),
('Review iPhone 17 Pro Max', 4.9, 'Dynamic Island, A19 Bionic gila cepat. Kamera video terbaik.', 'Baterai 4823mAh, charging 25W, iOS 26 dengan fitur AI canggih.', 'https://placehold.co/400x250/16213e/f4a261?text=iPhone+17+Pro+Max'),
('Review Xiaomi 17 Ultra', 4.7, 'Kamera Leica 1 inci menghasilkan foto kelas DSLR. Harga lebih bersahabat.', 'Snapdragon 8 elite gen 5, layar 120Hz, fast charging 90W wireless.', 'https://placehold.co/400x250/0f3460/e94560?text=Xiaomi+17+Ultra');

-- Insert default trend
INSERT INTO trend (icon, title, trend_number, description) VALUES
('fas fa-robot', 'AI On-Device', '+245%', 'Peningkatan AI yang berjalan langsung di chip HP tanpa cloud.'),
('fas fa-folder-open', 'Ponsel Lipat 3', '12 Model', 'Layar lipat tiga segmen dengan ketebalan hanya 12mm.'),
('fas fa-charging-station', 'Wireless 100W', '10 Menit', 'Isi daya 0-80% hanya dalam 10 menit secara wireless.'),
('fas fa-shield-alt', 'Quantum Security', '100%', 'Enkripsi quantum untuk keamanan maksimal.');