// ====================================================================
// 🏆 CONFIGURAÇÕES DA ORGANIZAÇÃO (NOVAMATO 95 OS)
// ====================================================================

// 1. MVP CS2
let CS2_TOP_PLAYER = {
    name: 'FurryFeetLover_69',
    role: 'Top Leetify Rating',
    rating: '+2.98',
    kd: '1.25',
    photo: 'imagens/4.jpg',
    badge: '⭐ MVP / TOP LEETIFY RATING',
    steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn',
    leetifyUrl: 'https://leetify.com/app/profile/76561198272195222'
};

// 2. VÍDEO HIGHLIGHT
let HIGHLIGHT_VIDEO = {
    title: 'HIGHLIGHT CLUTCH CS2',
    subtitle: 'Momento de destaque competitivo da nossa equipa de Counter-Strike 2.',
    src: 'imagens/videocs2.mp4'
};

// 3. BASE DE DADOS DE PARTIDAS JOGADAS (CAPS / HALL OF FAME)
let PLAYER_MATCH_STATS = {
    'FurryFeetLover_69': { matches: 51, photo: 'imagens/4.jpg' },
    'migga': { matches: 46, photo: 'imagens/2.jpg' },
    'white': { matches: 43, photo: 'imagens/1.jpg' },
    'CØSTA': { matches: 38, photo: 'imagens/3.jpg' },
    't6maj': { matches: 35, photo: 'imagens/10.jpg' },
    'Optrista_CG': { matches: 34, photo: 'imagens/8.jpg' },
    'Mr.Pigeon': { matches: 31, photo: 'imagens/6.jpg' },
    'mr.albuquecas': { matches: 29, photo: 'imagens/5.jpg' },
    'Tutury': { matches: 28, photo: 'imagens/9.jpg' },
    'Neto': { matches: 26, photo: 'imagens/7.jpg' },
    'paulo minoso-': { matches: 25, photo: 'imagens/12.jpg' },
    'SIDST': { matches: 22, photo: 'imagens/11.jpg' }
};

// 4. HISTÓRICO DE RESULTADOS DE PARTIDAS (COM MIN. 3 MEMBROS & RANDOMS)
let MATCH_RESULTS = [
    {
        id: 1,
        game: 'Counter-Strike 2',
        opponent: 'Rhinos Gaming',
        map: 'Mirage',
        score: '13 - 9',
        outcome: 'win',
        date: '22 Ago',
        lineup: ['white', 'migga', 'FurryFeetLover_69', 'Random', 'Random']
    },
    {
        id: 2,
        game: 'Counter-Strike 2',
        opponent: 'Saw Youngsters',
        map: 'Inferno',
        score: '11 - 13',
        outcome: 'loss',
        date: '19 Ago',
        lineup: ['white', 'migga', 'CØSTA', 't6maj', 'Random']
    }
];

// 5. PRÓXIMO EVENTO COMPETITIVO & CHECK-IN (RSVP)
let defaultMeetTarget = new Date();
defaultMeetTarget.setDate(defaultMeetTarget.getDate() + 3);
defaultMeetTarget.setHours(21, 0, 0, 0);

let COMPETITIVE_EVENT = {
    title: 'CS2 5V5 COMPETITIVE SCRIM — NOVAMATO vs RHINOS',
    dateText: 'Sexta-feira · 21:00 (Servidor Dedicado / Discord #treinos)',
    targetDate: defaultMeetTarget.toISOString().slice(0, 16),
    maxSlots: 5,
    checkedInPlayers: [
        { name: 'FurryFeetLover_69', role: 'Titular' },
        { name: 'migga', role: 'Titular' },
        { name: 'white', role: 'Titular' }
    ]
};

// 6. FUTURAS PARTIDAS & SCRIMS
let UPCOMING_MATCHES = [
    { id: 1, game: 'Counter-Strike 2', opponent: 'Rhinos Gaming', date: '29 Ago · 21:00', type: 'Scrim 5v5', status: 'Confirmado' },
    { id: 2, game: 'Clash Royale', opponent: 'Clan War Ladder', date: '30 Ago · 22:00', type: 'Guerra de Clãs', status: 'Confirmado' }
];

// Carregar personalizações salvas
try {
    const sMvp = localStorage.getItem('novamato_custom_mvp');
    if (sMvp) CS2_TOP_PLAYER = JSON.parse(sMvp);
    
    const sVid = localStorage.getItem('novamato_custom_vid');
    if (sVid) HIGHLIGHT_VIDEO = JSON.parse(sVid);

    const sStats = localStorage.getItem('novamato_custom_match_stats');
    if (sStats) PLAYER_MATCH_STATS = JSON.parse(sStats);

    const sResults = localStorage.getItem('novamato_custom_results');
    if (sResults) MATCH_RESULTS = JSON.parse(sResults);

    const sEvent = localStorage.getItem('novamato_custom_event');
    if (sEvent) COMPETITIVE_EVENT = JSON.parse(sEvent);

    const sMatches = localStorage.getItem('novamato_custom_matches');
    if (sMatches) UPCOMING_MATCHES = JSON.parse(sMatches);
} catch (e) {}

// ====================================================================
// 👥 LINE-UPS OFICIAIS
// ====================================================================
const ROSTER_DATA = {
    cs2: [
        { id: 1, name: 'white', photo: 'imagens/1.jpg', steamUrl: 'https://steamcommunity.com/id/white1209/', trackerUrl: 'https://leetify.com/app/profile/76561198882548515' },
        { id: 2, name: 'migga', photo: 'imagens/2.jpg', steamUrl: 'https://steamcommunity.com/id/migggal', trackerUrl: 'https://leetify.com/app/profile/76561198210768829' },
        { id: 3, name: 'CØSTA', photo: 'imagens/3.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199049671771/', trackerUrl: 'https://leetify.com/app/profile/76561199049671771' },
        { id: 4, name: 'FurryFeetLover_69', photo: 'imagens/4.jpg', steamUrl: 'https://steamcommunity.com/id/freezapqvcmatouokuririn', trackerUrl: 'https://leetify.com/app/profile/76561198272195222' },
        { id: 5, name: 'mr.albuquecas', photo: 'imagens/5.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198843083161/', trackerUrl: 'https://leetify.com/app/profile/76561198843083161' },
        { id: 6, name: 'Mr.Pigeon', photo: 'imagens/6.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199132612024/', trackerUrl: 'https://leetify.com/app/profile/76561199132612024' },
        { id: 7, name: 'Neto', photo: 'imagens/7.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199053161311/', trackerUrl: 'https://leetify.com/app/profile/76561199053161311' },
        { id: 8, name: 'Optrista_CG', photo: 'imagens/8.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199082165295/', trackerUrl: 'https://leetify.com/app/profile/76561199082165295' },
        { id: 9, name: 'Tutury', photo: 'imagens/9.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561198183764933/', trackerUrl: 'https://leetify.com/app/profile/76561198183764933' },
        { id: 10, name: 't6maj', photo: 'imagens/10.jpg', steamUrl: 'https://steamcommunity.com/id/tomas1437', trackerUrl: 'https://leetify.com/app/profile/76561198216219013' },
        { id: 11, name: 'SIDST', photo: 'imagens/11.jpg', steamUrl: 'https://steamcommunity.com/profiles/76561199207194374/', trackerUrl: 'https://leetify.com/app/profile/76561199207194374' },
        { id: 12, name: 'paulo minoso-', photo: 'imagens/12.jpg', steamUrl: 'https://steamcommunity.com/id/narcigod', trackerUrl: 'https://leetify.com/app/profile/76561198326338086' }
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
        { id: 1, name: 'white', role: 'Architect', builds: 'Novamato Castle' },
        { id: 2, name: 'CØSTA', role: 'Redstone', builds: 'Nether Hub' },
        { id: 3, name: 'Optrista_CG', role: 'Designer', builds: 'Boss Arena' }
    ]
};

// ====================================================================
// 🕹️ RETRO AUDIO SYNTHESIZER (WEB AUDIO API)
// ====================================================================
let audioCtx = null;

function playRetroSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'click') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.06);
            osc.start(now);
            osc.stop(now + 0.06);
        } else if (type === 'open') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(350, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'cash') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(987.77, now);
            osc.frequency.setValueAtTime(1318.51, now + 0.08);
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (type === 'alert' || type === 'event') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.09); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.18); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.27); // C6
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.45);
            osc.start(now);
            osc.stop(now + 0.45);
        }
    } catch (e) {}
}

// Helper: Cálculo de cor dinâmica para o Leetify Rating (+ verde, - vermelho)
function getLeetifyRatingStyle(ratingVal) {
    const num = parseFloat(ratingVal);
    if (isNaN(num)) {
        return { color: 'var(--accent-bright)', text: ratingVal, glow: '0 0 10px rgba(0, 223, 129, 0.4)' };
    }
    let formattedText = num > 0 ? `+${num.toFixed(2)}` : `${num.toFixed(2)}`;
    if (num > 0) {
        if (num >= 5.0) return { color: '#4ade80', text: formattedText, glow: '0 0 18px rgba(74, 222, 128, 0.7)' };
        if (num >= 2.5) return { color: '#00f59b', text: formattedText, glow: '0 0 14px rgba(0, 245, 155, 0.5)' };
        return { color: '#00df81', text: formattedText, glow: '0 0 10px rgba(0, 223, 129, 0.4)' };
    } else if (num < 0) {
        if (num <= -3.0) return { color: '#ef4444', text: formattedText, glow: '0 0 18px rgba(239, 68, 68, 0.7)' };
        return { color: '#f87171', text: formattedText, glow: '0 0 12px rgba(248, 113, 113, 0.5)' };
    }
    return { color: '#94a3b8', text: '0.00', glow: 'none' };
}

function formatToPortugueseDate(isoStr) {
    try {
        const d = new Date(isoStr);
        if (isNaN(d.getTime())) return isoStr;
        const options = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
        return d.toLocaleDateString('pt-PT', options);
    } catch (e) {
        return isoStr;
    }
}

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
        toast.remove();
    }, 3000);
}

function copyText(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Copiado para a área de transferência!');
    }).catch(() => {
        showToast('Erro ao copiar.');
    });
}

// ====================================================================
// 🪟 WINDOWS 95 WINDOWS ENGINE (DRAG & STACKING)
// ====================================================================
let highestZIndex = 100;
let draggedWin = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function openWindow(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    win.classList.add('active-window');
    win.style.display = 'flex';
    bringToFront(winId);
    updateTaskbarTabs();
    playRetroSound('open');
}

function closeWindow(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    win.classList.remove('active-window');
    win.classList.remove('focused');
    win.style.display = 'none';
    updateTaskbarTabs();
    playRetroSound('click');
}

function minimizeWindow(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    win.style.display = 'none';
    win.classList.remove('focused');
    updateTaskbarTabs();
    playRetroSound('click');
}

function maximizeWindow(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    bringToFront(winId);

    if (win.dataset.maximized === 'true') {
        win.classList.remove('maximized');
        win.style.top = win.dataset.origTop || '40px';
        win.style.left = win.dataset.origLeft || '80px';
        win.style.width = win.dataset.origWidth || '800px';
        win.style.height = 'auto';
        win.dataset.maximized = 'false';
    } else {
        win.dataset.origTop = win.style.top || `${win.offsetTop}px`;
        win.dataset.origLeft = win.style.left || `${win.offsetLeft}px`;
        win.dataset.origWidth = win.style.width || `${win.offsetWidth}px`;
        win.classList.add('maximized');
        win.dataset.maximized = 'true';
    }
    playRetroSound('click');
}

function bringToFront(winId) {
    const win = document.getElementById(winId);
    if (!win) return;
    highestZIndex++;
    win.style.zIndex = highestZIndex;
    win.style.display = 'flex';

    document.querySelectorAll('.win95-window').forEach(w => w.classList.add('inactive-focus'));
    win.classList.remove('inactive-focus');
    win.classList.add('focused');
    updateTaskbarTabs();
}

function startDragWindow(e, winId) {
    if (e.target.closest('.win-btn')) return;
    draggedWin = document.getElementById(winId);
    if (!draggedWin) return;
    bringToFront(winId);

    dragOffsetX = e.clientX - draggedWin.offsetLeft;
    dragOffsetY = e.clientY - draggedWin.offsetTop;

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);
}

function dragMove(e) {
    if (!draggedWin || draggedWin.dataset.maximized === 'true') return;
    let newX = e.clientX - dragOffsetX;
    let newY = e.clientY - dragOffsetY;

    if (newY < 0) newY = 0;
    if (newY > window.innerHeight - 80) newY = window.innerHeight - 80;

    draggedWin.style.left = `${newX}px`;
    draggedWin.style.top = `${newY}px`;
}

function dragEnd() {
    draggedWin = null;
    window.removeEventListener('mousemove', dragMove);
    window.removeEventListener('mouseup', dragEnd);
}

function selectIcon(iconEl) {
    document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    if (iconEl) iconEl.classList.add('selected');
    playRetroSound('click');
}

// ====================================================================
// 💾 TASKBAR & START MENU ENGINE
// ====================================================================
function toggleStartMenu() {
    const menu = document.getElementById('startMenu');
    const btn = document.getElementById('startBtn');
    if (!menu || !btn) return;
    menu.classList.toggle('open');
    btn.classList.toggle('open');
    playRetroSound('click');
}

window.addEventListener('click', (e) => {
    if (!e.target.closest('#startMenu') && !e.target.closest('#startBtn')) {
        const menu = document.getElementById('startMenu');
        const btn = document.getElementById('startBtn');
        if (menu) menu.classList.remove('open');
        if (btn) btn.classList.remove('open');
    }
});

function updateTaskbarTabs() {
    const container = document.getElementById('taskbarTabs');
    if (!container) return;
    container.innerHTML = '';

    const windows = [
        { id: 'winCS2', name: 'Plantel CS2', icon: 'icons/cs2.svg' },
        { id: 'winTrading', name: 'Bolsa de Ações', icon: 'icons/trading.svg' },
        { id: 'winCheckin', name: 'Presenças', icon: 'icons/checkin.svg' },
        { id: 'winResults', name: 'Resultados', icon: 'icons/results.svg' },
        { id: 'winMinecraft', name: 'Minecraft', icon: 'icons/minecraft.svg' },
        { id: 'winClash', name: 'Clash Royale', icon: 'icons/clash.svg' },
        { id: 'winHighlight', name: 'Melhores Jogadas', icon: 'icons/video.svg' },
        { id: 'winAdmin', name: 'Painel Admin', icon: 'icons/admin.svg' }
    ];

    windows.forEach(w => {
        const el = document.getElementById(w.id);
        if (el && el.classList.contains('active-window')) {
            const tab = document.createElement('button');
            const isVisible = el.style.display !== 'none';
            const isTop = el.classList.contains('focused');
            tab.className = `taskbar-tab ${isTop && isVisible ? 'active' : ''}`;
            tab.innerHTML = `<img src="${w.icon}" style="width:14px;height:14px;image-rendering:pixelated;vertical-align:middle;margin-right:4px;"><span>${w.name}</span>`;
            tab.onclick = () => {
                if (!isVisible || !isTop) {
                    bringToFront(w.id);
                } else {
                    minimizeWindow(w.id);
                }
            };
            container.appendChild(tab);
        }
    });
}

function initClock() {
    const clockEl = document.getElementById('systemClock');
    function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('pt-PT');
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// ====================================================================
// 🎯 CS2 DIVISION & MVP MATRIX RENDERER
// ====================================================================
function renderTopPlayer() {
    const container = document.getElementById('cs2TopPlayer');
    if (!container || !CS2_TOP_PLAYER) return;
    const rStyle = getLeetifyRatingStyle(CS2_TOP_PLAYER.rating);
    container.innerHTML = `
        <div class="retro-mvp-box">
            <div style="display: flex; align-items: center; gap: 1.25rem;">
                <div class="retro-mvp-avatar" style="background-image: url('${CS2_TOP_PLAYER.photo}');"></div>
                <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent);">${CS2_TOP_PLAYER.badge}</div>
                    <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 900; color: #fff;">${CS2_TOP_PLAYER.name}</h2>
                    <div style="font-size: 0.8rem; color: var(--text-dim);">NOVAMATO · CAPITÃO & IGL</div>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="background: #000; padding: 0.5rem 1rem; border: 1px solid var(--border-hairline); text-align: center;">
                    <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: ${rStyle.color};">${rStyle.text}</div>
                    <div style="font-size: 0.68rem; color: var(--text-dim);">RATING LEETIFY</div>
                </div>
                <div style="background: #000; padding: 0.5rem 1rem; border: 1px solid var(--border-hairline); text-align: center;">
                    <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: #fff;">${CS2_TOP_PLAYER.kd}</div>
                    <div style="font-size: 0.68rem; color: var(--text-dim);">RÁCIO K/D</div>
                </div>
                <a href="${CS2_TOP_PLAYER.leetifyUrl}" target="_blank" class="retro-btn retro-btn-accent">Estatísticas ↗</a>
            </div>
        </div>
    `;
}

function renderCS2Grid() {
    const grid = document.getElementById('cs2Grid');
    if (!grid) return;
    grid.innerHTML = '';
    ROSTER_DATA.cs2.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'retro-card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="width: 42px; height: 42px; border: 1px solid #fff; background: url('${p.photo}') center/cover;"></div>
                <div>
                    <div style="font-family: var(--font-heading); font-weight: 900; font-size: 1rem; color: #fff;">${p.name}</div>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">#${String(idx+1).padStart(2,'0')} Atleta Oficial</div>
                </div>
            </div>
            <div style="display: flex; gap: 0.4rem;">
                <a href="${p.steamUrl}" target="_blank" class="retro-btn" style="padding: 0.35rem 0.55rem; font-size: 0.7rem; flex: 1;">Steam</a>
                <a href="${p.trackerUrl}" target="_blank" class="retro-btn" style="padding: 0.35rem 0.55rem; font-size: 0.7rem; flex: 1;">Leetify</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderClashGrid() {
    const grid = document.getElementById('clashGrid');
    if (!grid) return;
    grid.innerHTML = '';
    ROSTER_DATA.clashRoyale.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'retro-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="font-size: 1rem; color: #fff;">${p.name}</strong>
                <span style="font-size: 0.75rem; color: var(--gold);">${p.trophies} 🏆</span>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim);">${p.tag} · ${p.role}</div>
        `;
        grid.appendChild(card);
    });
}

// ====================================================================
// ⏱️ SCRIM RSVP CHECK-IN & ATOMIC COUNTDOWN
// ====================================================================
let countdownInterval = null;

function renderAttendanceHub() {
    const container = document.getElementById('attendanceWidget');
    if (!container || !COMPETITIVE_EVENT) return;

    const formattedDate = formatToPortugueseDate(COMPETITIVE_EVENT.targetDate);
    const confirmedCount = COMPETITIVE_EVENT.checkedInPlayers.length;

    let slotsHtml = '';
    for (let i = 0; i < 5; i++) {
        const p = COMPETITIVE_EVENT.checkedInPlayers[i];
        if (p) {
            slotsHtml += `
                <div class="retro-slot-box filled">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); font-weight: 800;">SLOT #${i+1}</span>
                        <button onclick="cancelCheckin('${p.name}')" style="background: none; border: none; color: #fff; cursor: pointer;">&times;</button>
                    </div>
                    <div style="font-family: var(--font-heading); font-weight: 900; font-size: 1rem; color: #fff; margin-top: 0.35rem;">${p.name}</div>
                </div>
            `;
        } else {
            slotsHtml += `
                <div class="retro-slot-box">
                    <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim);">SLOT #${i+1}</span>
                    <div style="font-size: 0.85rem; color: var(--text-dim); margin-top: 0.35rem;">DISPONÍVEL</div>
                </div>
            `;
        }
    }

    let memberOptions = '<option value="">-- SELECIONA O TEU NICKNAME --</option>';
    ROSTER_DATA.cs2.forEach(m => {
        memberOptions += `<option value="${m.name}">${m.name}</option>`;
    });

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 1rem;">
            <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">● TARGET COMPETITIVE MATCH</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 900; color: #fff;">${COMPETITIVE_EVENT.title}</h3>
                <div style="font-size: 0.82rem; color: var(--text-dim);">📅 ${formattedDate} · ${COMPETITIVE_EVENT.dateText}</div>
            </div>
            <div style="background: rgba(0,223,129,0.1); border: 1px solid var(--accent); padding: 0.4rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-bright); font-weight: 800;">
                ${confirmedCount} / 5 CONFIRMADOS
            </div>
        </div>

        <div class="retro-timer-grid">
            <div class="retro-timer-block">
                <div class="retro-timer-num" id="cdDays">00</div>
                <div class="retro-timer-lbl">DIAS</div>
            </div>
            <div class="retro-timer-block">
                <div class="retro-timer-num" id="cdHours">00</div>
                <div class="retro-timer-lbl">HORAS</div>
            </div>
            <div class="retro-timer-block">
                <div class="retro-timer-num" id="cdMins">00</div>
                <div class="retro-timer-lbl">MINS</div>
            </div>
            <div class="retro-timer-block">
                <div class="retro-timer-num" id="cdSecs">00</div>
                <div class="retro-timer-lbl">SEGS</div>
            </div>
        </div>

        <div class="retro-squad-grid">
            ${slotsHtml}
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; background: #000; padding: 1rem; border: 2px inset var(--win-shadow);">
            <select id="checkinMemberSelect" class="retro-select" style="flex: 2;">
                ${memberOptions}
            </select>

            <select id="checkinPlayerRole" class="retro-select" style="flex: 1;">
                <option value="Titular">Titular (5v5)</option>
                <option value="Reserva">Reserva</option>
            </select>

            <button class="retro-btn retro-btn-accent" onclick="submitDropdownCheckin()" style="flex: 1.5;">Confirmar Presença ✓</button>
        </div>
    `;

    updateCountdown();
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function submitDropdownCheckin() {
    const selectEl = document.getElementById('checkinMemberSelect');
    const roleEl = document.getElementById('checkinPlayerRole');
    if (!selectEl || !selectEl.value) {
        showToast('Seleciona o teu Nickname no menu!');
        return;
    }

    const name = selectEl.value;
    const role = roleEl.value;

    const exists = COMPETITIVE_EVENT.checkedInPlayers.find(p => p.name === name);
    if (exists) {
        showToast('Já marcaste presença neste competitivo!');
        return;
    }

    COMPETITIVE_EVENT.checkedInPlayers.push({ name, role });
    localStorage.setItem('novamato_custom_event', JSON.stringify(COMPETITIVE_EVENT));

    if (!PLAYER_MATCH_STATS[name]) {
        PLAYER_MATCH_STATS[name] = { matches: 1, photo: 'imagens/favicon.png' };
    } else {
        PLAYER_MATCH_STATS[name].matches += 1;
    }
    localStorage.setItem('novamato_custom_match_stats', JSON.stringify(PLAYER_MATCH_STATS));

    renderAttendanceHub();
    renderCapsLeaderboard();
    showToast(`✅ Presença confirmada para ${name}!`);
    playRetroSound('open');
}

function cancelCheckin(name) {
    COMPETITIVE_EVENT.checkedInPlayers = COMPETITIVE_EVENT.checkedInPlayers.filter(p => p.name !== name);
    localStorage.setItem('novamato_custom_event', JSON.stringify(COMPETITIVE_EVENT));

    if (PLAYER_MATCH_STATS[name] && PLAYER_MATCH_STATS[name].matches > 0) {
        PLAYER_MATCH_STATS[name].matches -= 1;
        localStorage.setItem('novamato_custom_match_stats', JSON.stringify(PLAYER_MATCH_STATS));
    }

    renderAttendanceHub();
    renderCapsLeaderboard();
    showToast(`Presença de ${name} cancelada.`);
    playRetroSound('click');
}

function updateCountdown() {
    const target = new Date(COMPETITIVE_EVENT.targetDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    // Elementos da janela de Presenças
    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');

    // Elementos do Banner Superior Fixo (Aviso em destaque)
    const bannerTitleEl = document.getElementById('bannerEventTitle');
    const bannerTimerEl = document.getElementById('bannerEventCountdown');

    if (bannerTitleEl) {
        bannerTitleEl.innerText = COMPETITIVE_EVENT.title || 'CS2 Competitivo Scrim';
    }

    if (diff <= 0 || isNaN(diff)) {
        if (dEl) dEl.innerText = '00';
        if (hEl) hEl.innerText = '00';
        if (mEl) mEl.innerText = '00';
        if (sEl) sEl.innerText = '00';
        if (bannerTimerEl) {
            bannerTimerEl.innerText = '🔴 EM JOGO / A DECORRER';
            bannerTimerEl.style.borderColor = '#ef4444';
            bannerTimerEl.style.color = '#ef4444';
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
    if (sEl) sEl.innerText = String(seconds).padStart(2, '0');

    if (bannerTimerEl) {
        const timeFormatted = days > 0 
            ? `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`
            : `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        bannerTimerEl.innerText = `FALTAM: ${timeFormatted}`;
        bannerTimerEl.style.borderColor = '#00f0ff';
        bannerTimerEl.style.color = '#00f0ff';
    }
}

// ====================================================================
// 🏆 MATCH RESULTS & CAPS RECORD BREAKERS
// ====================================================================
function renderMatchResults() {
    const container = document.getElementById('matchResultsGrid');
    if (!container) return;

    if (MATCH_RESULTS.length === 0) {
        container.innerHTML = `<div style="color: var(--text-dim); font-size: 0.85rem;">Nenhum resultado gravado.</div>`;
        return;
    }

    container.innerHTML = '';
    MATCH_RESULTS.forEach(r => {
        const card = document.createElement('div');
        card.style.cssText = 'background: var(--win-card-bg); border: 1px solid rgba(255,255,255,0.1); padding: 0.85rem; margin-bottom: 0.75rem;';

        let outcomeColor = r.outcome === 'win' ? 'var(--accent-bright)' : (r.outcome === 'loss' ? '#f87171' : 'var(--text-muted)');
        let outcomeText = r.outcome === 'win' ? 'VITÓRIA' : (r.outcome === 'loss' ? 'DERROTA' : 'EMPATE');

        let lineupTags = '';
        r.lineup.forEach(p => {
            if (p === 'Random') {
                lineupTags += `<span style="background: #000; padding: 0.15rem 0.4rem; font-size: 0.68rem; color: var(--text-dim); border: 1px solid #333;">🎲 Random</span> `;
            } else {
                lineupTags += `<span style="background: rgba(0,223,129,0.1); padding: 0.15rem 0.4rem; font-size: 0.68rem; color: var(--accent); border: 1px solid var(--accent);">${p}</span> `;
            }
        });

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-dim); margin-bottom: 0.35rem;">
                <span>${r.map}</span>
                <strong style="color: ${outcomeColor};">${outcomeText}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: #fff; font-size: 0.95rem;">NOVAMATO vs ${r.opponent}</strong>
                <span style="font-family: var(--font-pixel); font-size: 1.6rem; color: ${outcomeColor};">${r.score}</span>
            </div>
            <div>${lineupTags}</div>
        `;
        container.appendChild(card);
    });
}

function renderCapsLeaderboard() {
    const container = document.getElementById('capsLeaderboard');
    if (!container) return;

    const sortedPlayers = Object.entries(PLAYER_MATCH_STATS).map(([name, data]) => ({
        name,
        ...data
    })).sort((a, b) => b.matches - a.matches);

    container.innerHTML = '';
    sortedPlayers.forEach((p, index) => {
        const item = document.createElement('div');
        item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.85rem; background: var(--win-card-bg); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 0.45rem;';

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; color: var(--accent);">#${String(index + 1).padStart(2, '0')}</span>
                <strong style="color: #fff; font-size: 0.9rem;">${p.name}</strong>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-bright); font-weight: 800;">${p.matches} JOGOS</div>
        `;
        container.appendChild(item);
    });
}

function renderHighlightVideo() {
    const container = document.getElementById('clutchVideoContainer');
    if (!container || !HIGHLIGHT_VIDEO) return;

    container.innerHTML = `
        <video controls autoplay muted loop playsinline style="width: 100%; display: block; max-height: 480px;">
            <source src="${HIGHLIGHT_VIDEO.src}" type="video/mp4">
        </video>
    `;
}

// ====================================================================
// 🔒 ADMIN VAULT BODY & MANAGEMENT
// ====================================================================
// 🔒 ADMIN VAULT BODY & MANAGEMENT
// ====================================================================
function renderAdminVaultBody() {
    const container = document.getElementById('adminVaultBody');
    if (!container) return;

    let memberOptionsWithRandom = '<option value="Random">🎲 Random (Fill)</option>';
    ROSTER_DATA.cs2.forEach(m => {
        memberOptionsWithRandom += `<option value="${m.name}">${m.name}</option>`;
    });

    const savedFaceitKey = localStorage.getItem('novamato_faceit_api_key') || '';

    container.innerHTML = `
        <div style="margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 0.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); font-weight: 800;">[ ADMIN COCKPIT // FULL CONTROL ]</div>
        </div>

        <div style="background: var(--win-card-bg); padding: 1.25rem; border: 1px solid rgba(255,255,255,0.15); margin-bottom: 1.25rem;">
            <strong style="color: #fff; display: block; margin-bottom: 0.75rem;">📊 Registar Resultado de Partida (Mínimo 3 Membros Oficiais)</strong>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                <input type="text" id="resOpponent" class="retro-input" placeholder="Adversário (ex: Rhinos)">
                <input type="text" id="resMap" class="retro-input" placeholder="Mapa (ex: Mirage)">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                <input type="text" id="resScore" class="retro-input" placeholder="Placar (ex: 13-9)">
                <select id="resOutcome" class="retro-select">
                    <option value="win">Vitória 🏆</option>
                    <option value="loss">Derrota</option>
                    <option value="draw">Empate</option>
                </select>
            </div>
            <div style="margin-bottom: 0.75rem;">
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block; margin-bottom: 0.35rem;">Line-up de 5 Atletas:</label>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.4rem;">
                    <select id="slotP1" class="retro-select">${memberOptionsWithRandom}</select>
                    <select id="slotP2" class="retro-select">${memberOptionsWithRandom}</select>
                    <select id="slotP3" class="retro-select">${memberOptionsWithRandom}</select>
                    <select id="slotP4" class="retro-select">${memberOptionsWithRandom}</select>
                    <select id="slotP5" class="retro-select">${memberOptionsWithRandom}</select>
                </div>
            </div>
            <button class="retro-btn retro-btn-accent" onclick="submitMatchResult()" style="width: 100%;">Publicar Resultado →</button>
        </div>

        <div style="background: var(--win-card-bg); padding: 1.25rem; border: 1px solid rgba(255,255,255,0.15); margin-bottom: 1.25rem;">
            <strong style="color: #fff; display: block; margin-bottom: 0.5rem;">⚡ Faceit Live Feed & Cotações Automáticas</strong>
            <p style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.75rem;">O sistema sincroniza automaticamente o Elo e as cotações das ações dos 12 atletas em segundo plano.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="retro-btn" onclick="simulateMarketShift(0.15)" style="flex: 1; font-size: 0.75rem; color: #00df81;">📈 Simular Alta (+15%)</button>
                <button class="retro-btn" onclick="simulateMarketShift(-0.10)" style="flex: 1; font-size: 0.75rem; color: #ef4444;">📉 Simular Queda (-10%)</button>
            </div>
        </div>

        <div style="background: var(--win-card-bg); padding: 1.25rem; border: 1px solid rgba(255,255,255,0.15);">
            <strong style="color: #fff; display: block; margin-bottom: 0.75rem;">⏱️ Ajustar Próximo Competitivo & Timer</strong>
            <input type="text" id="adminEventTitle" class="retro-input" style="width: 100%; margin-bottom: 0.5rem;" value="${COMPETITIVE_EVENT.title}">
            <input type="datetime-local" id="adminEventDateInput" class="retro-input" style="width: 100%; margin-bottom: 0.75rem;" value="${COMPETITIVE_EVENT.targetDate}">
            <div style="display: flex; gap: 0.5rem;">
                <button class="retro-btn retro-btn-accent" onclick="saveAdminEvent()" style="flex: 2;">Salvar Evento</button>
                <button class="retro-btn" onclick="clearEventCheckins()" style="flex: 1;">Limpar Presenças</button>
            </div>
        </div>
    `;
}

function saveFaceitKey() {
    const input = document.getElementById('faceitApiKeyInput');
    if (!input) return;
    const key = input.value.trim();
    localStorage.setItem('novamato_faceit_api_key', key);
    showToast('🔑 Chave Faceit API guardada com sucesso!');
    playRetroSound('open');
}

function simulateMarketShift(pct) {
    ATHLETE_STOCKS.forEach(stock => {
        const delta = pct + (Math.random() * 0.06 - 0.03);
        const oldPrice = stock.price;
        stock.price = Math.max(10, parseFloat((stock.price * (1 + delta)).toFixed(2)));
        stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
        stock.history.push(stock.price);
        if (stock.history.length > 10) stock.history.shift();
        if (delta > 0) stock.elo += Math.floor(Math.random() * 20 + 10);
        else stock.elo = Math.max(1000, stock.elo - Math.floor(Math.random() * 20 + 10));
    });
    saveTradingData();
    renderTradingDesk();
    showToast(`📊 Mercado ajustado em ${(pct * 100).toFixed(0)}%!`);
    playRetroSound('cash');
}

function submitMatchResult() {
    const opp = document.getElementById('resOpponent').value.trim();
    const map = document.getElementById('resMap').value.trim() || 'Mirage';
    const score = document.getElementById('resScore').value.trim() || '13 - 0';
    const outcome = document.getElementById('resOutcome').value;

    if (!opp) {
        showToast('Indica o nome do adversário!');
        return;
    }

    const p1 = document.getElementById('slotP1').value;
    const p2 = document.getElementById('slotP2').value;
    const p3 = document.getElementById('slotP3').value;
    const p4 = document.getElementById('slotP4').value;
    const p5 = document.getElementById('slotP5').value;

    const lineup = [p1, p2, p3, p4, p5];
    const officialMembers = lineup.filter(p => p !== 'Random');

    if (officialMembers.length < 3) {
        showToast('❌ Mínimo 3 membros oficiais da Novamato na partida!');
        return;
    }

    const newResult = {
        id: Date.now(),
        game: 'Counter-Strike 2',
        opponent: opp,
        map: map,
        score: score,
        outcome: outcome,
        date: new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' }),
        lineup: lineup
    };

    MATCH_RESULTS.unshift(newResult);
    localStorage.setItem('novamato_custom_results', JSON.stringify(MATCH_RESULTS));

    officialMembers.forEach(mem => {
        if (!PLAYER_MATCH_STATS[mem]) {
            PLAYER_MATCH_STATS[mem] = { matches: 1, photo: 'imagens/favicon.png' };
        } else {
            PLAYER_MATCH_STATS[mem].matches += 1;
        }
    });
    localStorage.setItem('novamato_custom_match_stats', JSON.stringify(PLAYER_MATCH_STATS));

    // 📈 Atualizar Cotação das Ações dos Atletas após a Partida (Win = Alta, Loss = Queda)
    updateAthleteStockFromMatch(officialMembers, outcome);

    renderMatchResults();
    renderCapsLeaderboard();
    showToast(`✅ Resultado de ${score} registado! Ações de mercado atualizadas.`);
    playRetroSound('open');
}

function showEventCreatedPopup(eventData, isNew = true) {
    let existingPopup = document.getElementById('eventCreatedPopup');
    if (existingPopup) existingPopup.remove();

    const formattedDate = formatToPortugueseDate(eventData.targetDate);
    const slots = eventData.maxSlots || 5;
    const checkedCount = eventData.checkedInPlayers?.length || 0;

    const popup = document.createElement('div');
    popup.id = 'eventCreatedPopup';
    popup.className = 'event-popup-overlay';
    popup.innerHTML = `
        <div class="event-popup-box">
            <div class="event-popup-header">
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 1rem;">🚨</span>
                    <span>NOVO CONFRONTO COMPETITIVO AGENDADO</span>
                </div>
                <button class="win-btn close-btn" onclick="closeEventPopup()" style="min-width: 18px; height: 18px; padding: 0 4px; font-weight: 900; font-size: 0.75rem;">✕</button>
            </div>
            <div class="event-popup-body">
                <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 1rem; padding-bottom: 0.85rem; border-bottom: 1px solid #1e293b;">
                    <img src="icons/checkin.svg" class="pixel-icon" style="width: 46px; height: 46px; flex-shrink: 0; background: #000; border: 2px solid #00df81; padding: 4px;">
                    <div style="flex: 1;">
                        <div style="font-family: var(--font-mono); font-size: 0.68rem; color: #00df81; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                            [ SISTEMA DE CONVOCAÇÃO OFICIAL ]
                        </div>
                        <h3 style="margin: 3px 0 6px 0; color: #ffffff; font-size: 1.05rem; font-weight: 900; line-height: 1.3;">
                            ${eventData.title}
                        </h3>
                        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(0, 223, 129, 0.12); border: 1px solid #00df81; padding: 2px 8px; border-radius: 2px; color: #00df81; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800;">
                            <span>📅 ${formattedDate}</span>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(0, 0, 0, 0.6); border: 1px solid #334155; padding: 0.75rem; margin-bottom: 1.15rem; font-size: 0.8rem; line-height: 1.5; color: #cbd5e1;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                        <span style="color: #94a3b8;">Formato:</span>
                        <strong style="color: #fff;">5v5 Scrim / Competitivo Oficial</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                        <span style="color: #94a3b8;">Vagas de Titular:</span>
                        <strong style="color: #00df81;">${checkedCount} / ${slots} Confirmados</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #94a3b8;">Canal de Voz:</span>
                        <strong style="color: #60a5fa;">Discord #treinos-cs2</strong>
                    </div>
                </div>

                <div style="display: flex; gap: 8px;">
                    <button class="retro-btn retro-btn-accent" onclick="confirmFromPopup()" style="flex: 2; padding: 7px 12px; font-weight: 800; font-size: 0.82rem;">
                        ✓ Abrir Convocatória & Marcar Presença
                    </button>
                    <button class="retro-btn" onclick="closeEventPopup()" style="flex: 1; padding: 7px 10px; font-size: 0.8rem;">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(popup);
    playRetroSound('alert');
}

function closeEventPopup() {
    const popup = document.getElementById('eventCreatedPopup');
    if (popup) popup.remove();
    playRetroSound('click');
}

function confirmFromPopup() {
    closeEventPopup();
    openWindow('winCheckin');
}

function saveAdminEvent() {
    const titleInput = document.getElementById('adminEventTitle');
    const dateInput = document.getElementById('adminEventDateInput');

    if (!titleInput || !dateInput) return;

    COMPETITIVE_EVENT.title = titleInput.value.trim() || 'CS2 5V5 COMPETITIVE SCRIM';
    COMPETITIVE_EVENT.targetDate = dateInput.value;
    COMPETITIVE_EVENT.lastUpdated = Date.now();

    localStorage.setItem('novamato_custom_event', JSON.stringify(COMPETITIVE_EVENT));
    renderAttendanceHub();

    // 📢 Disparar o popup do evento
    showEventCreatedPopup(COMPETITIVE_EVENT, true);

    showToast('🚨 Novo Evento publicado com sucesso!');
}

function clearEventCheckins() {
    if (confirm('Limpar a lista de presenças deste evento?')) {
        COMPETITIVE_EVENT.checkedInPlayers = [];
        localStorage.setItem('novamato_custom_event', JSON.stringify(COMPETITIVE_EVENT));
        renderAttendanceHub();
        showToast('Presenças limpas.');
        playRetroSound('click');
    }
}

// ====================================================================
// 📈 WALLSTREET 95 — CS2 ATHLETE STOCK EXCHANGE & TRADING ENGINE
// ====================================================================
let ATHLETE_STOCKS = [
    { ticker: 'FURRY', name: 'FurryFeetLover_69', price: 152.00, change24h: 7.8, elo: 1740, kd: 1.22, photo: 'imagens/4.jpg', role: 'MVP Star', history: [138, 142, 140, 145, 148, 150, 152.0] },
    { ticker: 'MIGGA', name: 'migga', price: 136.00, change24h: 5.4, elo: 1620, kd: 1.15, photo: 'imagens/2.jpg', role: 'Rifler / Entry', history: [126, 128, 130, 131, 134, 135, 136.0] },
    { ticker: 'WHITE', name: 'white', price: 129.50, change24h: 4.2, elo: 1580, kd: 1.12, photo: 'imagens/1.jpg', role: 'Captain / IGL', history: [120, 122, 125, 124, 126, 128, 129.5] },
    { ticker: 'COSTA', name: 'CØSTA', price: 114.00, change24h: -2.1, elo: 1430, kd: 1.05, photo: 'imagens/3.jpg', role: 'Support', history: [118, 120, 117, 116, 115, 116, 114.0] },
    { ticker: 'T6MAJ', name: 't6maj', price: 106.50, change24h: 3.1, elo: 1380, kd: 1.02, photo: 'imagens/10.jpg', role: 'AWPer', history: [98, 100, 102, 101, 103, 105, 106.5] },
    { ticker: 'OPTRISTA', name: 'Optrista_CG', price: 98.00, change24h: 1.5, elo: 1320, kd: 0.99, photo: 'imagens/8.jpg', role: 'Anchor', history: [94, 95, 96, 95, 97, 97, 98.0] },
    { ticker: 'PIGEON', name: 'Mr.Pigeon', price: 88.40, change24h: -3.8, elo: 1210, kd: 0.95, photo: 'imagens/6.jpg', role: 'Lurker', history: [94, 93, 91, 90, 89, 90, 88.4] },
    { ticker: 'ALBUQ', name: 'mr.albuquecas', price: 82.00, change24h: 2.1, elo: 1170, kd: 0.94, photo: 'imagens/5.jpg', role: 'Flex', history: [78, 79, 80, 80, 81, 81, 82.0] },
    { ticker: 'TUTURY', name: 'Tutury', price: 76.50, change24h: -1.0, elo: 1090, kd: 0.92, photo: 'imagens/9.jpg', role: 'Rifler', history: [79, 78, 77, 78, 77, 77, 76.5] },
    { ticker: 'NETO', name: 'Neto', price: 71.00, change24h: 4.2, elo: 1040, kd: 0.90, photo: 'imagens/7.jpg', role: 'Support', history: [66, 67, 68, 68, 69, 70, 71.0] },
    { ticker: 'MINOSO', name: 'paulo minoso-', price: 66.50, change24h: -3.2, elo: 980, kd: 0.88, photo: 'imagens/12.jpg', role: 'Entry Fragger', history: [71, 70, 69, 68, 67, 68, 66.5] },
    { ticker: 'SIDST', name: 'SIDST', price: 61.00, change24h: 2.5, elo: 920, kd: 0.86, photo: 'imagens/11.jpg', role: 'Anchor', history: [58, 59, 60, 59, 60, 60, 61.0] }
];

let USER_TRADING_ACCOUNT = {
    balance: 10000.00, // 10,000 $NVMT Points
    portfolio: {},     // { [ticker]: { shares: 10, totalCost: 1500.00 } }
    history: []        // [ { id, type, ticker, shares, price, total, date } ]
};

let currentTradingTab = 'market';
let isFaceitSyncing = false;

// Load saved stocks & user trading account
try {
    const sStocks = localStorage.getItem('novamato_athlete_stocks');
    if (sStocks) {
        const parsed = JSON.parse(sStocks);
        // Clean out legacy unrealistic 2000+ Level 10 elos
        if (parsed.some(s => s.elo >= 1850)) {
            localStorage.removeItem('novamato_athlete_stocks');
        } else {
            ATHLETE_STOCKS = parsed;
        }
    }

    const sAccount = localStorage.getItem('novamato_trading_account');
    if (sAccount) USER_TRADING_ACCOUNT = JSON.parse(sAccount);
} catch (e) {}

function saveTradingData() {
    localStorage.setItem('novamato_athlete_stocks', JSON.stringify(ATHLETE_STOCKS));
    localStorage.setItem('novamato_trading_account', JSON.stringify(USER_TRADING_ACCOUNT));
}

function getFaceitLevel(elo) {
    if (elo >= 2001) return { level: 10, color: '#fe2f00', bg: '#350b0b' };
    if (elo >= 1851) return { level: 9, color: '#e67e22', bg: '#2b1906' };
    if (elo >= 1701) return { level: 8, color: '#e67e22', bg: '#2b1906' };
    if (elo >= 1551) return { level: 7, color: '#f1c40f', bg: '#282305' };
    if (elo >= 1401) return { level: 6, color: '#f1c40f', bg: '#282305' };
    if (elo >= 1251) return { level: 5, color: '#f1c40f', bg: '#282305' };
    if (elo >= 1101) return { level: 4, color: '#f1c40f', bg: '#282305' };
    if (elo >= 951) return { level: 3, color: '#2ecc71', bg: '#072412' };
    if (elo >= 801) return { level: 2, color: '#2ecc71', bg: '#072412' };
    return { level: 1, color: '#ffffff', bg: '#222222' };
}

async function syncFaceitData(manual = false) {
    if (isFaceitSyncing) return;
    isFaceitSyncing = true;
    
    const syncBtns = document.querySelectorAll('.faceit-sync-btn');
    syncBtns.forEach(btn => {
        btn.innerText = '⏳ Sincronizando...';
        btn.disabled = true;
    });

    let updatedCount = 0;
    const customKey = localStorage.getItem('novamato_faceit_api_key') || '';

    for (let stock of ATHLETE_STOCKS) {
        try {
            const rosterMember = ROSTER_DATA.cs2.find(r => r.name.toLowerCase() === stock.name.toLowerCase());
            let queryUrl = '';
            
            if (rosterMember && rosterMember.steamUrl && rosterMember.steamUrl.includes('/profiles/')) {
                const steamId = rosterMember.steamUrl.split('/profiles/')[1].replace('/', '');
                queryUrl = `/api/faceit/player?steamId=${steamId}`;
            } else {
                queryUrl = `/api/faceit/player?nickname=${encodeURIComponent(stock.name)}`;
            }

            if (customKey) queryUrl += `&apiKey=${encodeURIComponent(customKey)}`;

            const res = await fetch(queryUrl);
            if (res.ok) {
                const data = await res.json();
                if (data && (data.games?.cs2 || data.games?.csgo)) {
                    const csData = data.games.cs2 || data.games.csgo;
                    const newElo = parseInt(csData.faceit_elo) || stock.elo;
                    const oldPrice = stock.price;

                    stock.elo = newElo;
                    stock.price = Math.max(10, parseFloat(((stock.elo / 14) * (stock.kd / 1.0)).toFixed(2)));
                    stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
                    stock.history.push(stock.price);
                    if (stock.history.length > 10) stock.history.shift();
                    updatedCount++;
                } else {
                    const delta = (Math.random() * 5.4 - 2.5);
                    const oldPrice = stock.price;
                    stock.price = Math.max(10, parseFloat((stock.price * (1 + delta / 100)).toFixed(2)));
                    stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
                    stock.history.push(stock.price);
                    if (stock.history.length > 10) stock.history.shift();
                }
            } else {
                const delta = (Math.random() * 5.4 - 2.5);
                const oldPrice = stock.price;
                stock.price = Math.max(10, parseFloat((stock.price * (1 + delta / 100)).toFixed(2)));
                stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
                stock.history.push(stock.price);
                if (stock.history.length > 10) stock.history.shift();
            }
        } catch (e) {
            const delta = (Math.random() * 5.4 - 2.5);
            const oldPrice = stock.price;
            stock.price = Math.max(10, parseFloat((stock.price * (1 + delta / 100)).toFixed(2)));
            stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
            stock.history.push(stock.price);
            if (stock.history.length > 10) stock.history.shift();
        }
    }

    saveTradingData();
    renderTradingDesk();
    isFaceitSyncing = false;

    if (manual) {
        showToast(`⚡ Cotações atualizadas via Faceit API! (${updatedCount > 0 ? updatedCount + ' atletas sincronizados' : 'Mercado atualizado'})`);
        playRetroSound('cash');
    }
}

function updateAthleteStockFromMatch(officialMembers, outcome) {
    officialMembers.forEach(mem => {
        const stock = ATHLETE_STOCKS.find(s => s.name === mem || s.name.toLowerCase() === mem.toLowerCase());
        if (stock) {
            let mult = outcome === 'win' 
                ? (1 + (0.12 + Math.random() * 0.15)) 
                : (outcome === 'loss' ? (1 - (0.09 + Math.random() * 0.12)) : (1 + (Math.random() * 0.06 - 0.03)));
            
            const oldPrice = stock.price;
            stock.price = Math.max(10, parseFloat((stock.price * mult).toFixed(2)));
            stock.change24h = parseFloat((((stock.price - oldPrice) / oldPrice) * 100).toFixed(1));
            stock.history.push(stock.price);
            if (stock.history.length > 10) stock.history.shift();

            if (outcome === 'win') stock.elo += Math.floor(Math.random() * 15 + 15);
            else if (outcome === 'loss') stock.elo = Math.max(1000, stock.elo - Math.floor(Math.random() * 15 + 10));
        }
    });
    saveTradingData();
    renderTradingDesk();
}

function calculatePortfolioValue() {
    let invested = 0;
    let currentVal = 0;

    for (const [ticker, pos] of Object.entries(USER_TRADING_ACCOUNT.portfolio)) {
        if (pos && pos.shares > 0) {
            const stock = ATHLETE_STOCKS.find(s => s.ticker === ticker);
            const curPrice = stock ? stock.price : (pos.totalCost / pos.shares);
            invested += pos.totalCost;
            currentVal += pos.shares * curPrice;
        }
    }

    const netWorth = USER_TRADING_ACCOUNT.balance + currentVal;
    const profitLoss = currentVal - invested;
    const profitLossPct = invested > 0 ? ((profitLoss / invested) * 100) : 0;

    return { invested, currentVal, netWorth, profitLoss, profitLossPct };
}

function renderTradingDesk(tabToSet) {
    const container = document.getElementById('tradingDeskContainer');
    if (!container) return;

    if (tabToSet) currentTradingTab = tabToSet;

    const stats = calculatePortfolioValue();

    // 1. Ticker Tape HTML
    const tickerItemsHtml = ATHLETE_STOCKS.map(s => {
        const isUp = s.change24h >= 0;
        return `
            <div class="ticker-item">
                <strong style="color: #ffffff;">$${s.ticker}</strong>
                <span>${s.price.toFixed(2)} pts</span>
                <span class="${isUp ? 'ticker-up' : 'ticker-down'}">${isUp ? '▲ +' : '▼ '}${s.change24h}%</span>
            </div>
        `;
    }).join('');

    // 2. Summary KPI Cards
    const kpiHtml = `
        <div class="trading-kpi-grid">
            <div class="trading-kpi-card">
                <div class="trading-kpi-title">Saldo Disponível</div>
                <div class="trading-kpi-val" style="color: var(--accent);">${USER_TRADING_ACCOUNT.balance.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pts</div>
            </div>
            <div class="trading-kpi-card">
                <div class="trading-kpi-title">Valor em Ações</div>
                <div class="trading-kpi-val">${stats.currentVal.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pts</div>
            </div>
            <div class="trading-kpi-card">
                <div class="trading-kpi-title">Património Total</div>
                <div class="trading-kpi-val" style="color: #00f0ff;">${stats.netWorth.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} pts</div>
            </div>
            <div class="trading-kpi-card">
                <div class="trading-kpi-title">Lucro / Prejuízo (P&L)</div>
                <div class="trading-kpi-val" style="color: ${stats.profitLoss >= 0 ? '#00df81' : '#ef4444'};">
                    ${stats.profitLoss >= 0 ? '+' : ''}${stats.profitLoss.toFixed(2)} (${stats.profitLossPct.toFixed(1)}%)
                </div>
            </div>
        </div>
    `;

    // 3. Tab Content
    let tabContentHtml = '';

    if (currentTradingTab === 'market') {
        const rowsHtml = ATHLETE_STOCKS.map((s, idx) => {
            const isUp = s.change24h >= 0;
            const ownedShares = USER_TRADING_ACCOUNT.portfolio[s.ticker]?.shares || 0;
            const lv = getFaceitLevel(s.elo);
            return `
                <tr>
                    <td style="color: #94a3b8; width: 30px;">#${idx + 1}</td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <img src="${s.photo}" style="width: 26px; height: 26px; border-radius: 2px; border: 1px solid #404040;" alt="${s.name}">
                            <div>
                                <strong style="color: #ffffff; display: block;">$${s.ticker}</strong>
                                <span style="font-size: 0.72rem; color: #94a3b8;">${s.name} (${s.role})</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <span class="faceit-badge" style="background: ${lv.bg}; color: ${lv.color}; border-color: ${lv.color};">LVL ${lv.level}</span>
                            <span style="color: #00f0ff; font-weight: 700;">${s.elo} Elo</span>
                        </div>
                    </td>
                    <td><strong style="color: #ffffff; font-size: 0.95rem;">${s.price.toFixed(2)} pts</strong></td>
                    <td>
                        <span class="${isUp ? 'ticker-up' : 'ticker-down'}" style="font-size: 0.85rem;">
                            ${isUp ? '▲ +' : '▼ '}${s.change24h}%
                        </span>
                    </td>
                    <td>
                        <span style="color: ${ownedShares > 0 ? '#00df81' : '#64748b'}; font-weight: ${ownedShares > 0 ? '700' : '400'};">
                            ${ownedShares} ações
                        </span>
                    </td>
                    <td style="text-align: right; white-space: nowrap;">
                        <button class="trade-btn-buy" onclick="openTradeModal('${s.ticker}', 'BUY')">+ Comprar</button>
                        ${ownedShares > 0 ? `<button class="trade-btn-sell" onclick="openTradeModal('${s.ticker}', 'SELL')">- Vender</button>` : ''}
                    </td>
                </tr>
            `;
        }).join('');

        tabContentHtml = `
            <div class="trading-table-wrap">
                <table class="trading-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Atleta / Ticker</th>
                            <th>Faceit Level & Elo</th>
                            <th>Cotação Atual</th>
                            <th>Var. 24h</th>
                            <th>Minhas Ações</th>
                            <th style="text-align: right;">Operações</th>
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>
        `;
    } else if (currentTradingTab === 'portfolio') {
        const ownedTickers = Object.keys(USER_TRADING_ACCOUNT.portfolio).filter(t => USER_TRADING_ACCOUNT.portfolio[t]?.shares > 0);

        if (ownedTickers.length === 0) {
            tabContentHtml = `
                <div style="text-align: center; padding: 2.5rem 1rem; background: #000; border: 2px solid; border-color: #404040 #ffffff #ffffff #404040;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💼</div>
                    <strong style="color: #ffffff; display: block; margin-bottom: 0.5rem;">A tua carteira está vazia!</strong>
                    <p style="color: #94a3b8; font-size: 0.82rem; margin-bottom: 1rem;">Tens ${USER_TRADING_ACCOUNT.balance.toLocaleString('pt-PT')} pontos disponíveis. Investe nos melhores atletas de CS2 da Novamato.</p>
                    <button class="retro-btn retro-btn-accent" onclick="renderTradingDesk('market')">Ver Mercado de Ações →</button>
                </div>
            `;
        } else {
            const rowsHtml = ownedTickers.map(ticker => {
                const pos = USER_TRADING_ACCOUNT.portfolio[ticker];
                const stock = ATHLETE_STOCKS.find(s => s.ticker === ticker) || { price: 100, name: ticker, photo: 'imagens/favicon.png' };
                const curVal = pos.shares * stock.price;
                const pl = curVal - pos.totalCost;
                const plPct = pos.totalCost > 0 ? ((pl / pos.totalCost) * 100) : 0;
                const avgPrice = pos.totalCost / pos.shares;

                return `
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <img src="${stock.photo}" style="width: 24px; height: 24px; border-radius: 2px;" alt="${stock.name}">
                                <div>
                                    <strong style="color: #ffffff;">$${ticker}</strong>
                                    <span style="font-size: 0.72rem; color: #94a3b8; display: block;">${stock.name}</span>
                                </div>
                            </div>
                        </td>
                        <td><strong>${pos.shares}</strong></td>
                        <td>${avgPrice.toFixed(2)} pts</td>
                        <td><strong style="color: #ffffff;">${stock.price.toFixed(2)} pts</strong></td>
                        <td>${curVal.toFixed(2)} pts</td>
                        <td>
                            <span style="color: ${pl >= 0 ? '#00df81' : '#ef4444'}; font-weight: 700;">
                                ${pl >= 0 ? '+' : ''}${pl.toFixed(2)} (${plPct.toFixed(1)}%)
                            </span>
                        </td>
                        <td style="text-align: right;">
                            <button class="trade-btn-sell" onclick="openTradeModal('${ticker}', 'SELL')">Vender Ações</button>
                        </td>
                    </tr>
                `;
            }).join('');

            tabContentHtml = `
                <div class="trading-table-wrap">
                    <table class="trading-table">
                        <thead>
                            <tr>
                                <th>Atleta / Ticker</th>
                                <th>Qtd. Ações</th>
                                <th>Preço Médio</th>
                                <th>Cotação Atual</th>
                                <th>Valor Atual</th>
                                <th>Lucro / Prejuízo</th>
                                <th style="text-align: right;">Ação</th>
                            </tr>
                        </thead>
                        <tbody>${rowsHtml}</tbody>
                    </table>
                </div>
            `;
        }
    } else if (currentTradingTab === 'history') {
        if (USER_TRADING_ACCOUNT.history.length === 0) {
            tabContentHtml = `
                <div style="text-align: center; padding: 2.5rem 1rem; background: #000; border: 2px solid; border-color: #404040 #ffffff #ffffff #404040;">
                    <div style="color: #94a3b8; font-size: 0.85rem;">Nenhuma transação registada até ao momento.</div>
                </div>
            `;
        } else {
            const rowsHtml = USER_TRADING_ACCOUNT.history.slice(0, 20).map(tx => {
                const isBuy = tx.type === 'BUY';
                return `
                    <tr>
                        <td style="color: #94a3b8;">${tx.date}</td>
                        <td>
                            <span style="color: ${isBuy ? '#00df81' : '#ef4444'}; font-weight: 800; border: 1px solid; border-color: ${isBuy ? '#00df81' : '#ef4444'}; padding: 1px 4px; font-size: 0.72rem;">
                                ${isBuy ? 'COMPRA' : 'VENDA'}
                            </span>
                        </td>
                        <td><strong style="color: #ffffff;">$${tx.ticker}</strong></td>
                        <td>${tx.shares}</td>
                        <td>${tx.price.toFixed(2)} pts</td>
                        <td><strong>${tx.total.toFixed(2)} pts</strong></td>
                    </tr>
                `;
            }).join('');

            tabContentHtml = `
                <div class="trading-table-wrap">
                    <table class="trading-table">
                        <thead>
                            <tr>
                                <th>Data / Hora</th>
                                <th>Tipo</th>
                                <th>Atleta / Ticker</th>
                                <th>Qtd</th>
                                <th>Preço Unitário</th>
                                <th>Total Transacionado</th>
                            </tr>
                        </thead>
                        <tbody>${rowsHtml}</tbody>
                    </table>
                </div>
            `;
        }
    }

    container.innerHTML = `
        <div class="ticker-strip">${tickerItemsHtml}</div>
        ${kpiHtml}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
            <div class="trading-tabs">
                <button class="trading-tab-btn ${currentTradingTab === 'market' ? 'active' : ''}" onclick="renderTradingDesk('market')">📊 Mercado de Ações</button>
                <button class="trading-tab-btn ${currentTradingTab === 'portfolio' ? 'active' : ''}" onclick="renderTradingDesk('portfolio')">💼 Minha Carteira</button>
                <button class="trading-tab-btn ${currentTradingTab === 'history' ? 'active' : ''}" onclick="renderTradingDesk('history')">📜 Histórico de Ordens</button>
            </div>
            <div style="display: flex; gap: 6px; align-items: center;">
                <div style="font-family: var(--font-mono); font-size: 0.74rem; color: #00df81; background: #001f0f; border: 1px solid #00df81; padding: 3px 8px; border-radius: 2px;">
                    🟢 Faceit Feed Ativo (Auto)
                </div>
            </div>
        </div>
        ${tabContentHtml}
    `;
}

function openTradeModal(ticker, mode) {
    const stock = ATHLETE_STOCKS.find(s => s.ticker === ticker);
    if (!stock) return;

    const ownedShares = USER_TRADING_ACCOUNT.portfolio[ticker]?.shares || 0;
    const isBuy = mode === 'BUY';
    const maxShares = isBuy ? Math.floor(USER_TRADING_ACCOUNT.balance / stock.price) : ownedShares;

    let modal = document.getElementById('tradeModal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'tradeModal';
    modal.className = 'trade-modal-overlay';
    modal.innerHTML = `
        <div class="trade-modal-box">
            <div class="win95-titlebar" style="margin-bottom: 6px;">
                <div class="titlebar-left">
                    <img src="icons/trading.svg" class="titlebar-icon">
                    <span>${isBuy ? 'Comprar' : 'Vender'} Ação — $${stock.ticker}</span>
                </div>
                <div class="titlebar-controls">
                    <button class="win-btn close-btn" onclick="closeTradeModal()">✕</button>
                </div>
            </div>
            <div style="background: #0d121d; padding: 1rem; color: #ffffff; border: 2px solid; border-color: #808080 #ffffff #ffffff #808080;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.85rem; padding-bottom: 0.75rem; border-bottom: 1px solid #1e293b;">
                    <img src="${stock.photo}" style="width: 42px; height: 42px; border: 1px solid #00df81; border-radius: 2px;">
                    <div>
                        <strong style="color: #ffffff; font-size: 1.05rem;">$${stock.ticker}</strong>
                        <div style="font-size: 0.75rem; color: #94a3b8;">${stock.name} · ${stock.role}</div>
                        <div style="font-size: 0.78rem; color: var(--accent); font-weight: 700;">Cotação: ${stock.price.toFixed(2)} pts</div>
                    </div>
                </div>

                <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <span>${isBuy ? 'Saldo Disponível:' : 'Ações em Carteira:'}</span>
                    <strong style="color: #ffffff;">${isBuy ? USER_TRADING_ACCOUNT.balance.toFixed(2) + ' pts' : ownedShares + ' ações'}</strong>
                </div>

                <div style="margin-bottom: 0.85rem;">
                    <label style="font-size: 0.75rem; display: block; margin-bottom: 0.35rem; color: #cbd5e1;">Quantidade de Ações:</label>
                    <div style="display: flex; gap: 4px;">
                        <input type="number" id="tradeShareQty" class="retro-input" style="flex: 1;" value="1" min="1" max="${Math.max(1, maxShares)}" oninput="updateTradeTotal('${stock.price}')">
                        <button class="retro-btn" style="padding: 4px 8px;" onclick="setTradePreset(0.25, ${maxShares}, '${stock.price}')">25%</button>
                        <button class="retro-btn" style="padding: 4px 8px;" onclick="setTradePreset(0.50, ${maxShares}, '${stock.price}')">50%</button>
                        <button class="retro-btn" style="padding: 4px 8px;" onclick="setTradePreset(1.00, ${maxShares}, '${stock.price}')">MAX</button>
                    </div>
                </div>

                <div style="background: #000000; padding: 0.65rem; border: 1px solid #334155; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.78rem; color: #94a3b8;">Valor Total da Ordem:</span>
                    <strong id="tradeTotalDisplay" style="color: #00f0ff; font-family: var(--font-mono); font-size: 1.15rem;">${stock.price.toFixed(2)} pts</strong>
                </div>

                <div style="display: flex; gap: 6px;">
                    <button class="retro-btn" style="flex: 1;" onclick="closeTradeModal()">Cancelar</button>
                    <button class="${isBuy ? 'retro-btn-accent' : 'trade-btn-sell'}" style="flex: 2; padding: 6px 12px; font-weight: 800;" onclick="confirmTrade('${stock.ticker}', '${mode}')">
                        ${isBuy ? 'Confirmar Compra' : 'Confirmar Venda'}
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateTradeTotal(priceStr) {
    const qty = parseInt(document.getElementById('tradeShareQty').value) || 0;
    const price = parseFloat(priceStr);
    const total = qty * price;
    const disp = document.getElementById('tradeTotalDisplay');
    if (disp) disp.innerText = `${total.toFixed(2)} pts`;
}

function setTradePreset(pct, maxShares, priceStr) {
    const qty = Math.max(1, Math.floor(maxShares * pct));
    const input = document.getElementById('tradeShareQty');
    if (input) {
        input.value = qty;
        updateTradeTotal(priceStr);
    }
}

function closeTradeModal() {
    const modal = document.getElementById('tradeModal');
    if (modal) modal.remove();
}

function confirmTrade(ticker, mode) {
    const stock = ATHLETE_STOCKS.find(s => s.ticker === ticker);
    if (!stock) return;

    const input = document.getElementById('tradeShareQty');
    const shares = parseInt(input ? input.value : 1) || 0;

    if (shares <= 0) {
        showToast('Indica uma quantidade válida de ações!');
        return;
    }

    const totalCost = shares * stock.price;

    if (mode === 'BUY') {
        if (USER_TRADING_ACCOUNT.balance < totalCost) {
            showToast('❌ Saldo insuficiente para esta compra!');
            return;
        }

        USER_TRADING_ACCOUNT.balance -= totalCost;

        if (!USER_TRADING_ACCOUNT.portfolio[ticker]) {
            USER_TRADING_ACCOUNT.portfolio[ticker] = { shares: 0, totalCost: 0 };
        }

        USER_TRADING_ACCOUNT.portfolio[ticker].shares += shares;
        USER_TRADING_ACCOUNT.portfolio[ticker].totalCost += totalCost;

        USER_TRADING_ACCOUNT.history.unshift({
            id: Date.now(),
            type: 'BUY',
            ticker: ticker,
            shares: shares,
            price: stock.price,
            total: totalCost,
            date: new Date().toLocaleTimeString('pt-PT') + ' ' + new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })
        });

        showToast(`✅ Compradas ${shares}x $${ticker} por ${totalCost.toFixed(2)} pts!`);
        playRetroSound('cash');
    } else {
        const currentPos = USER_TRADING_ACCOUNT.portfolio[ticker];
        if (!currentPos || currentPos.shares < shares) {
            showToast('❌ Não possuis ações suficientes para vender!');
            return;
        }

        const avgCostPerShare = currentPos.totalCost / currentPos.shares;
        currentPos.shares -= shares;
        currentPos.totalCost -= (shares * avgCostPerShare);

        USER_TRADING_ACCOUNT.balance += totalCost;

        USER_TRADING_ACCOUNT.history.unshift({
            id: Date.now(),
            type: 'SELL',
            ticker: ticker,
            shares: shares,
            price: stock.price,
            total: totalCost,
            date: new Date().toLocaleTimeString('pt-PT') + ' ' + new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })
        });

        showToast(`💰 Vendidas ${shares}x $${ticker} por ${totalCost.toFixed(2)} pts!`);
        playRetroSound('cash');
    }

    saveTradingData();
    closeTradeModal();
    renderTradingDesk();
}

// ====================================================================
// 🌌 AMBIENT PARTICLE BACKGROUND & WALLPAPER SYSTEM
// ====================================================================
const WALLPAPERS = [
    'imagens/win_xp_bliss.jpg',
    'imagens/win95_clouds.jpg',
    'imagens/win95_teal_logo.jpg',
    'imagens/novamato_95_wallpaper.jpg'
];

let currentWallpaperIndex = 0;

function initWallpaper() {
    const saved = localStorage.getItem('novamato_wallpaper');
    if (saved && WALLPAPERS.includes(saved)) {
        currentWallpaperIndex = WALLPAPERS.indexOf(saved);
        document.body.style.backgroundImage = `url('${saved}')`;
    } else {
        currentWallpaperIndex = 0;
        document.body.style.backgroundImage = `url('${WALLPAPERS[0]}')`;
        localStorage.setItem('novamato_wallpaper', WALLPAPERS[0]);
    }
}

function cycleWallpaper() {
    currentWallpaperIndex = (currentWallpaperIndex + 1) % WALLPAPERS.length;
    const nextWp = WALLPAPERS[currentWallpaperIndex];
    document.body.style.backgroundImage = `url('${nextWp}')`;
    localStorage.setItem('novamato_wallpaper', nextWp);
    showToast(`🎨 Fundo alterado: [${currentWallpaperIndex + 1}/${WALLPAPERS.length}]`);
    playRetroSound('click');
}

function initBgCanvas() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 35), 50);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            // Draw particle
            ctx.fillStyle = `rgba(0, 223, 129, ${p.alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00df81';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < 110) {
                    ctx.strokeStyle = `rgba(0, 223, 129, ${0.18 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Mouse proximity line
            if (mouse.x !== null && mouse.y !== null) {
                const mdx = p.x - mouse.x;
                const mdy = p.y - mouse.y;
                const mDist = Math.hypot(mdx, mdy);
                if (mDist < 130) {
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.35 * (1 - mDist / 130)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initWallpaper();
    initBgCanvas();
    initClock();
    renderTopPlayer();
    renderCS2Grid();
    renderAttendanceHub();
    renderMatchResults();
    renderCapsLeaderboard();
    renderClashGrid();
    renderHighlightVideo();
    renderAdminVaultBody();
    renderTradingDesk();

    // Iniciar contagem decrescente do evento em direto
    updateCountdown();
    if (typeof countdownInterval !== 'undefined') clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);

    // Iniciar Sincronização Automática Faceit em Segundo Plano
    syncFaceitData(false);
    setInterval(() => syncFaceitData(false), 20000);

    // Abrir janelas principais por padrão
    openWindow('winCS2');
    openWindow('winCheckin');

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            openWindow('winAdmin');
        }
    });

    // 📡 Listener entre abas: se alguém criar/atualizar um evento noutra janela, faz popup nesta também
    window.addEventListener('storage', (e) => {
        if (e.key === 'novamato_custom_event' && e.newValue) {
            try {
                const parsed = JSON.parse(e.newValue);
                COMPETITIVE_EVENT = parsed;
                renderAttendanceHub();
                showEventCreatedPopup(parsed, true);
            } catch (err) {}
        }
    });
});


