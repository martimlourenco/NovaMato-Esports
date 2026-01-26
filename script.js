// Novamato Esports - Multi-Page JavaScript
// Ultra-minimalist design with complex functionality

// Configuration
const CONFIG = {
    apiTimeout: 10000,
    animationDuration: 300,
    cacheExpiry: 30 * 60 * 1000 // 30 minutos de cache
};

// Cache global para dados dos jogadores
const playerDataCache = new Map();

// Função para obter do localStorage com expiração
function getCachedData(key) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < CONFIG.cacheExpiry) {
                return data;
            }
            localStorage.removeItem(key);
        }
    } catch (e) {}
    return null;
}

// Função para guardar no localStorage
function setCachedData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (e) {}
}

// Mock player data - Replace with real API calls
const PLAYERS_DATA = {
    cs2: [
        { id: 1, name: 'White', steamId64: '76561198882548515', role: 'Ainda por preencher' },
        { id: 2, name: 'Migggal', customUrl: 'migggal', role: 'Ainda por preencher' },
        { id: 3, name: 'Player3', steamId64: '76561199049671771', role: 'Ainda por preencher' },
        { id: 4, name: 'Freeza', customUrl: 'freezapqvcmatouokuririn', role: 'Ainda por preencher' },
        { id: 5, name: 'Player5', steamId64: '76561198843083161', role: 'Ainda por preencher' },
        { id: 6, name: 'Player6', steamId64: '76561199132612024', role: 'Ainda por preencher' },
        { id: 7, name: 'Player7', steamId64: '76561199053161311', role: 'Ainda por preencher' },
        { id: 8, name: 'Player8', steamId64: '76561199082165295', role: 'Ainda por preencher' },
        { id: 9, name: 'Player9', steamId64: '76561198183764933', role: 'Ainda por preencher' },
        { id: 10, name: 'Tomas', customUrl: 'tomas1437', role: 'Ainda por preencher' },
        { id: 11, name: 'Player11', steamId64: '76561199207194374', role: 'Ainda por preencher' },
        { id: 12, name: 'Narcigod', customUrl: 'narcigod', role: 'Ainda por preencher' }
    ],
    clashRoyale: [
        { id: 1, name: 'mr.white', tag: '#28G9G2P9Y', role: 'Líder', trophies: '+10k' },
        { id: 2, name: 'piquele', tag: '#22C0YC80P', role: 'Co-Líder', trophies: '+10k' },
        { id: 3, name: 'RICARDO;-) :-P', tag: '#JUC89G', role: 'Co-Líder', trophies: '+10k' },
        { id: 4, name: 'optrista_CG', tag: '#C88YUVP98', role: 'Co-Líder', trophies: '+10k' },
        { id: 5, name: '/Pedro/', tag: '#2ULQYRQP', role: 'Membro', trophies: '+10k' },
        { id: 6, name: 'CØSTA', tag: '#GRQCURJP', role: 'Co-Líder', trophies: '+10k' },
        { id: 7, name: '✌MIGUEL✌', tag: '#8LJU8JL', role: 'traidor', trophies: '+10k' }
    ]
};

// Utility Functions
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target) + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current) + suffix;
        }
    }, 16);
}

// API Integration Functions

// Resolve Steam vanity URL to SteamID64 (com cache)
async function resolveSteamVanityUrl(vanityUrl) {
    const cacheKey = `vanity_${vanityUrl}`;
    const cached = getCachedData(cacheKey);
    if (cached) return cached;
    
    const STEAM_API_KEY = 'BCC8D3D17725838608B428899CFE37B3';
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
    
    try {
        const apiUrl = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${STEAM_API_KEY}&vanityurl=${vanityUrl}`;
        const response = await fetch(CORS_PROXY + encodeURIComponent(apiUrl));
        const data = await response.json();
        
        if (data.response && data.response.success === 1) {
            setCachedData(cacheKey, data.response.steamid);
            return data.response.steamid;
        }
        return null;
    } catch (error) {
        console.error('Error resolving vanity URL:', error);
        return null;
    }
}

// Steam API (para CS2 stats) - com cache
async function fetchSteamPlayerData(playerId) {
    // Verificar cache em memória primeiro
    if (playerDataCache.has(playerId)) {
        return playerDataCache.get(playerId);
    }
    
    // Verificar cache localStorage
    const cacheKey = `player_${playerId}`;
    const cached = getCachedData(cacheKey);
    if (cached) {
        playerDataCache.set(playerId, cached);
        return cached;
    }
    
    const STEAM_API_KEY = 'BCC8D3D17725838608B428899CFE37B3';
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
    
    try {
        const player = PLAYERS_DATA.cs2.find(p => p.id === playerId);
        if (!player) return null;
        
        // Resolve custom URL se necessário
        let steamId64 = player.steamId64;
        if (!steamId64 && player.customUrl) {
            steamId64 = await resolveSteamVanityUrl(player.customUrl);
            if (!steamId64) {
                return player;
            }
        }
        
        if (!steamId64) return player;
        
        // Buscar apenas avatar e nome da Steam
        const steamApiUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId64}`;
        const steamResponse = await fetch(CORS_PROXY + encodeURIComponent(steamApiUrl));
        
        if (!steamResponse.ok) {
            const result = { ...player, steamId64, trackerUrl: `https://tracker.gg/cs2/profile/steam/${steamId64}/overview?playlist=premier&season=3` };
            playerDataCache.set(playerId, result);
            return result;
        }
        
        const steamData = await steamResponse.json();
        
        if (steamData.response && steamData.response.players.length > 0) {
            const steamPlayer = steamData.response.players[0];
            const result = {
                ...player,
                steamId64,
                name: steamPlayer.personaname,
                avatar: steamPlayer.avatarfull,
                steamUrl: steamPlayer.profileurl,
                trackerUrl: `https://tracker.gg/cs2/profile/steam/${steamId64}/overview?playlist=premier&season=3`
            };
            playerDataCache.set(playerId, result);
            setCachedData(cacheKey, result);
            return result;
        }
        
        const result = { ...player, steamId64, trackerUrl: `https://tracker.gg/cs2/profile/steam/${steamId64}/overview?playlist=premier&season=3` };
        playerDataCache.set(playerId, result);
        return result;
        
    } catch (error) {
        console.error(`Steam API error for player ${playerId}:`, error);
        const player = PLAYERS_DATA.cs2.find(p => p.id === playerId);
        const steamId64 = player?.steamId64;
        const result = player ? { 
            ...player, 
            steamId64,
            trackerUrl: steamId64 ? `https://tracker.gg/cs2/profile/steam/${steamId64}/overview?playlist=premier&season=3` : undefined 
        } : null;
        if (result) playerDataCache.set(playerId, result);
        return result;
    }
}

// Pré-carregar todos os jogadores em paralelo
async function preloadAllPlayers() {
    const promises = PLAYERS_DATA.cs2.map(player => fetchSteamPlayerData(player.id));
    await Promise.all(promises);
}

// Clash Royale API - Usando API oficial com proxy CORS
async function fetchClashRoyalePlayerData(playerTag) {
    // OPÇÃO 1: API Oficial (mais confiável mas precisa de token)
    // 1. Vai a https://developer.clashroyale.com/
    // 2. Cria conta e API key
    // 3. Adiciona teu IP (ou usa proxy abaixo)
    
    const API_TOKEN = 'c76df929';
    
    // OPÇÃO 2: Usar proxy CORS público (funciona sem token mas menos confiável)
    const USE_PROXY = false; // Token próprio ativo!
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
    
    try {
        const cleanTag = playerTag.replace('#', '');
        const encodedTag = encodeURIComponent('#' + cleanTag);
        const apiUrl = `https://api.clashroyale.com/v1/players/${encodedTag}`;
        
        let response;
        
        if (USE_PROXY) {
            // Usar proxy público (não precisa de token)
            response = await fetch(CORS_PROXY + encodeURIComponent(apiUrl));
        } else {
            // Usar API direta (precisa de token válido)
            response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`,
                    'Accept': 'application/json'
                }
            });
        }
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        return {
            id: data.tag,
            name: data.name,
            tag: data.tag,
            trophies: data.trophies,
            wins: data.wins,
            losses: data.losses,
            level: data.expLevel,
            clan: data.clan ? data.clan.name : 'No Clan'
        };
        
    } catch (error) {
        console.error('Clash Royale API error:', error);
        
        // Fallback para mock data
        const player = PLAYERS_DATA.clashRoyale.find(p => p.tag === playerTag);
        return player || null;
    }
}

// Homepage Functions
function initHomepage() {
    // Animate stat counters
    const statElements = document.querySelectorAll('.stat-value-home');
    
    if (statElements.length === 0) return;
    
    // Animar imediatamente quando carrega
    statElements.forEach(el => {
        const targetValue = parseInt(el.getAttribute('data-count')) || parseInt(el.textContent);
        
        if (targetValue && targetValue > 0) {
            el.textContent = '0'; // Reset to 0
            animateCounter(el, targetValue, '');
        }
    });
}

// CS2 Page Functions
async function initCS2Page() {
    const slotsContainer = document.querySelector('[data-player-slots]');
    const modal = document.querySelector('[data-player-modal]');
    const modalBody = document.querySelector('[data-modal-body]');
    const closeBtn = document.querySelector('[data-modal-close]');
    
    if (!slotsContainer || !modal || !modalBody) return;
    
    // Mostrar estado de carregamento inicial
    slotsContainer.innerHTML = '<div class="loading-players" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">A carregar jogadores...</div>';
    
    // Pré-carregar TODOS os jogadores em paralelo (muito mais rápido!)
    await preloadAllPlayers();
    
    // Agora gerar slots com dados já em cache
    slotsContainer.innerHTML = '';
    
    PLAYERS_DATA.cs2.forEach(player => {
        const cachedData = playerDataCache.get(player.id);
        const displayName = cachedData?.name || player.name;
        const avatarStyle = cachedData?.avatar 
            ? `background-image: url('${cachedData.avatar}'); background-size: cover; background-position: center;`
            : 'background: var(--color-surface);';
        const avatarText = cachedData?.avatar ? '' : player.name.charAt(0).toUpperCase();
        
        const slotHtml = `
            <div class="player-slot" data-player-id="${player.id}">
                <div class="player-slot-icon" style="${avatarStyle}">
                    ${avatarText}
                </div>
                <div class="player-slot-name">${displayName}</div>
                <div class="player-slot-role">${player.role}</div>
                <div class="player-slot-status">Click for stats</div>
            </div>
        `;
        slotsContainer.insertAdjacentHTML('beforeend', slotHtml);
    });
    
    // Add click handlers
    slotsContainer.querySelectorAll('.player-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const playerId = parseInt(slot.dataset.playerId);
            
            // Dados já estão em cache - mostra instantaneamente!
            const playerData = playerDataCache.get(playerId);
            
            if (playerData) {
                const steamUrl = playerData.steamUrl || `https://steamcommunity.com/profiles/${playerData.steamId64}`;
                const avatarUrl = playerData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(playerData.name)}&size=200&background=00ff00&color=000`;
                const trackerUrl = playerData.trackerUrl || `https://tracker.gg/cs2/profile/steam/${playerData.steamId64}/overview?playlist=premier&season=3`;
                
                modalBody.innerHTML = `
                    <div class="player-header">
                        <div style="display: flex; gap: var(--spacing-md); align-items: center; margin-bottom: var(--spacing-lg);">
                            <img src="${avatarUrl}" alt="${playerData.name}" style="width: 100px; height: 100px; border: 2px solid var(--color-accent); border-radius: 50%;" onerror="this.style.display='none'">
                            <div>
                                <div class="player-name-large">${playerData.name}</div>
                                <div style="color: var(--color-text-secondary); margin-top: 0.5rem; font-size: 1.1rem;">${playerData.role}</div>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-sm); margin-bottom: var(--spacing-lg);">
                            <a href="${trackerUrl}" target="_blank" style="padding: var(--spacing-md); border: 1px solid var(--color-accent); background: var(--color-surface); color: var(--color-text); text-decoration: none; text-align: center; transition: all 0.2s; font-size: 0.9rem;" onmouseover="this.style.background='var(--color-accent)'; this.style.color='var(--color-bg)';" onmouseout="this.style.background='var(--color-surface)'; this.style.color='var(--color-text)';">
                                → Tracker.gg
                            </a>
                            <a href="${steamUrl}" target="_blank" style="padding: var(--spacing-md); border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); text-decoration: none; text-align: center; transition: all 0.2s; font-size: 0.9rem;" onmouseover="this.style.borderColor='var(--color-accent)';" onmouseout="this.style.borderColor='var(--color-border)';">
                                → Steam Profile
                            </a>
                        </div>
                    </div>
                `;
                modal.classList.add('active');
            } else {
                modalBody.innerHTML = '<div class="error">Failed to load player data</div>';
                modal.classList.add('active');
            }
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Open player profile from highlight section
function openPlayerProfile(playerName) {
    const modal = document.querySelector('[data-player-modal]');
    const modalBody = document.querySelector('[data-modal-body]');
    
    if (!modal || !modalBody) return;
    
    // Find player by name
    const player = PLAYERS_DATA.cs2.find(p => p.name.toLowerCase() === playerName.toLowerCase());
    
    if (player) {
        // Dados já em cache - mostra instantaneamente
        const playerData = playerDataCache.get(player.id);
        
        if (playerData) {
            const steamUrl = playerData.steamUrl || `https://steamcommunity.com/profiles/${playerData.steamId64}`;
            const avatarUrl = playerData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(playerData.name)}&size=200&background=00ff00&color=000`;
            const trackerUrl = playerData.trackerUrl || `https://tracker.gg/cs2/profile/steam/${playerData.steamId64}/overview?playlist=premier&season=3`;
            
            modalBody.innerHTML = `
                <div class="player-detail">
                    <div class="player-avatar-large" style="background-image: url('${avatarUrl}'); background-size: cover; background-position: center;"></div>
                    <div class="player-name-large">${playerData.name}</div>
                    <div class="player-role-large">${player.role}</div>
                    
                    <div class="external-links">
                        <a href="${steamUrl}" target="_blank" class="external-link">
                            <span class="link-icon">🎮</span>
                            <span>Steam Profile</span>
                        </a>
                        <a href="${trackerUrl}" target="_blank" class="external-link">
                            <span class="link-icon">📊</span>
                            <span>CS2 Tracker</span>
                        </a>
                    </div>
                </div>
            `;
            modal.classList.add('active');
        } else {
            modalBody.innerHTML = '<div class="error">Failed to load player data</div>';
            modal.classList.add('active');
        }
    }
}

// Clash Royale Page Functions
function initClashRoyalePage() {
    const slotsContainer = document.querySelector('[data-cr-slots]');
    const modal = document.querySelector('[data-cr-modal]');
    const modalBody = document.querySelector('[data-cr-modal-body]');
    const closeBtn = document.querySelector('[data-cr-modal-close]');
    
    if (!slotsContainer || !modal || !modalBody) return;
    
    // Generate player slots
    const playerSlots = PLAYERS_DATA.clashRoyale.map(player => {
        return `
            <div class="player-slot" data-player-id="${player.id}">
                <div class="player-slot-icon">CR</div>
                <div class="player-slot-name">${player.name}</div>
                <div class="player-slot-role">${player.role}</div>
                <div class="player-slot-status">Ver Stats</div>
            </div>
        `;
    }).join('');
    
    // Add mystery slot
    const mysterySlot = `
        <div class="player-slot mystery-slot" style="opacity: 0.5; cursor: default;">
            <div class="player-slot-icon">?</div>
            <div class="player-slot-name">???</div>
            <div class="player-slot-role" style="font-size: 0.85rem;">quem será o próximo a chegar aos 10k?</div>
            <div class="player-slot-status">Em Breve...</div>
        </div>
    `;
    
    slotsContainer.innerHTML = playerSlots + mysterySlot;
    
    // Add click handlers (excluding mystery slot)
    slotsContainer.querySelectorAll('.player-slot:not(.mystery-slot)').forEach(slot => {
        slot.addEventListener('click', async () => {
            const playerId = parseInt(slot.dataset.playerId);
            const player = PLAYERS_DATA.clashRoyale.find(p => p.id === playerId);
            
            if (!player) return;
            
            // Remover o # da tag para o URL
            const tagForUrl = player.tag.replace('#', '');
            const statsUrl = `https://statsroyale.com/profile/${tagForUrl}`;
            
            // Show stats info
            modalBody.innerHTML = `
                <div class="player-header">
                    <div class="player-name-large">${player.name}</div>
                    <div class="player-info-grid">
                        <div class="player-info-item">
                            <div class="player-info-label">Player Tag</div>
                            <div class="player-info-value">${player.tag}</div>
                        </div>
                        <div class="player-info-item">
                            <div class="player-info-label">Role</div>
                            <div class="player-info-value">${player.role}</div>
                        </div>
                        <div class="player-info-item">
                            <div class="player-info-label">Troféus</div>
                            <div class="player-info-value">${player.trophies}</div>
                        </div>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item" style="grid-column: 1 / -1;">
                        <a href="${statsUrl}" target="_blank" rel="noopener noreferrer" 
                           style="display: block; padding: 1rem; background: rgba(0, 255, 0, 0.1); 
                                  border: 1px solid var(--color-accent); border-radius: 2px; 
                                  color: var(--color-accent); text-decoration: none; text-align: center;
                                  transition: all 0.2s ease;">
                            📊 Ver Estatísticas Completas no StatsRoyale →
                        </a>
                    </div>
                </div>
            `;
            
            modal.classList.add('active');
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Minecraft Page Functions
function initMinecraftPage() {
    // Animate progress bar
    const progressFill = document.querySelector('.project-progress-fill');
    
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '85%';
        }, 300);
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Detect current page
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    
    if (!filename || filename === 'index.html') {
        initHomepage();
    } else if (filename === 'cs2.html') {
        initCS2Page();
    } else if (filename === 'clash-royale.html') {
        initClashRoyalePage();
    } else if (filename === 'minecraft.html') {
        initMinecraftPage();
    }
});
