// api/player.js
// Serverless Function (Vercel / Next.js / AWS Lambda / Node.js)

export default async function handler(req, res) {
  // Configuração de cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Obter nickname por query param ou predefinido para 'jotapfiche'
  const { nickname = 'jotapfiche' } = req.query || {};
  const apiKey = process.env.FACEIT_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'Configuração em falta: FACEIT_API_KEY não definida nas variáveis de ambiente do servidor.'
    });
  }

  try {
    // Pedido GET seguro à API da FACEIT
    const faceitUrl = `https://open.faceit.com/data/v4/players?nickname=${encodeURIComponent(nickname)}`;
    
    const response = await fetch(faceitUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
        'User-Agent': 'Novamato-Esports-Serverless/1.0'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: `Erro retornado pela API da FACEIT (${response.status})`,
        details: errorData
      });
    }

    const data = await response.json();

    // Extrair faceit_elo e skill_level de dentro de games.cs2
    const cs2Data = data?.games?.cs2 || data?.games?.csgo;

    if (!cs2Data) {
      return res.status(404).json({
        error: `O jogador "${data.nickname}" não possui estatísticas de CS2 na FACEIT.`,
        player: {
          nickname: data.nickname,
          avatar: data.avatar,
          country: data.country
        }
      });
    }

    const faceit_elo = cs2Data.faceit_elo ?? 1000;
    const skill_level = cs2Data.skill_level ?? 1;

    return res.status(200).json({
      nickname: data.nickname,
      player_id: data.player_id,
      avatar: data.avatar || 'https://assets.faceit-cdn.net/avatars/default_avatar.png',
      country: data.country,
      faceit_url: data.faceit_url ? data.faceit_url.replace('{lang}', 'en') : `https://www.faceit.com/en/players/${data.nickname}`,
      game: 'cs2',
      faceit_elo: faceit_elo,
      skill_level: skill_level,
      game_player_name: cs2Data.game_player_name || data.nickname
    });

  } catch (error) {
    console.error('Erro na função serverless da FACEIT:', error);
    return res.status(500).json({
      error: 'Erro interno ao processar o pedido à FACEIT.',
      message: error.message
    });
  }
}
