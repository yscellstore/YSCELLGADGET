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
        image: "https://mature-tan-yydgrc4n.edgeone.app/vivo-X300-Ultra-3.jpg"
    }
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
    
    // attach event listeners to new buttons
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

// ==================== NAVIGATION SYSTEM ====================
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
    
    // Update active class on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageId) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
    
    // Update URL hash
    window.location.hash = pageId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

// ==================== EVENT LISTENERS ====================
// Navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (page) navigateTo(page);
    });
});

// Hero buttons
document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-nav');
        if (page) navigateTo(page);
    });
});

// Subscribe notification
const subscribeBtn = document.getElementById('subscribeNotif');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        showToast('✨ Kamu akan mendapat notifikasi berita gadget terbaru 2026!', true);
    });
}

// Scroll indicator (scroll to featured section)
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const featured = document.querySelector('.featured-section');
        if (featured) featured.scrollIntoView({ behavior: 'smooth' });
    });
}

// Modal close events
closeModalSpan.addEventListener('click', closeModalFunc);
modalCloseBtn.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Handle hash change for deep linking
function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'home';
    if (['home', 'news', 'review', 'trend'].includes(hash)) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }
}

// Initial render and setup
renderNews();
renderReviews();
renderTrends();
handleHashChange();
window.addEventListener('hashchange', handleHashChange);

// Video background fallback jika tidak autoplay (due to browser policy)
const video = document.getElementById('bg-video');
if (video) {
    video.play().catch(e => console.log("Video autoplay prevented, user interaction needed"));
}

console.log("YSCellGadget 2026 - Siap dengan animasi video & navigasi lengkap!");