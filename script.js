// Ganti API_BASE di awal script.js
const API_BASE = '/api.php';

// Ganti fungsi fetchAPI
async function fetchAPI(endpoint) {
    try {
        const response = await fetch(API_BASE + '?endpoint=' + endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}

// ==================== DATA KONTEN ====================
const newsData = [
    {
        id: 1,
        title: "Oppo Find X9 ULTRA: Kamera 200MP",
        desc: "Oppo memamerkan teknologi kamera profesional.",
        detail: "Oppo Find X9 ULTRA hadir dengan layar LTPO AMOLED, 1B colors, 144Hz, Dolby Vision, HDR10+, 800 nits (typ), 1800 nits (HBM), 3600 nits (peak), chip snapdragon elite gen 5, dan pengisian 100W.",
        image: "https://cdn.phototourl.com/free/2026-06-01-86b46fc7-b0fa-4595-9d68-3ac98be05d51.webp"
    },
    {
        id: 2,
        title: "Google Pixel 10: AI Generatif di Ponsel",
        desc: "Spesifikasi Utama Google Pixel 10Prosesor & OS: Google Tensor G5 (3nm); Android 16Layar: LTPO AMOLED, 120HzKamera Belakang: Utama 48 MP (OIS), Ultrawide 13 MP, dan Lensa Telefoto 10.8 MP (5x optical zoom)RAM & Kapasitas: RAM 12GB dengan pilihan penyimpanan internal 128GB atau 256GBBaterai: 4970 mAh dengan pengisian cepat 30W",
        detail: "Tensor G5 chip, kamera 48MP, dan fitur AI Gemini yang revolusioner. Tersedia 5 warna baru.",
        image: "https://cdn.phototourl.com/free/2026-06-01-911eae52-efe6-4294-ae22-5419c45c83dc.jpg"
    },
    {
        id: 3,
        title: "SAMSUNG S26 ULTRA: HORIZONTAL STABILIZER & PRIVACY DISPLAY",
        desc: "PONSEL GALAXY AI TERGACOR.",
        detail: "Layar: 6,9 inci QHD+ Dynamic AMOLED 2X (120Hz)Prosesor: Snapdragon 8 Elite Gen 5 for GalaxyRAM & Memori Internal: RAM 12GB/16GB dengan pilihan memori 256GB, 512GB, hingga 1TBKamera Belakang: 200 MP (Utama), 50 MP (Telefoto), 10 MP, dan 50 MPKamera Depan: 12 MPBaterai: Kapasitas 5000 mAh dengan Super Fast ChargingSistem Operasi: Android 16, One UI 8.5 Privacy Display: Layar inovatif yang memungkinkan Anda mengaburkan atau menggelapkan sudut pandang dari samping, mencegah orang lain mengintip layar Anda. Galaxy AI & Pengeditan Studio: Didukung integrasi Galaxy AI yang memungkinkan pengeditan foto mudah (seperti menambahkan objek menggunakan prompt teks), dan fitur produktivitas yang disesuaikan. Nightography: Peningkatan kemampuan pengambilan gambar dan video dalam kondisi minim cahaya (low-light) dengan stabilisasi video yang tajam.",
        image: "https://cdn.phototourl.com/free/2026-06-01-24bb9481-7362-4d99-b053-f9963c2b995c.jpg"
    },
    {
        id: 4,
        title: "ROG Phone 8: Snapdragon 8 Gen 3 Gaming",
        desc: "Refresh rate 165Hz, trigger ultrasonik, dan sistem pendingin aerodinamis.",
        detail: "RAM 12GB/16GB, penyimpanan 256GB, dan kontrol haptic tingkat lanjut untuk gamer profesional.",
        image: "https://cdn.phototourl.com/free/2026-06-01-6230cd9c-2423-4295-a986-af54d8c303a3.webp"
    },
    {
        id: 5,
        title: "VIVO X300",
        desc: "lini smartphone flagship unggulan dari Vivo yang sangat menonjolkan kemampuan kameranya berkat kolaborasi dengan ZEISS.",
        detail: "Vivo X300 adalah smartphone flagship yang sangat berfokus pada fotografi, ditenagai chipset Dimensity 9500, kamera utama 200 MP ZEISS,Telephoto: 50 MP, f/2.57, optical zoom 3x, OIS (Sony LYT-602) Ultrawide: 50 MP, f/2.0, serta baterai 5.360 mAh dengan fast charging 90W, RAM: 12 GB / 16 GB (LPDDR5X) Internal: 256 GB / 512 GB (UFS 4.1).",
        image: "https://cdn.phototourl.com/free/2026-06-01-616b11b4-2938-44c6-9628-4facb3432945.jpg"
    },
    {
        id: 6,
        title: "VIVO X300 PRO",
        desc: "Vivo X300 Pro adalah smartphone flagship yang sangat menonjol di sektor fotografi hasil kolaborasi dengan ZEISS.",
        detail: "Ponsel ini ditenagai prosesor kencang Dimensity 9500, layar LTPO AMOLED 120Hz, serta kamera telefoto periskop 200MP,Layar: 6.78 inci LTPO AMOLED, resolusi 1.5K (2800 × 1260 piksel),Refresh Rate: Adaptif hingga 120Hz, Kecerahan Puncak: 4500 nits, Proteksi: Diamond Armor Glass (110% lebih kuat menahan jatuh), Ketahanan: Sertifikasi IP68 & IP69 (Tahan air dan debu), Dimensi/Berat: 161.98 × 75.48 × 7.99 mm / 226 gram,Kamera Utama: 50 MP dengan lensa berskala Gimbal-Grade (sensor Sony LYT-828, OIS, CIPA 5.5-Rated), Kamera Telefoto: 200 MP ZEISS APO Periscope Telephoto (85mm, 3.7x optical zoom, macro), Kamera Ultrawide: 50 MP, Kamera Depan: 50 MPFitur Tambahan: Portrait Video Dolby Vision 4K 120fps, Multi-Focal HD Portrait,RAM: 12 GB atau 16 GB (tipe LPDDR5X Ultra), Penyimpanan: 256 GB, 512 GB, hingga 1 TB (tipe UFS 4.1), Baterai: 6510 mAh BlueVolt Battery, Pengisian Daya: Kabel FlashCharge 90W dan nirkabel Wireless FlashCharge 40W.",
        image: "https://cdn.phototourl.com/free/2026-06-01-e13c30ee-1312-4151-b5bf-438731876565.png"
    },
    {
        id: 7,
        title: "VIVO X300 ULTRA",
        desc: "Vivo X300 Ultra adalah ponsel flagship kelas atas yang menonjolkan kemampuan kamera dan performa papan atas.",
        detail: "LayarLTPO AMOLED 6,82 inci, resolusi 2K (1440 x 3168 piksel), refresh rate 144Hz, HDR10+Sistem OperasiAndroid 16, dilapisi OriginOS 6,ChipsetQualcomm Snapdragon 8 Elite Gen 5 (3nm),RAM: 12GB / 16GB  Memori Internal: 256GB / 512GB / 1TB (UFS 4.1), Baterai & Pengisian:6600 mAh (BlueVolt Battery), Fast Charging 100W, Wireless Charging 40W,DurabilitasSertifikasi:IP68/IP69 (tahan air dan debu),Kamera Utama: 200 MP, lensa Zeiss setara 35mm (sensor 1/1,2 inci), Kamera Ultrawide: 50 MP, setara 14mm, Kamera Telefoto/Periskop: 200 MP, setara 85mm dengan teknologi Zeiss APO, Kamera Depan: 50 MP (mendukung perekaman video hingga 4K 60fps),Material: Armor Glass pada bagian layar dan punggung, frame aluminium, Dimensi/Bobot: 163 x 76,8 x 8,2 mm / 232 gramFitur Tambahan: Konektivitas 5G, pemindai sidik jari ultrasonik di dalam layar, mendukung aksesori Photography Kit dan lensa eksternal Zeiss.",
        image: "https://cdn.phototourl.com/free/2026-06-01-3526ba5d-1c9e-4dc7-b3d5-e78b329610e4.jpg"
    },
    {
        id: 8,
        title: "HUAWEI PURA 90",
        desc: "Huawei Pura 90 hadir sebagai smartphone flagship kelas atas dengan layar OLED 6,8 inci 120Hz, ditenagai chipset Kirin 9010s, triple kamera utama 50MP, serta baterai jumbo 6500 mAh dengan pengisian cepat 100W.",
        detail: "RAM & Penyimpanan: 12 GB RAM + 256 GB ROM (tidak ada slot microSD),Kamera Belakang:Utama: 50 MP (f/1.8), OIS, Ultra-Wide: 12,5 MP (f/2.2), Telefoto: 50 MP, 3.7x optical zoom, 100x digital zoom,Kamera Depan: 50 MP,Pengisian Daya: 100W Wired SuperCharge, 50W Wireless ChargingFitur Lainnya: Tahan air & debu (Sertifikasi IP68/IP69), NFC, Bluetooth 6.0, sensor sidik jari di bagian samping, Speaker Stereo.",
        image: "https://cdn.phototourl.com/free/2026-06-01-e046dd64-2c64-4fca-93db-8f749f31deff.webp"
    },
    {
        id: 9,
        title: "HUAWEI PURA 90 PRO",
        desc: "Huawei Pura 90 Pro adalah smartphone kelas atas (flagship) yang dirilis Huawei pada April 2026. Ponsel ini mengunggulkan kamera inovatif berbasis AI, desain menawan, serta baterai super jumbo.",
        detail: "Layar: OLED LTPO 6,6 inci, resolusi FHD+, refresh rate adaptif 1-120Hz. Dilapisi proteksi Kunlun Glass generasi kedua,Prosesor: Huawei Kirin 9030S (dodeca-core),Kamera Belakang:Kamera Utama: 50 MP (apertur variabel F1.4–F4.0, OIS, RYYB)., Kamera Ultrawide: 12,5 MP (F2.2)., Kamera Telefoto: 50 MP (F2.1, OIS, 4x optical zoom), Kamera Depan: 13 MP (F2.0), Baterai & Pengisian Daya: 6.000 mAh dengan pengisian cepat 100W wired dan 80W wireless, Sistem Operasi: HarmonyOS 6.1 (tanpa dukungan Google Mobile Services), Fitur Tambahan: Sertifikasi IP68 & IP69 untuk ketahanan terhadap air dan debu, serta fitur AI inovatif seperti Real-Time AI Pose.",
        image: "https://cdn.phototourl.com/free/2026-06-01-416029e7-bd6d-4482-8693-c49c10789891.png"
    },
    {
        id: 10,
        title: "HUAWEI PURA 90 PRO MAX",
        desc: "Huawei Pura 90 Pro Max adalah flagship yang berfokus pada fotografi, ditenagai chipset Kirin 9030S, RAM 12GB, dan baterai besar 6000 mAh. HP ini menonjol dengan kamera telefoto periskop 200MP, layar LTPO OLED 6,9 inci, dan berjalan pada sistem operasi HarmonyOS 6.1.",
        detail: "Layar: 6,9 inci, LTPO OLED, resolusi 1308x2880 piksel, refresh rate adaptif 1-120Hz, Chipset: HiSilicon Kirin 9030S, RAM & Penyimpanan: 12GB / 256GB (tidak dapat diperluas), Sistem Operasi: HarmonyOS 6.1,Kamera Belakang:Utama: 50 MP (F1.4–F4.0) dengan OIS, Ultrawide: 40 MP (F2.2), Telefoto Periskop: 200 MP (F2.6) dengan OIS, Kamera Depan: 13 MP, Kapasitas Baterai: 6000 mAh, Pengisian Daya: 100W SuperCharge, pengisian nirkabel 80W, reverse wireless charging, Durabilitas: Sertifikasi IP68 & IP69 (tahan debu, air, dan semprotan air tekanan tinggi), Dimensi & Berat: 164 x 77,1 x 8,1 mm | 230,5 gram.",
        image: "https://cdn.phototourl.com/free/2026-06-01-416029e7-bd6d-4482-8693-c49c10789891.png"
    },
    {
        id: 11,
        title: "POCO F8 PRO",
        desc: "POCO F8 Pro adalah smartphone kelas flagship killer yang ditenagai chipset papan atas Snapdragon 8 Elite dan baterai jumbo berkapasitas 6210 mAh.",
        detail: "Ponsel ini hadir dengan layar AMOLED 6,59 inci beresolusi tinggi, konfigurasi kamera belakang 50 MP (utama) + 50 MP (telefoto) + 8 MP (ultrawide), serta pengisian daya cepat 100W HyperCharge.",
        image: "https://cdn.phototourl.com/free/2026-06-02-9c81a6cd-3066-4ecf-8eb1-302ed4edac4a.jpg"
    },
    {
        id: 12,
        title: "POCO F8 ULTRA",
        desc: "POCO F8 Ultra adalah ponsel kelas flagship killer yang ditenagai oleh prosesor Snapdragon 8 Elite Gen 5 dan baterai jumbo 6.500 mAh dengan HyperCharge 100W. Ponsel ini menonjolkan layar AMOLED 6,9 inci 120Hz, sistem kamera periskop 50MP, serta teknologi audio hasil kolaborasi dengan Bose.",
        detail: "Layar: AMOLED 6,9 inci, resolusi 2608 x 1200 piksel, refresh rate 120Hz, dan kecerahan puncak mencapai 3.500 nit. Mendukung Wet Touch 2.0, HDR10+, dan Dolby Vision,    Kamera Belakang:Kamera Utama: 50 MP (Sensor Light Fusion 950) dengan OIS.,                Kamera Telefoto Periskop: 50 MP.,Kamera Ultra-lebar: 50 MP,Kamera Depan: 32 MP,       Chipset: Qualcomm Snapdragon 8 Elite Gen 5 (manufaktur 3 nm) dengan CPU Octa-core dan GPU Adreno,                        RAM & Memori: Kapasitas RAM 12GB atau 16GB (LPDDR5X) dan memori internal 256GB atau 512GB (UFS 4.1),            Baterai & Pengisian Daya: Kapasitas 6.500 mAh dengan fast charging 100W, serta wireless charging 50W,               Sistem Operasi: Xiaomi HyperOS 3 berbasis Android 16,       Audio: Speaker Stereo dengan Subwoofer Khusus dan teknologi Sound by Bose,               Fitur Lainnya: Sertifikasi tahan air dan debu IP68, NFC, Wi-Fi 7, dan sensor sidik jari ultrasonik di dalam layar,   Material Bodi: Tersedia dalam varian Black (matte) dan Denim Blue (material nano-tech generasi ketiga).",
        image: "https://cdn.phototourl.com/free/2026-06-02-b98b7f3c-4840-4c49-ab17-5aa40d2ed97b.jpg"
    },
];

const reviewData = [
    {
        id: 1,
        title: "Review Samsung Galaxy S26 Ultra",
        rating: 4.8,
        review: "Kamera 200MP luar biasa jernih, chip snapdragon 8 elite gen 5 sangat cepat. Sayangnya harga cukup tinggi.",
        detail: "Baterai tahan 1 hari pemakaian normal. Layar Dynamic AMOLED 2x terbaik di kelasnya.",
        image: "https://placehold.co/400x250/1a1a2e/0acf83?text=Samsung+S26+Ultra"
    },
    {
        id: 2,
        title: "Review iPhone 17 Pro Max",
        rating: 4.9,
        review: "Dynamic Island, A19 Bionic gila cepat. Kamera video terbaik.",
        detail: "Baterai 4823mAh, charging 25W, iOS 26 dengan fitur AI canggih.",
        image: "https://placehold.co/400x250/16213e/f4a261?text=iPhone+17+Pro+Max"
    },
    {
        id: 3,
        title: "Review Xiaomi 17 Ultra",
        rating: 4.7,
        review: "Kamera Leica 1 inci menghasilkan foto kelas DSLR. Harga lebih bersahabat.",
        detail: "Snapdragon 8 elite gen 5, layar 120Hz, fast charging 90W wireless.",
        image: "https://placehold.co/400x250/0f3460/e94560?text=Xiaomi+17+Ultra"
    }
];

const trendData = [
    { icon: "fas fa-robot", title: "AI On-Device", number: "+245%", desc: "Peningkatan AI yang berjalan langsung di chip HP tanpa cloud." },
    { icon: "fas fa-folder-open", title: "Ponsel Lipat 3", number: "12 Model", desc: "Layar lipat tiga segmen dengan ketebalan hanya 12mm." },
    { icon: "fas fa-charging-station", title: "Wireless 100W", number: "10 Menit", desc: "Isi daya 0-80% hanya dalam 10 menit secara wireless." },
    { icon: "fas fa-shield-alt", title: "Quantum Security", number: "100%", desc: "Enkripsi quantum untuk keamanan maksimal." }
];

// ==================== DATA WEBSITE YSCELL (SEMUA LINK DI JS) ====================
const websiteData = {
    // Biodata YSCELL
    biodata: {
        name: "YUGA SEPTIAN RAMADHAN",
        LAHIR: "2007",
        category: "BERITA GADGET,WEB DEV,DAN TOPUP GAME STORE",
        status: "Aktif & Terpercaya",
        description: "Penyedia layanan top up game, PPOB, dan SMM terpercaya dengan 7+ versi website"
    },
    
    // Website Utama / Portfolio
    mainWebsite: {
        url: "https://portofolioyscell.kesug.com",
        title: "Portofolio YSCELL",
        domain: "portofolioyscell.kesug.com",
        tag: "⭐ PORTFOLIO UTAMA",
        icon: "fas fa-id-card",
        version: "main"
    },
    
    // Semua Versi Website (1-7)
    versions: [
        {
            id: 1,
            url: "http://yscell.kesug.com",
            title: "V1 - WEBSITE MANUAL PERTAMA",
            domain: "yscell.kesug.com",
            tag: "📱 ORDER VIA WA",
            icon: "fas fa-store",
            color: "v1",
            description: "Website manual pertama dengan sistem order via WhatsApp"
        },
        {
            id: 2,
            url: "http://yscellstore.com",
            title: "V2 - BEST PPOB",
            domain: "yscellstore.com",
            tag: "⚡ PPOB TERBAIK",
            icon: "fas fa-credit-card",
            color: "v2",
            description: "Layanan PPOB terbaik untuk pembayaran tagihan"
        },
        {
            id: 3,
            url: "https://www.yscellstore.biz.id",
            title: "V3 - THE BEST WEBSITE TOPUP",
            domain: "yscellstore.biz.id",
            tag: "🎮 TOPUP GAME",
            icon: "fas fa-gamepad",
            color: "v3",
            description: "Website top up game terbaik dengan harga kompetitif"
        },
        {
            id: 4,
            url: "http://yscellstore.ngtopup.com",
            title: "V4 - WEB DARI SIMANTEK PEMERINTAH",
            domain: "yscellstore.ngtopup.com",
            tag: "🏛️ SIMANTEK",
            icon: "fas fa-building",
            color: "v4",
            description: "Website resmi dari program Simantek Pemerintah"
        },
        {
            id: 5,
            url: "https://yscellstore.my.id",
            title: "V5 - UJI COBA GAN",
            domain: "yscellstore.my.id",
            tag: "🧪 BETA TEST",
            icon: "fas fa-flask",
            color: "v5",
            description: "Versi uji coba dengan fitur-fitur terbaru"
        },
        {
            id: 6,
            url: "https://yscellstoresmm.my.id",
            title: "V6 - BEST SMM",
            domain: "yscellstoresmm.my.id",
            tag: "📈 SOCIAL MEDIA",
            icon: "fas fa-chart-simple",
            color: "v6",
            description: "Layanan SMM (Social Media Marketing) terbaik"
        },
        {
            id: 7,
            url: "https://yscellstoremlbb.my.id",
            title: "V7 - MLBB",
            domain: "yscellstoremlbb.my.id",
            tag: "🎯 MLBB SPECIALIST",
            icon: "fas fa-dragon",
            color: "v7",
            description: "Khusus untuk top up game Mobile Legends Bang Bang"
        }
    ],
    
    // Statistik
    stats: [
        { icon: "fas fa-globe", number: "7+", label: "Versi Website" },
        { icon: "fas fa-users", number: "10K+", label: "Customer Aktif" },
        { icon: "fas fa-trophy", number: "100%", label: "Terpercaya" },
        { icon: "fas fa-clock", number: "24/7", label: "Nonstop Service" }
    ]
};

// ==================== RENDER FUNCTIONS ====================
function renderNews() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;
    grid.innerHTML = newsData.map(news => `
        <div class="news-card">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <h3>${news.title}</h3>
                <p>${news.desc}</p>
                <button class="read-more" data-title="${news.title}" data-detail="${news.detail}">Baca Selengkapnya →</button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const title = btn.getAttribute('data-title');
            const detail = btn.getAttribute('data-detail');
            openModal(title, detail);
        });
    });
}

function renderReviews() {
    const grid = document.getElementById('reviewGrid');
    if (!grid) return;
    grid.innerHTML = reviewData.map(review => `
        <div class="review-card">
            <img src="${review.image}" alt="${review.title}">
            <div class="review-content">
                <h3>${review.title}</h3>
                <div class="rating">${'★'.repeat(Math.floor(review.rating))}${review.rating % 1 ? '½' : ''} (${review.rating})</div>
                <p>${review.review}</p>
                <button class="review-btn" data-title="${review.title}" data-detail="${review.detail}">Review Lengkap →</button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.review-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const detail = btn.getAttribute('data-detail');
            openModal(title, detail);
        });
    });
}

function renderTrends() {
    const container = document.getElementById('trendContainer');
    if (!container) return;
    container.innerHTML = trendData.map((trend, idx) => `
        <div class="trend-card">
            <i class="${trend.icon}"></i>
            <h3>${trend.title}</h3>
            <div class="trend-number">${trend.number}</div>
            <p>${trend.desc}</p>
        </div>
    `).join('');
}

// ==================== RENDER FUNGSI OFFICIAL WEB ====================
function renderBiodata() {
    const container = document.getElementById('biodataContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="biodata-header">
            <i class="fas fa-id-card"></i>
            <h3>BIODATA YSCELL</h3>
        </div>
        <div class="biodata-content">
            <div class="biodata-item">
                <i class="fas fa-user"></i>
                <span><strong>Nama:</strong> ${websiteData.biodata.name}</span>
            </div>
            <div class="biodata-item">
                <i class="fas fa-calendar-alt"></i>
                <span><strong>Berdiri:</strong> ${websiteData.biodata.established}</span>
            </div>
            <div class="biodata-item">
                <i class="fas fa-tag"></i>
                <span><strong>Kategori:</strong> ${websiteData.biodata.category}</span>
            </div>
            <div class="biodata-item">
                <i class="fas fa-chart-line"></i>
                <span><strong>Status:</strong> ${websiteData.biodata.status}</span>
            </div>
            <div class="biodata-item">
                <i class="fas fa-info-circle"></i>
                <span><strong>Deskripsi:</strong> ${websiteData.biodata.description}</span>
            </div>
        </div>
    `;
}

function renderMainWebsite() {
    const container = document.getElementById('mainWebsiteContainer');
    if (!container) return;
    
    const main = websiteData.mainWebsite;
    container.innerHTML = `
        <a href="${main.url}" target="_blank" rel="noopener noreferrer" class="officialweb-card-link" data-url="${main.url}" data-title="${main.title}">
            <div class="officialweb-item main-web">
                <i class="${main.icon}"></i>
                <div class="web-info">
                    <h4>${main.title}</h4>
                    <p>${main.domain}</p>
                    <span class="web-tag">${main.tag}</span>
                </div>
            </div>
        </a>
    `;
}

function renderVersionWebsites() {
    const container = document.getElementById('versionWebsiteContainer');
    if (!container) return;
    
    container.innerHTML = websiteData.versions.map(version => `
        <a href="${version.url}" target="_blank" rel="noopener noreferrer" class="officialweb-card-link" data-url="${version.url}" data-title="${version.title}">
            <div class="officialweb-item ${version.color}">
                <i class="${version.icon}"></i>
                <div class="web-info">
                    <h4>${version.title}</h4>
                    <p>${version.domain}</p>
                    <span class="web-tag">${version.tag}</span>
                    <small>${version.description}</small>
                </div>
            </div>
        </a>
    `).join('');
}

function renderStats() {
    const container = document.getElementById('statsContainer');
    if (!container) return;
    
    container.innerHTML = websiteData.stats.map(stat => `
        <div class="stat-card">
            <i class="${stat.icon}"></i>
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

// ==================== EVENT HANDLER UNTUK OFFICIAL WEB LINK ====================
function initOfficialWebLinks() {
    const links = document.querySelectorAll('.officialweb-card-link');
    
    links.forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        newLink.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('data-url') || this.getAttribute('href');
            const title = this.getAttribute('data-title') || this.querySelector('.web-info h4')?.innerText || 'Website YSCELL';
            
            showToast(`🌐 Membuka ${title}...`, true);
            
            setTimeout(() => {
                window.open(url, '_blank');
            }, 300);
        });
    });
}

// ==================== INITIALISASI OFFICIAL WEB ====================
function initOfficialWeb() {
    console.log('🌐 Initializing Official Web Module...');
    renderBiodata();
    renderMainWebsite();
    renderVersionWebsites();
    renderStats();
    
    setTimeout(() => {
        initOfficialWebLinks();
    }, 100);
    
    console.log('✅ Official Web Module Loaded - 1 Main Website + 7 Versi Website');
}

// ==================== NAVIGATION SYSTEM ====================
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageId) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
    
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (pageId === 'officialweb') {
        setTimeout(() => {
            initOfficialWeb();
        }, 50);
    }
}

// ==================== MODAL FUNCTIONS ====================
const modal = document.getElementById('newsModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetail = document.getElementById('modalDetail');
const closeModalSpan = document.querySelector('.close-modal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openModal(title, detail) {
    modalTitle.innerText = title;
    modalDetail.innerText = detail;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== SOCIAL MEDIA ICONS ====================
function renderSocialIcons() {
    const container = document.getElementById('socialIconsContainer');
    if (!container) return;
    
    const socials = [
        { icon: "fab fa-instagram", url: "https://instagram.com/yscell_gadget805", color: "#E4405F" },
        { icon: "fab fa-tiktok", url: "https://tiktok.com/@yscellstore1", color: "#000000" },
        { icon: "fab fa-youtube", url: "https://youtube.com/@yscellstore", color: "#FF0000" },
        { icon: "fab fa-facebook", url: "https://www.facebook.com/share/1D5H7ntQtW", color: "#1DA1F2" },
        { icon: "fab fa-whatsapp", url: "https://wa.me/6285147888856", color: "#008000" }
    ];
    
    container.innerHTML = socials.map(social => 
        `<i class="${social.icon}" style="color: ${social.color}" onclick="window.open('${social.url}', '_blank')"></i>`
    ).join('');
}

// ==================== EVENT LISTENERS ====================
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (page) navigateTo(page);
    });
});

document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-nav');
        if (page) navigateTo(page);
    });
});

const subscribeBtn = document.getElementById('subscribeNotif');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        showToast('✨ Kamu akan mendapat notifikasi berita gadget terbaru 2026!', true);
    });
}

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const featured = document.querySelector('.featured-section');
        if (featured) featured.scrollIntoView({ behavior: 'smooth' });
    });
}

closeModalSpan.addEventListener('click', closeModalFunc);
modalCloseBtn.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'home';
    if (['home', 'news', 'review', 'trend', 'officialweb'].includes(hash)) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }
}

// ==================== INITIAL RENDER ====================
renderNews();
renderReviews();
renderTrends();
renderSocialIcons();
handleHashChange();
window.addEventListener('hashchange', handleHashChange);

const video = document.getElementById('bg-video');
if (video) {
    video.play().catch(e => console.log("Video autoplay prevented, user interaction needed"));
}

console.log("🚀 YSCellGadget 2026 - Siap dengan semua modul termasuk Official Web YSCELL!");
console.log("📊 Total Website YSCELL: 1 Main + 7 Versi = 8 Website");
