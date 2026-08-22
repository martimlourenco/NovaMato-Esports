// Novamato Esports 2026 — Artistic & Editorial Core Engine

const PLAYERS_DATABASE = {
    cs2: [
        { id: 1, name: 'white', role: 'Entry Fragger', rating: '1.24', kd: '1.32', hs: '64%', dpi: '800', sens: '1.15', res: '1280x960 4:3', crosshair: 'CSGO-f5K8B-3vT4W-9Xy2z-Lp9Q1', photo: 'imagens/1.jpg', steamUrl: 'https://steamcommunity.com/id/white1209/', trackerUrl: 'https://leetify.com/' },
        { id: 2, name: 'migga', role: 'AWPer', rating: '1.28', kd: '1.40', hs: '42%', dpi: '400', sens: '1.80', res: '1280x960 4:3', crosshair: 'CSGO-m7H2A-8rP1W-2Kq9X-Zt3V0', photo: 'imagens/2.jpg', steamUrl: 'https://steamcommunity.com/id/migggal', trackerUrl: 'https://leetify.com/' },
        { id: 3, name: 'CØSTA', role: 'Rifler / Support', rating: '1.15', kd: '1.12', hs: '58%', dpi: '800', sens: '1.00', res: '1920x1080 16:9', crosshair: 'CSGO-9xY2Z-Lp9Q1-f5K8B-3vT4W', photo: 'imagens/3.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199049671771/', trackerUrl: 'https://leetify.com/' },
        { id: 4, name: 'FurryFeetLover_69', role: 'IGL (Captain)', rating: '1.10', kd: '1.08', hs: '51%', dpi: '800', sens: '1.20', res: '1280x960 4:3', crosshair: 'CSGO-2Kq9X-Zt3V0-m7H2A-8rP1W', photo: 'imagens/4.jpg', steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn', trackerUrl: 'https://leetify.com/' },
        { id: 5, name: 'mr.albuquecas', role: 'Lurker', rating: '1.18', kd: '1.20', hs: '55%', dpi: '400', sens: '2.10', res: '1280x960 4:3', crosshair: 'CSGO-Lp9Q1-f5K8B-3vT4W-9xY2Z', photo: 'imagens/5.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198843083161/', trackerUrl: 'https://leetify.com/' },
        { id: 6, name: 'Mr.Pigeon', role: 'Rifler', rating: '1.09', kd: '1.05', hs: '49%', dpi: '800', sens: '1.10', res: '1920x1080 16:9', crosshair: 'CSGO-8rP1W-2Kq9X-Zt3V0-m7H2A', photo: 'imagens/6.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199132612024/', trackerUrl: 'https://leetify.com/' },
        { id: 7, name: 'Neto', role: 'Support', rating: '1.07', kd: '1.02', hs: '48%', dpi: '800', sens: '1.05', res: '1280x960 4:3', crosshair: 'CSGO-3vT4W-9xY2Z-Lp9Q1-f5K8B', photo: 'imagens/7.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199053161311/', trackerUrl: 'https://leetify.com/' },
        { id: 8, name: 'Optrista_CG', role: 'Rifler', rating: '1.12', kd: '1.15', hs: '53%', dpi: '400', sens: '1.95', res: '1280x960 4:3', crosshair: 'CSGO-Zt3V0-m7H2A-8rP1W-2Kq9X', photo: 'imagens/8.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199082165295/', trackerUrl: 'https://leetify.com/' },
        { id: 9, name: 'Tutury', role: 'Entry Fragger', rating: '1.21', kd: '1.25', hs: '61%', dpi: '800', sens: '1.25', res: '1280x960 4:3', crosshair: 'CSGO-9xY2Z-Lp9Q1-f5K8B-3vT4W', photo: 'imagens/9.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198183764933/', trackerUrl: 'https://leetify.com/' },
        { id: 10, name: 't6maj', role: 'AWPer', rating: '1.16', kd: '1.19', hs: '45%', dpi: '400', sens: '2.00', res: '1280x960 4:3', crosshair: 'CSGO-m7H2A-8rP1W-2Kq9X-Zt3V0', photo: 'imagens/10.jpg', steamUrl: 'https://steamcommunity.com/id/tomas1437', trackerUrl: 'https://leetify.com/' },
        { id: 11, name: 'SIDST', role: 'Rifler', rating: '1.08', kd: '1.04', hs: '50%', dpi: '800', sens: '1.10', res: '1920x1080 16:9', crosshair: 'CSGO-f5K8B-3vT4W-9xY2Z-Lp9Q1', photo: 'imagens/11.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199207194374/', trackerUrl: 'https://leetify.com/' },
        { id: 12, name: 'paulo minoso-', role: 'Support', rating: '1.14', kd: '1.11', hs: '54%', dpi: '800', sens: '1.15', res: '1280x960 4:3', crosshair: 'CSGO-2Kq9X-Zt3V0-m7H2A-8rP1W', photo: 'imagens/12.jpg', steamUrl: 'https://steamcommunity.com/id/narcigod', trackerUrl: 'https://leetify.com/' }
    ],
    clashRoyale: [
        { id: 1, name: 'mr.white', tag: '#28G9G2P9Y', role: 'Leader', trophies: 10450, deck: 'P.E.K.K.A Bridgespam' },
        { id: 2, name: 'piquele', tag: '#22C0YC80P', role: 'Co-Leader', trophies: 10210, deck: 'Logbait Classic' },
        { id: 3, name: 'RICARDO;-) :-P', tag: '#JUC89G', role: 'Co-Leader', trophies: 10180, deck: 'Golem Beatdown' },
        { id: 4, name: 'optrista_CG', tag: '#C88YUVP98', role: 'Co-Leader', trophies: 10120, deck: 'Hog Cycle 2.6' },
        { id: 5, name: '/Pedro/', tag: '#2ULQYRQP', role: 'Member', trophies: 10050, deck: 'LavaLoon' },
        { id: 6, name: 'CØSTA', tag: '#GRQCURJP', role: 'Co-Leader', trophies: 10090, deck: 'Miner Control' },
        { id: 7, name: '✌MIGUEL✌', tag: '#8LJU8JL', role: 'Elite Member', trophies: 10030, deck: 'Graveyard Control' }
    ],
    minecraft: [
        { id: 1, name: 'white', role: 'Lead Architect', builds: 'Novamato Castle & Spawn Hub' },
        { id: 2, name: 'CØSTA', role: 'Redstone Engineer', builds: 'Nether Hub Express System' },
        { id: 3, name: 'Optrista_CG', role: 'Adventure Map Designer', builds: 'Boss Battle Arena' }
    ]
};

// Theme Management
function initTheme() {
    const saved = localStorage.getItem('novamato_art_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    
    const btn = document.getElementById('themeBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('novamato_art_theme', target);
            showToast(`Modo ${target === 'light' ? 'Claro' : 'Escuro'} ativado`);
        });
    }
}

// Toast System
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
    }, 2500);
}

// Copy Helper
function copyText(text, label = 'Copiado!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${label}`);
    }).catch(() => {
        showToast(text);
    });
}

// Trading Cards Roster Renderer
function renderTradingGrid(filter = 'all') {
    const grid = document.getElementById('tradingGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let cards = [];
    
    if (filter === 'all' || filter === 'cs2') {
        PLAYERS_DATABASE.cs2.forEach(p => cards.push({ ...p, game: 'CS2', type: 'cs2' }));
    }
    if (filter === 'all' || filter === 'clash') {
        PLAYERS_DATABASE.clashRoyale.forEach(p => cards.push({ ...p, game: 'Clash Royale', type: 'clash' }));
    }
    if (filter === 'all' || filter === 'minecraft') {
        PLAYERS_DATABASE.minecraft.forEach(p => cards.push({ ...p, game: 'Minecraft', type: 'minecraft' }));
    }
    
    cards.forEach(p => {
        const card = document.createElement('div');
        card.className = 'trading-card';
        
        const avatarBg = p.photo ? `background-image: url('${p.photo}');` : '';
        const summary = p.type === 'cs2' ? `HLTV ${p.rating}` : (p.type === 'clash' ? `🏆 ${p.trophies}` : `Architect`);
        
        card.innerHTML = `
            <div class="card-image-box" style="${avatarBg}">
                <span class="card-game-badge">${p.game}</span>
            </div>
            <div class="card-content">
                <h3 class="card-name">${p.name}</h3>
                <div class="card-role">${p.role}</div>
                <div class="card-footer-stats">
                    <span style="color: var(--text-muted);">Performance</span>
                    <span class="val">${summary}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openTradingModal(p));
        grid.appendChild(card);
    });
}

// Filter Chip Handler
function initFilterChips() {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderTradingGrid(chip.dataset.filter);
        });
    });
}

// Leaderboard Renderer
function renderArtLeaderboard() {
    const body = document.getElementById('leaderboardBody');
    if (!body) return;
    
    body.innerHTML = '';
    const sorted = [...PLAYERS_DATABASE.cs2].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    
    sorted.forEach((p, idx) => {
        const rankClass = idx === 0 ? 'gold' : (idx === 1 ? 'silver' : (idx === 2 ? 'bronze' : ''));
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="rank-num ${rankClass}">#${idx + 1}</td>
            <td style="font-family: var(--font-art); font-weight: 800; font-size: 1.1rem; color: var(--text-primary);">${p.name}</td>
            <td><span style="padding: 0.2rem 0.6rem; background: var(--bg-surface-hover); border-radius: 4px; font-size: 0.78rem; font-weight: 600;">${p.role}</span></td>
            <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-green); font-size: 1.1rem;">${p.rating}</td>
            <td style="font-family: var(--font-mono); font-weight: 600;">${p.kd}</td>
            <td style="font-family: var(--font-mono); font-weight: 600;">${p.hs}</td>
        `;
        body.appendChild(row);
    });
}

// Trading Modal Dossier
function openTradingModal(p) {
    const modal = document.getElementById('playerModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;
    
    let statsBlock = '';
    
    if (p.type === 'cs2') {
        statsBlock = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-dark); padding: 1rem; border-radius: 8px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">HLTV RATING</div>
                    <div style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800; color: var(--accent-green);">${p.rating}</div>
                </div>
                <div style="background: var(--bg-dark); padding: 1rem; border-radius: 8px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">K/D RATIO</div>
                    <div style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan);">${p.kd}</div>
                </div>
                <div style="background: var(--bg-dark); padding: 1rem; border-radius: 8px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">HEADSHOT %</div>
                    <div style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800;">${p.hs}</div>
                </div>
            </div>

            <div style="background: var(--bg-dark); padding: 1.2rem; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
                <div style="font-family: var(--font-art); font-size: 0.85rem; color: var(--accent-green); font-weight: 800; margin-bottom: 0.6rem; text-transform: uppercase;">GEAR & CS2 MIRAS</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.6rem; font-size: 0.9rem; margin-bottom: 0.8rem;">
                    <div><span style="color: var(--text-muted);">DPI:</span> <strong>${p.dpi}</strong></div>
                    <div><span style="color: var(--text-muted);">Sens:</span> <strong>${p.sens}</strong></div>
                    <div><span style="color: var(--text-muted);">Res:</span> <strong>${p.res}</strong></div>
                </div>
                <button class="btn btn-secondary" style="width: 100%; font-family: var(--font-mono); font-size: 0.85rem;" onclick="copyText('${p.crosshair}', 'Código de Crosshair copiado!')">
                    📋 Copiar Código de Crosshair
                </button>
            </div>

            <div style="display: flex; gap: 0.8rem;">
                <a href="${p.steamUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">Steam Profile →</a>
                <a href="${p.trackerUrl}" target="_blank" class="btn btn-secondary" style="flex: 1;">Leetify Stats →</a>
            </div>
        `;
    } else if (p.type === 'clash') {
        statsBlock = `
            <div style="background: var(--bg-dark); padding: 1.2rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1.5rem 0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.6rem;">
                    <span style="color: var(--text-muted);">Troféus Ladder:</span>
                    <strong style="color: var(--accent-gold); font-family: var(--font-mono); font-size: 1.2rem;">🏆 ${p.trophies}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: var(--text-muted);">Deck Principal:</span>
                    <strong>${p.deck}</strong>
                </div>
            </div>
            <a href="https://statsroyale.com/profile/${p.tag.replace('#', '')}" target="_blank" class="btn btn-primary" style="width: 100%;">StatsRoyale Profile →</a>
        `;
    } else {
        statsBlock = `
            <div style="background: var(--bg-dark); padding: 1.2rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1.5rem 0;">
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem;">OBRAS & PROJETOS</div>
                <div style="color: var(--accent-green); font-weight: 700;">${p.builds}</div>
            </div>
        `;
    }
    
    body.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1.2rem; margin-bottom: 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 12px; ${p.photo ? `background: url('${p.photo}') center/cover;` : 'background: var(--accent-gradient);'} border: 2px solid var(--accent-green);"></div>
            <div>
                <h2 style="font-family: var(--font-art); font-size: 1.8rem; font-weight: 900;">${p.name}</h2>
                <div style="font-size: 0.9rem; color: var(--accent-green); font-weight: 700;">${p.game} · ${p.role}</div>
            </div>
        </div>
        ${statsBlock}
    `;
    
    modal.classList.add('active');
}

// Modal Handler
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

function openRecruitModal() {
    const modal = document.getElementById('recruitModal');
    if (modal) modal.classList.add('active');
}

function initRecruitForm() {
    const form = document.getElementById('recruitForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const modal = document.getElementById('recruitModal');
        if (modal) modal.classList.remove('active');
        showToast('✓ Candidatura registada com sucesso! Entraremos em contacto no Discord.');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderTradingGrid('all');
    initFilterChips();
    renderArtLeaderboard();
    initModals();
    initRecruitForm();
});
