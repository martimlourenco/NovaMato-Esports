const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
let FACEIT_API_KEY = process.env.FACEIT_API_KEY || '';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.json': 'application/json'
};

function fetchFaceitData(endpoint, apiKey) {
  return new Promise((resolve, reject) => {
    const key = apiKey || FACEIT_API_KEY;
    const headers = { 'User-Agent': 'Novamato-Esports-App/1.0' };
    if (key) headers['Authorization'] = `Bearer ${key}`;

    https.get(`https://open.faceit.com/data/v4${endpoint}`, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          resolve({ error: 'Invalid JSON response from Faceit' });
        }
      });
    }).on('error', err => reject(err));
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Faceit Serverless API endpoint (/api/player & /api/faceit/player)
  if (pathname === '/api/player' || pathname.startsWith('/api/faceit')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-faceit-api-key');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }

    const nickname = parsedUrl.query.nickname || 'jotapfiche';
    const steamId = parsedUrl.query.steamId;
    const customKey = parsedUrl.query.apiKey || req.headers['x-faceit-api-key'] || process.env.FACEIT_API_KEY;

    try {
      const queryParam = steamId ? `game=cs2&game_player_id=${steamId}` : `nickname=${encodeURIComponent(nickname)}`;
      const playerData = await fetchFaceitData(`/players?${queryParam}`, customKey);

      if (playerData.errors || playerData.error) {
        res.writeHead(200); // graceful return
        return res.end(JSON.stringify(playerData));
      }

      // Extract games.cs2 faceit_elo and skill_level
      const cs2Data = playerData?.games?.cs2 || playerData?.games?.csgo;
      const responsePayload = {
        nickname: playerData.nickname || nickname,
        player_id: playerData.player_id,
        avatar: playerData.avatar || 'https://assets.faceit-cdn.net/avatars/default_avatar.png',
        country: playerData.country || 'pt',
        faceit_url: playerData.faceit_url ? playerData.faceit_url.replace('{lang}', 'en') : `https://www.faceit.com/en/players/${playerData.nickname || nickname}`,
        game: 'cs2',
        faceit_elo: cs2Data?.faceit_elo ?? 1000,
        skill_level: cs2Data?.skill_level ?? 1,
        raw_games: playerData.games
      };

      res.writeHead(200);
      return res.end(JSON.stringify(responsePayload));
    } catch (err) {
      res.writeHead(500);
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  // Static files
  let file = pathname === '/' ? '/index.html' : pathname;
  file = file.split('?')[0];
  const filePath = path.join(__dirname, file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mime[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Novamato Server running on http://localhost:${PORT} with Faceit API Proxy`);
});
