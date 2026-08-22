// Novamato Esports 2026 — Simple & Clean Script with Uniform Header Engine

const ROSTER_DATA = {
    cs2: [
        { id: 1, name: 'white', role: 'Entry Fragger', rating: '1.24', kd: '1.32', photo: 'imagens/1.jpg', steamUrl: 'https://steamcommunity.com/id/white1209/', trackerUrl: 'https://leetify.com/' },
        { id: 2, name: 'migga', role: 'AWPer', rating: '1.28', kd: '1.40', photo: 'imagens/2.jpg', steamUrl: 'https://steamcommunity.com/id/migggal', trackerUrl: 'https://leetify.com/' },
        { id: 3, name: 'CØSTA', role: 'Rifler / Support', rating: '1.15', kd: '1.12', photo: 'imagens/3.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199049671771/', trackerUrl: 'https://leetify.com/' },
        { id: 4, name: 'FurryFeetLover_69', role: 'IGL (Captain)', rating: '1.10', kd: '1.08', photo: 'imagens/4.jpg', steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn', trackerUrl: 'https://leetify.com/' },
        { id: 5, name: 'mr.albuquecas', role: 'Lurker', rating: '1.18', kd: '1.20', photo: 'imagens/5.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198843083161/', trackerUrl: 'https://leetify.com/' },
        { id: 6, name: 'Mr.Pigeon', role: 'Rifler', rating: '1.09', kd: '1.05', photo: 'imagens/6.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199132612024/', trackerUrl: 'https://leetify.com/' },
        { id: 7, name: 'Neto', role: 'Support', rating: '1.07', kd: '1.02', photo: 'imagens/7.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199053161311/', trackerUrl: 'https://leetify.com/' },
        { id: 8, name: 'Optrista_CG', role: 'Rifler', rating: '1.12', kd: '1.15', photo: 'imagens/8.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199082165295/', trackerUrl: 'https://leetify.com/' },
        { id: 9, name: 'Tutury', role: 'Entry Fragger', rating: '1.21', kd: '1.25', photo: 'imagens/9.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198183764933/', trackerUrl: 'https://leetify.com/' },
        { id: 10, name: 't6maj', role: 'AWPer', rating: '1.16', kd: '1.19', photo: 'imagens/10.jpg', steamUrl: 'https://steamcommunity.com/id/tomas1437', trackerUrl: 'https://leetify.com/' },
        { id: 11, name: 'SIDST', role: 'Rifler', rating: '1.08', kd: '1.04', photo: 'imagens/11.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199207194374/', trackerUrl: 'https://leetify.com/' },
        { id: 12, name: 'paulo minoso-', role: 'Support', rating: '1.14', kd: '1.11', photo: 'imagens/12.jpg', steamUrl: 'https://steamcommunity.com/id/narcigod', trackerUrl: 'https://leetify.com/' }
    ],
    clashRoyale: [
        { id: 1, name: 'mr.white', tag: '#28G9G2P9Y', role: 'Leader', trophies: '10,450' },
        { id: 2, name: 'piquele', tag: '#22C0YC80P', role: 'Co-Leader', trophies: '10,210' },
        { id: 3, name: 'RICARDO;-) :-P', tag: '#JUC89G', role: 'Co-Leader', trophies: '10,180' },
        { id: 4, name: 'optrista_CG', tag: '#C88YUVP98', role: 'Co-Leader', trophies: '10,120' },
        { id: 5, name: '/Pedro/', tag: '#2ULQYRQP', role: 'Member', trophies: '10,050' },
        { id: 6, name: 'CØSTA', tag: '#GRQCURJP', role: 'Co-Leader', trophies: '10,090' },
        { id: 7, name: '✌MIGUEL✌', tag: '#8LJU8JL', role: 'Elite Member', trophies: '10,030' }
    ],
    minecraft: [
        { id: 1, name: 'white', role: 'Lead Architect', builds: 'Novamato Castle & Spawn' },
        { id: 2, name: 'CØSTA', role: 'Redstone Engineer', builds: 'Nether Express Hub' },
        { id: 3, name: 'Optrista_CG', role: 'Adventure Map Designer', builds: 'Dungeon Boss Arena' }
    ]
};

// Uniform Nav Highlighting
function highlightActiveNav() {
    const path = window.location.pathname;
    let filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    if (filename === '') filename = 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === filename) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('novamato_clean_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('novamato_clean_theme', target);
            showToast(`Modo ${target === 'light' ? 'Claro' : 'Escuro'} ativado`);
        });
    }
}

// Toast System
function showToast(msg) {
    let box = document.querySelector('.toast-box');
    if (!box) {
        box = document.createElement('div');
        box.className = 'toast-box';
        document.body.appendChild(box);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    box.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.2s ease';
        setTimeout(() => toast.remove(), 200);
    }, 2200);
}

// Copy IP Helper
function copyText(text, label = 'Copiado!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${label}`);
    }).catch(() => {
        showToast(text);
    });
}

// Render Roster Cards Grid (Only render avatar if photo exists)
function renderGrid(filter = 'all') {
    const grid = document.getElementById('rosterGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let players = [];
    
    if (filter === 'all' || filter === 'cs2') {
        ROSTER_DATA.cs2.forEach(p => players.push({ ...p, game: 'CS2', type: 'cs2' }));
    }
    if (filter === 'all' || filter === 'clash') {
        ROSTER_DATA.clashRoyale.forEach(p => players.push({ ...p, game: 'Clash Royale', type: 'clash' }));
    }
    if (filter === 'all' || filter === 'minecraft') {
        ROSTER_DATA.minecraft.forEach(p => players.push({ ...p, game: 'Minecraft', type: 'minecraft' }));
    }
    
    players.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const avatarHtml = p.photo 
            ? `<div class="card-avatar" style="background-image: url('${p.photo}');"></div>` 
            : '';
        const statLabel = p.type === 'cs2' ? `Rating: ${p.rating}` : (p.type === 'clash' ? `🏆 ${p.trophies}` : `Builder`);
        
        card.innerHTML = `
            <div class="card-top">
                ${avatarHtml}
                <div>
                    <div class="card-name">${p.name}</div>
                    <div class="card-role">${p.role}</div>
                </div>
            </div>
            <div class="card-bottom">
                <span class="card-badge">${p.game}</span>
                <span style="font-weight: 600;">${statLabel}</span>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });
}

// Tab Filter Chips
function initChips() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderGrid(chip.dataset.filter);
        });
    });
}

// Player Modal
function openModal(p) {
    const modal = document.getElementById('playerModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;
    
    let content = '';
    
    if (p.type === 'cs2') {
        content = `
            <div style="display: flex; gap: 1rem; margin: 1.25rem 0;">
                <div style="flex: 1; background: var(--bg-main); padding: 0.8rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted);">HLTV RATING</div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent);">${p.rating}</div>
                </div>
                <div style="flex: 1; background: var(--bg-main); padding: 0.8rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted);">K/D RATIO</div>
                    <div style="font-size: 1.3rem; font-weight: 700;">${p.kd}</div>
                </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
                <a href="${p.steamUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">Steam Profile →</a>
                <a href="${p.trackerUrl}" target="_blank" class="btn btn-secondary" style="flex: 1;">Leetify Stats →</a>
            </div>
        `;
    } else if (p.type === 'clash') {
        content = `
            <div style="background: var(--bg-main); padding: 1rem; border-radius: 8px; margin: 1.25rem 0; display: flex; justify-content: space-between;">
                <span style="color: var(--text-muted);">Troféus:</span>
                <strong style="color: var(--accent);">🏆 ${p.trophies}</strong>
            </div>
            <a href="https://statsroyale.com/profile/${p.tag.replace('#', '')}" target="_blank" class="btn btn-primary" style="width: 100%;">StatsRoyale Profile →</a>
        `;
    } else {
        content = `
            <div style="background: var(--bg-main); padding: 1rem; border-radius: 8px; margin: 1.25rem 0;">
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">PROJETOS</div>
                <div style="font-weight: 600; color: var(--accent);">${p.builds}</div>
            </div>
        `;
    }
    
    const avatarHtml = p.photo 
        ? `<div style="width: 56px; height: 56px; border-radius: 10px; background: url('${p.photo}') center/cover;"></div>` 
        : '';
        
    body.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
            ${avatarHtml}
            <div>
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800;">${p.name}</h3>
                <div style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">${p.game} · ${p.role}</div>
            </div>
        </div>
        ${content}
    `;
    
    modal.classList.add('active');
}

// Modal Click Out & Close
function initModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => {
        const close = m.querySelector('.modal-close');
        if (close) close.addEventListener('click', () => m.classList.remove('active'));
        m.addEventListener('click', (e) => {
            if (e.target === m) m.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    initTheme();
    renderGrid('all');
    initChips();
    initModals();
});
