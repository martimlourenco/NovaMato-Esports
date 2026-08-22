// Novamato Esports 2026 — Interactive Core Script

// Full Player Roster Database
const PLAYERS_DATA = {
    cs2: [
        { id: 1, name: 'white', role: 'Entry Fragger', rating: '1.24', kd: '1.32', hs: '64%', photo: 'imagens/1.jpg', steamUrl: 'https://steamcommunity.com/id/white1209/', trackerUrl: 'https://leetify.com/' },
        { id: 2, name: 'migga', role: 'AWPer', rating: '1.28', kd: '1.40', hs: '42%', photo: 'imagens/2.jpg', steamUrl: 'https://steamcommunity.com/id/migggal', trackerUrl: 'https://leetify.com/' },
        { id: 3, name: 'CØSTA', role: 'Rifler / Support', rating: '1.15', kd: '1.12', hs: '58%', photo: 'imagens/3.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199049671771/', trackerUrl: 'https://leetify.com/' },
        { id: 4, name: 'FurryFeetLover_69', role: 'IGL (Captain)', rating: '1.10', kd: '1.08', hs: '51%', photo: 'imagens/4.jpg', steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn', trackerUrl: 'https://leetify.com/' },
        { id: 5, name: 'mr.albuquecas', role: 'Lurker', rating: '1.18', kd: '1.20', hs: '55%', photo: 'imagens/5.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198843083161/', trackerUrl: 'https://leetify.com/' },
        { id: 6, name: 'Mr.Pigeon', role: 'Rifler', rating: '1.09', kd: '1.05', hs: '49%', photo: 'imagens/6.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199132612024/', trackerUrl: 'https://leetify.com/' },
        { id: 7, name: 'Neto', role: 'Support', rating: '1.07', kd: '1.02', hs: '48%', photo: 'imagens/7.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199053161311/', trackerUrl: 'https://leetify.com/' },
        { id: 8, name: 'Optrista_CG', role: 'Rifler', rating: '1.12', kd: '1.15', hs: '53%', photo: 'imagens/8.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199082165295/', trackerUrl: 'https://leetify.com/' },
        { id: 9, name: 'Tutury', role: 'Entry Fragger', rating: '1.21', kd: '1.25', hs: '61%', photo: 'imagens/9.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198183764933/', trackerUrl: 'https://leetify.com/' },
        { id: 10, name: 't6maj', role: 'AWPer / Secondary', rating: '1.16', kd: '1.19', hs: '45%', photo: 'imagens/10.jpg', steamUrl: 'https://steamcommunity.com/id/tomas1437', trackerUrl: 'https://leetify.com/' },
        { id: 11, name: 'SIDST', role: 'Rifler', rating: '1.08', kd: '1.04', hs: '50%', photo: 'imagens/11.jpg', steamUrl: 'https://steamcommunity.com/profiles/7656119207194374/', trackerUrl: 'https://leetify.com/' },
        { id: 12, name: 'paulo minoso-', role: 'Support', rating: '1.14', kd: '1.11', hs: '54%', photo: 'imagens/12.jpg', steamUrl: 'https://steamcommunity.com/id/narcigod', trackerUrl: 'https://leetify.com/' }
    ],
    clashRoyale: [
        { id: 1, name: 'mr.white', tag: '#28G9G2P9Y', role: 'Líder', trophies: '10,450', mainDeck: 'P.E.K.K.A Bridgespam' },
        { id: 2, name: 'piquele', tag: '#22C0YC80P', role: 'Co-Líder', trophies: '10,210', mainDeck: 'Logbait Classic' },
        { id: 3, name: 'RICARDO;-) :-P', tag: '#JUC89G', role: 'Co-Líder', trophies: '10,180', mainDeck: 'Golem Beatdown' },
        { id: 4, name: 'optrista_CG', tag: '#C88YUVP98', role: 'Co-Líder', trophies: '10,120', mainDeck: 'Hog Cycle 2.6' },
        { id: 5, name: '/Pedro/', tag: '#2ULQYRQP', role: 'Membro', trophies: '10,050', mainDeck: 'LavaLoon' },
        { id: 6, name: 'CØSTA', tag: '#GRQCURJP', role: 'Co-Líder', trophies: '10,090', mainDeck: 'Miner Control' },
        { id: 7, name: '✌MIGUEL✌', tag: '#8LJU8JL', role: 'Elite Member', trophies: '10,030', mainDeck: 'Graveyard Control' }
    ],
    minecraft: [
        { id: 1, name: 'white', role: 'Lead Architect & Redstone Master', builds: 'Novamato Castle, Spawn Hub' },
        { id: 2, name: 'CØSTA', role: 'Survival Specialist & Builder', builds: 'Nether Hub Express' },
        { id: 3, name: 'Optrista_CG', role: 'Adventure Map Designer', builds: 'Custom Boss Dungeons' }
    ]
};

// Upcoming Match Data
const UPCOMING_MATCH = {
    opponent: 'ESTORIL ESPORTS',
    tournament: 'Liga Portuguesa CS2 — Qualifiers',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000), // 3 days 4 hours from now
    streamUrl: 'https://www.youtube.com/@novamato3393'
};

// Theme Toggle Management
function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const currentTheme = localStorage.getItem('novamato_theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = activeTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('novamato_theme', newTheme);
            showToast(`Modo ${newTheme === 'light' ? 'Claro' : 'Escuro'} ativado`);
        });
    }
}

// Toast Notification System
function showToast(message, icon = '⚡') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Countdown Timer Widget
function initCountdown() {
    const timerElement = document.getElementById('matchCountdown');
    if (!timerElement) return;
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = UPCOMING_MATCH.date.getTime() - now;
        
        if (distance < 0) {
            timerElement.textContent = 'A DECORRER AGORA!';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Roster Filter & Rendering System
function renderRoster(filter = 'all') {
    const container = document.getElementById('rosterGrid');
    if (!container) return;
    
    container.innerHTML = '';
    let list = [];
    
    if (filter === 'all' || filter === 'cs2') {
        PLAYERS_DATA.cs2.forEach(p => list.push({ ...p, game: 'CS2', type: 'cs2' }));
    }
    if (filter === 'all' || filter === 'clash') {
        PLAYERS_DATA.clashRoyale.forEach(p => list.push({ ...p, game: 'Clash Royale', type: 'clash' }));
    }
    if (filter === 'all' || filter === 'minecraft') {
        PLAYERS_DATA.minecraft.forEach(p => list.push({ ...p, game: 'Minecraft', type: 'minecraft' }));
    }
    
    list.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        
        const avatarBg = player.photo ? `background-image: url('${player.photo}');` : 'background: linear-gradient(135deg, rgba(0,255,102,0.1), rgba(0,229,255,0.1));';
        
        card.innerHTML = `
            <div class="player-card-img-wrap" style="${avatarBg}">
                <span class="player-game-badge">${player.game}</span>
            </div>
            <div class="player-card-info">
                <h3 class="player-card-name">${player.name}</h3>
                <p class="player-card-role">${player.role}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openPlayerModal(player));
        container.appendChild(card);
    });
}

// Interactive Roster Filter Buttons
function initRosterFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetFilter = btn.getAttribute('data-filter');
            renderRoster(targetFilter);
        });
    });
}

// Expanded Player Modal
function openPlayerModal(player) {
    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('playerModalBody');
    if (!modal || !modalBody) return;
    
    let statsContent = '';
    
    if (player.type === 'cs2') {
        statsContent = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">HLTV RATING</div>
                    <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-green);">${player.rating}</div>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">K/D RATIO</div>
                    <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-cyan);">${player.kd}</div>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">HEADSHOT %</div>
                    <div style="font-size: 1.5rem; font-weight: 800; color: #fff;">${player.hs}</div>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="${player.steamUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">Steam Profile →</a>
                <a href="${player.trackerUrl}" target="_blank" class="btn btn-secondary" style="flex: 1;">Leetify Stats →</a>
            </div>
        `;
    } else if (player.type === 'clash') {
        const cleanTag = player.tag.replace('#', '');
        statsContent = `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">TROFÉUS</div>
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-gold);">🏆 ${player.trophies}</div>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-color);">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">DECK PRINCIPAL</div>
                    <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 0.2rem;">${player.mainDeck}</div>
                </div>
            </div>
            <a href="https://statsroyale.com/profile/${cleanTag}" target="_blank" class="btn btn-primary" style="width: 100%;">Ver no StatsRoyale →</a>
        `;
    } else {
        statsContent = `
            <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid var(--border-color); margin: 1.5rem 0;">
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem;">ESPECIALIZAÇÕES & OBRAS</div>
                <div style="font-size: 1.1rem; color: var(--accent-green); font-weight: 600;">${player.builds}</div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 1rem auto; ${player.photo ? `background: url('${player.photo}') center/cover;` : 'background: var(--accent-gradient);'} border: 3px solid var(--accent-green);"></div>
            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800;">${player.name}</h2>
            <div style="display: inline-block; padding: 0.25rem 0.8rem; background: rgba(0,255,102,0.1); border-radius: 20px; color: var(--accent-green); font-size: 0.85rem; font-weight: 700; margin-top: 0.4rem;">${player.game} · ${player.role}</div>
        </div>
        ${statsContent}
    `;
    
    modal.classList.add('active');
}

// Modal Close Handlers
function initModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(m => m.classList.remove('active'));
        }
    });
}

// Minecraft Server IP Copy
function copyServerIp() {
    const ipText = '46.224.145.80:25565';
    navigator.clipboard.writeText(ipText).then(() => {
        showToast('IP do servidor copiado para a área de transferência! ⛏️');
    }).catch(() => {
        showToast('IP do Servidor: 46.224.145.80:25565');
    });
}

// Recruitment Modal Trigger
function openRecruitmentModal() {
    const modal = document.getElementById('recruitModal');
    if (modal) modal.classList.add('active');
}

// Submit Recruitment Form Handler
function initRecruitmentForm() {
    const form = document.getElementById('recruitForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const modal = document.getElementById('recruitModal');
        if (modal) modal.classList.remove('active');
        showToast('Candidatura enviada com sucesso! Entraremos em contacto no Discord. 🚀');
        form.reset();
    });
}

// DOM Ready Execution
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCountdown();
    renderRoster('all');
    initRosterFilters();
    initModals();
    initRecruitmentForm();
});
