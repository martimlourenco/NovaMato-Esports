// Novamato Esports 2026 — CS2 "DOMINATE" Script

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

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('novamato_dominate_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('novamato_dominate_theme', target);
            showToast(`Modo ${target === 'light' ? 'Claro' : 'Escuro'} ativado`);
        });
    }
}

// Toast Alert
function showToast(msg) {
    let box = document.querySelector('.toast-container');
    if (!box) {
        box = document.createElement('div');
        box.className = 'toast-container';
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
    }, 2400);
}

// Copy Helper
function copyText(text, label = 'Copiado!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${label}`);
    }).catch(() => {
        showToast(text);
    });
}

// Render Roster Grid (If no photo, only name is rendered)
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
        card.className = 'card-dominate';
        
        const avatarHtml = p.photo 
            ? `<div class="card-dominate-avatar" style="background-image: url('${p.photo}');"></div>` 
            : '';
        const statLabel = p.type === 'cs2' ? `Rating: ${p.rating}` : (p.type === 'clash' ? `🏆 ${p.trophies}` : `Builder`);
        
        card.innerHTML = `
            <div class="card-dominate-top">
                ${avatarHtml}
                <div>
                    <div class="card-dominate-name">${p.name}</div>
                    <div class="card-dominate-role">${p.role}</div>
                </div>
            </div>
            <div class="card-dominate-bottom">
                <span class="badge-dominate">${p.game}</span>
                <span class="stat-dominate">${statLabel}</span>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });
}

// Tab Filter Buttons
function initTabs() {
    const tabs = document.querySelectorAll('.tab-dominate');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGrid(tab.dataset.filter);
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
                <div style="flex: 1; background: var(--bg-dark); padding: 0.8rem; border-radius: 4px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-family: var(--font-heading); font-size: 0.7rem; color: var(--text-gray); font-weight: 800;">HLTV RATING</div>
                    <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: var(--accent-red);">${p.rating}</div>
                </div>
                <div style="flex: 1; background: var(--bg-dark); padding: 0.8rem; border-radius: 4px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-family: var(--font-heading); font-size: 0.7rem; color: var(--text-gray); font-weight: 800;">K/D RATIO</div>
                    <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: var(--text-white);">${p.kd}</div>
                </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
                <a href="${p.steamUrl}" target="_blank" class="btn-arena-red" style="flex: 1; text-align: center; padding: 0.7rem;">Steam Profile →</a>
                <a href="${p.trackerUrl}" target="_blank" class="btn-header-signin" style="flex: 1; text-align: center;">Leetify Stats</a>
            </div>
        `;
    } else if (p.type === 'clash') {
        content = `
            <div style="background: var(--bg-dark); padding: 1rem; border-radius: 4px; margin: 1.25rem 0; display: flex; justify-content: space-between; border: 1px solid var(--border-color);">
                <span style="color: var(--text-gray); font-family: var(--font-heading); font-weight: 800;">TROFÉUS:</span>
                <strong style="color: var(--accent-red); font-family: var(--font-heading); font-size: 1.2rem;">🏆 ${p.trophies}</strong>
            </div>
            <a href="https://statsroyale.com/profile/${p.tag.replace('#', '')}" target="_blank" class="btn-arena-red" style="width: 100%; text-align: center; display: block; padding: 0.7rem;">StatsRoyale Profile →</a>
        `;
    } else {
        content = `
            <div style="background: var(--bg-dark); padding: 1rem; border-radius: 4px; margin: 1.25rem 0; border: 1px solid var(--border-color);">
                <div style="font-family: var(--font-heading); font-size: 0.72rem; color: var(--text-gray); font-weight: 800; margin-bottom: 0.3rem;">PROJETOS EM DESTAQUE</div>
                <div style="font-family: var(--font-heading); font-weight: 900; color: var(--accent-red);">${p.builds}</div>
            </div>
        `;
    }
    
    const avatarHtml = p.photo 
        ? `<div style="width: 56px; height: 56px; border-radius: 4px; background: url('${p.photo}') center/cover; border: 1.5px solid var(--accent-red);"></div>` 
        : '';
        
    body.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
            ${avatarHtml}
            <div>
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 900; text-transform: uppercase;">${p.name}</h3>
                <div style="font-family: var(--font-heading); font-size: 0.82rem; color: var(--accent-red); font-weight: 800;">${p.game} · ${p.role}</div>
            </div>
        </div>
        ${content}
    `;
    
    modal.classList.add('active');
}

// Modal Close
function initModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => {
        const close = m.querySelector('.modal-close-btn');
        if (close) close.addEventListener('click', () => m.classList.remove('active'));
        m.addEventListener('click', (e) => {
            if (e.target === m) m.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderGrid('all');
    initTabs();
    initModals();
});
