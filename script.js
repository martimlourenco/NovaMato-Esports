// Novamato Esports 2026 — Dynamic & Factual Roster Data

const ROSTER_DATA = {
    cs2: [
        { id: 1, name: 'white', role: 'Entry Fragger', rating: '1.24', kd: '1.32', photo: 'imagens/1.jpg', steamUrl: 'https://steamcommunity.com/id/white1209/', trackerUrl: 'https://leetify.com/app/profile/76561198882548515' },
        { id: 2, name: 'migga', role: 'AWPer', rating: '1.28', kd: '1.40', photo: 'imagens/2.jpg', steamUrl: 'https://steamcommunity.com/id/migggal', trackerUrl: 'https://leetify.com/app/profile/76561198210768829' },
        { id: 3, name: 'CØSTA', role: 'Rifler / Support', rating: '1.15', kd: '1.12', photo: 'imagens/3.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199049671771/', trackerUrl: 'https://leetify.com/app/profile/76561199049671771' },
        { id: 4, name: 'FurryFeetLover_69', role: 'IGL (Captain)', rating: '1.10', kd: '1.08', photo: 'imagens/4.jpg', steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn', trackerUrl: 'https://leetify.com/app/profile/76561198272195222' },
        { id: 5, name: 'mr.albuquecas', role: 'Lurker', rating: '1.18', kd: '1.20', photo: 'imagens/5.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198843083161/', trackerUrl: 'https://leetify.com/app/profile/76561198843083161' },
        { id: 6, name: 'Mr.Pigeon', role: 'Rifler', rating: '1.09', kd: '1.05', photo: 'imagens/6.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199132612024/', trackerUrl: 'https://leetify.com/app/profile/76561199132612024' },
        { id: 7, name: 'Neto', role: 'Support', rating: '1.07', kd: '1.02', photo: 'imagens/7.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199053161311/', trackerUrl: 'https://leetify.com/app/profile/76561199053161311' },
        { id: 8, name: 'Optrista_CG', role: 'Rifler', rating: '1.12', kd: '1.15', photo: 'imagens/8.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199082165295/', trackerUrl: 'https://leetify.com/app/profile/76561199082165295' },
        { id: 9, name: 'Tutury', role: 'Entry Fragger', rating: '1.21', kd: '1.25', photo: 'imagens/9.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198183764933/', trackerUrl: 'https://leetify.com/app/profile/76561198183764933' },
        { id: 10, name: 't6maj', role: 'AWPer', rating: '1.16', kd: '1.19', photo: 'imagens/10.jpg', steamUrl: 'https://steamcommunity.com/id/tomas1437', trackerUrl: 'https://leetify.com/app/profile/76561198216219013' },
        { id: 11, name: 'SIDST', role: 'Rifler', rating: '1.08', kd: '1.04', photo: 'imagens/11.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199207194374/', trackerUrl: 'https://leetify.com/app/profile/76561199207194374' },
        { id: 12, name: 'paulo minoso-', role: 'Support', rating: '1.14', kd: '1.11', photo: 'imagens/12.jpg', steamUrl: 'https://steamcommunity.com/id/narcigod', trackerUrl: 'https://leetify.com/app/profile/76561198326338086' }
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
    toast.innerText = msg;
    box.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

// Copy to Clipboard
function copyText(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Copiado para a área de transferência!');
    }).catch(() => {
        showToast('Erro ao copiar.');
    });
}

// Roster Grid Renderer
function renderGrid(filter = 'all') {
    const grid = document.getElementById('rosterGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let players = [];
    
    if (filter === 'all' || filter === 'cs2') {
        players = players.concat(ROSTER_DATA.cs2.map(p => ({ ...p, game: 'Counter-Strike 2', type: 'cs2' })));
    }
    if (filter === 'all' || filter === 'clash') {
        players = players.concat(ROSTER_DATA.clashRoyale.map(p => ({ ...p, game: 'Clash Royale', type: 'clash' })));
    }
    if (filter === 'all' || filter === 'minecraft') {
        players = players.concat(ROSTER_DATA.minecraft.map(p => ({ ...p, game: 'Minecraft', type: 'minecraft' })));
    }
    
    players.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let bottomInfo = '';
        if (p.type === 'cs2') {
            bottomInfo = `<span style="font-weight: 700; color: var(--accent-bright);">Rating: ${p.rating}</span>`;
        } else if (p.type === 'clash') {
            bottomInfo = `<span style="font-weight: 700; color: var(--accent-bright);">🏆 ${p.trophies}</span>`;
        } else {
            bottomInfo = `<span style="color: var(--text-muted); font-size: 0.78rem;">${p.builds}</span>`;
        }
        
        const avatarHtml = p.photo 
            ? `<div class="card-avatar" style="background-image: url('${p.photo}');"></div>` 
            : '';
            
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
                ${bottomInfo}
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
                <div style="flex: 1; background: rgba(0,0,0,0.4); padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">HLTV RATING</div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-bright);">${p.rating}</div>
                </div>
                <div style="flex: 1; background: rgba(0,0,0,0.4); padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">K/D RATIO</div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: #ffffff;">${p.kd}</div>
                </div>
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <a href="${p.steamUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">Steam Profile →</a>
                <a href="${p.trackerUrl}" target="_blank" class="btn btn-secondary" style="flex: 1;">Leetify Stats →</a>
            </div>
        `;
    } else if (p.type === 'clash') {
        content = `
            <div style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1.25rem 0; display: flex; justify-content: space-between;">
                <span style="color: var(--text-muted);">Troféus Globais:</span>
                <strong style="color: var(--accent-bright);">🏆 ${p.trophies}</strong>
            </div>
            <a href="https://statsroyale.com/profile/${p.tag.replace('#', '')}" target="_blank" class="btn btn-primary" style="width: 100%;">StatsRoyale Profile →</a>
        `;
    } else {
        content = `
            <div style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1.25rem 0;">
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.3rem; text-transform: uppercase;">PROJETOS & CONSTRUÇÕES</div>
                <div style="font-weight: 700; color: var(--accent-bright);">${p.builds}</div>
            </div>
        `;
    }
    
    const avatarHtml = p.photo 
        ? `<div style="width: 56px; height: 56px; border-radius: 12px; background: url('${p.photo}') center/cover; border: 1px solid var(--border-color);"></div>` 
        : '';
        
    body.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
            ${avatarHtml}
            <div>
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 900;">${p.name}</h3>
                <div style="font-size: 0.85rem; color: var(--accent-bright); font-weight: 700;">${p.game} · ${p.role}</div>
            </div>
        </div>
        ${content}
    `;
    
    modal.classList.add('active');
}

// Modal Click Out & Close
function initModal() {
    const modal = document.getElementById('playerModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('all');
    initChips();
    initModal();
});
