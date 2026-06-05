// Ganti API_BASE di awal script.js
const API_BASE = '/yscellgadget/api.php';

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

// ==================== OFFICIAL WEB RENDER ====================
function renderBiodata() {
    const container = document.getElementById('biodataContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="biodata-header">
            <i class="fas fa-id-card"></i>
            <h3>BIODATA YSCELL</h3>
        </div>
        <div class="biodata-content">
            <div class="biodata-item"><i class="fas fa-user"></i><span><strong>Nama:</strong> ${websiteData.biodata.name}</span></div>
            <div class="biodata-item"><i class="fas fa-calendar-alt"></i><span><strong>Berdiri:</strong> ${websiteData.biodata.established}</span></div>
            <div class="biodata-item"><i class="fas fa-tag"></i><span><strong>Kategori:</strong> ${websiteData.biodata.category}</span></div>
            <div class="biodata-item"><i class="fas fa-chart-line"></i><span><strong>Status:</strong> ${websiteData.biodata.status}</span></div>
            <div class="biodata-item"><i class="fas fa-info-circle"></i><span><strong>Deskripsi:</strong> ${websiteData.biodata.description}</span></div>
        </div>
    `;
}

function renderMainWebsite() {
    const container = document.getElementById('mainWebsiteContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="officialweb-item main-web" onclick="window.open('${websiteData.mainWebsite.url}', '_blank')">
            <i class="${websiteData.mainWebsite.icon}"></i>
            <div class="web-info">
                <h4>${websiteData.mainWebsite.title}</h4>
                <p>${websiteData.mainWebsite.domain}</p>
                <span class="web-tag">${websiteData.mainWebsite.tag}</span>
            </div>
        </div>
    `;
}

function renderVersionWebsites() {
    const container = document.getElementById('versionWebsiteContainer');
    if (!container) return;
    container.innerHTML = websiteData.versions.map(v => `
        <div class="officialweb-item ${v.color}" onclick="window.open('${v.url}', '_blank')">
            <i class="${v.icon}"></i>
            <div class="web-info">
                <h4>${v.title}</h4>
                <p>${v.domain}</p>
                <span class="web-tag">${v.tag}</span>
                <small>${v.description}</small>
            </div>
        </div>
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

// ==================== HELPER FUNCTIONS ====================
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.innerText = message;
    toast.style.background = isSuccess ? '#0acf83' : '#ef4444';
    toast.style.color = isSuccess ? '#0a0f1a' : 'white';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Modal Functions
const modal = document.getElementById('newsModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetail = document.getElementById('modalDetail');

window.openModal = function(title, detail) {
    modalTitle.innerText = title;
    modalDetail.innerText = detail;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Social Media Icons
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

// Navigation
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) targetPage.classList.add('active-page');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageId) link.classList.add('active-link');
        else link.classList.remove('active-link');
    });
    
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

document.getElementById('subscribeNotif')?.addEventListener('click', () => {
    showToast('✨ Kamu akan mendapat notifikasi berita gadget terbaru 2026!');
});

document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.featured-section')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.close-modal')?.addEventListener('click', closeModal);
document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.getElementById('mobile-menu')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('active');
});

// Hash change handler
function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'home';
    if (['home', 'news', 'review', 'trend', 'officialweb'].includes(hash)) {
        navigateTo(hash);
    }
}

// ==================== INITIALIZATION ====================
async function init() {
    await renderNews();
    await renderReviews();
    await renderTrends();
    renderBiodata();
    renderMainWebsite();
    renderVersionWebsites();
    renderStats();
    renderSocialIcons();
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    // Autoplay video
    const video = document.getElementById('bg-video');
    if (video) video.play().catch(e => console.log('Video autoplay prevented'));
    
    console.log('🚀 YSCELLGADGET - Connected to MySQL Database');
}

init();