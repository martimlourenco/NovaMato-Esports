# Como Usar APIs Reais - Novamato

## 🎮 Clash Royale API (FÁCIL - Recomendado começar por aqui)

### Passo 1: Obter Token
1. Vai a **https://developer.clashroyale.com/**
2. Clica em "Sign In" e faz login com email
3. Aceita os termos de serviço
4. No dashboard, clica em "Create New Key"
5. Preenche:
   - **Name**: Novamato Website
   - **Description**: Website stats
   - **IP Address**: O teu IP público (descobre em https://whatismyipaddress.com/)
6. Copia o token que aparece (guarda bem!)

### Passo 2: Testar Localmente
1. Abre `script.js`
2. Na função `fetchClashRoyalePlayerData`, linha ~70
3. Substitui `'COLOCA_TEU_TOKEN_AQUI'` pelo teu token
4. Abre o site localmente
5. Clica num jogador de Clash Royale - deve funcionar!

### Passo 3: Deploy no GitHub Pages (Problema CORS)
**Problema**: GitHub Pages = frontend puro, browsers bloqueiam chamadas diretas à API

**Soluções**:

#### Opção A: Cloudflare Worker (GRÁTIS - Recomendado)
```javascript
// Cria um worker em https://workers.cloudflare.com/
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const playerTag = url.searchParams.get('tag')
  
  const apiResponse = await fetch(
    `https://api.clashroyale.com/v1/players/${encodeURIComponent(playerTag)}`,
    {
      headers: {
        'Authorization': 'Bearer TEU_TOKEN_AQUI'
      }
    }
  )
  
  const data = await apiResponse.json()
  
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
```

Depois no teu site:
```javascript
const response = await fetch(`https://teu-worker.workers.dev/?tag=${playerTag}`);
```

#### Opção B: Netlify Function
1. Move o site para Netlify (drag & drop)
2. Cria pasta `netlify/functions/clash-royale.js`:
```javascript
exports.handler = async (event) => {
  const playerTag = event.queryStringParameters.tag;
  
  const response = await fetch(
    `https://api.clashroyale.com/v1/players/${encodeURIComponent(playerTag)}`,
    {
      headers: {
        'Authorization': 'Bearer TEU_TOKEN_AQUI'
      }
    }
  );
  
  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
};
```

---

## 🔫 CS2 / Steam API (DIFÍCIL)

### O Problema
A Steam Web API **NÃO TEM** stats de CS2 (kills, deaths, K/D, rank).
Só consegues obter:
- Nome do jogador
- Avatar
- Horas jogadas (aproximado)
- País

### Opção 1: Steam Web API (Info Básica)
1. Obter key: https://steamcommunity.com/dev/apikey
2. Preencher formulário (coloca teu domínio)
3. Copia a key

```javascript
async function fetchSteamBasicInfo(steamId64) {
  const API_KEY = 'TUA_STEAM_KEY';
  
  // Obter info do player
  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId64}`
  );
  
  const data = await response.json();
  return data.response.players[0];
}
```

**NOTA**: Precisas converter SteamID para SteamID64:
- white1209 → vai a https://steamid.io/ → converte para 76561198XXXXXXXXX

### Opção 2: APIs de Terceiros (PAGAS mas com trials grátis)

#### Leetify API
- **Website**: https://leetify.com/
- **Tem**: K/D, Win rate, rank, mapas, armas
- **Preço**: Grátis para uso pessoal com limites
- **Setup**: Criar conta → API key no dashboard

#### Tracker.gg API
- **Website**: https://tracker.gg/
- **Tem**: Stats completas de CS2
- **Preço**: Trial grátis → depois pago
- **API**: https://docs.tracker.gg/

### Opção 3: Scraping (COMPLEXO - Não recomendado)
Fazer scraping do perfil Steam público:
- Requer backend (Node.js + Puppeteer)
- Viola Terms of Service da Steam
- Pode parar de funcionar a qualquer momento

---

## ⚡ Quick Start (5 minutos)

### Para testar AGORA só com Clash Royale:

1. **Obter token Clash Royale**:
   - https://developer.clashroyale.com/
   - Create Key → Adiciona teu IP

2. **Editar script.js** (linha ~70):
   ```javascript
   const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJ...'; // Cola aqui
   ```

3. **Abrir localmente**:
   - Abre `index.html` no browser
   - Clica em Clash Royale
   - Clica num jogador → Deve mostrar dados REAIS!

4. **Para CS2**: Usa os dados mock por agora (kills/deaths/rank)
   - Steam API não tem essas stats
   - Considera usar Leetify ou Tracker.gg mais tarde

---

## 🚀 Deployment

### GitHub Pages (atual)
- ✅ Grátis
- ❌ Precisa proxy para APIs (CORS)
- **Solução**: Cloudflare Worker (gratuito)

### Netlify (alternativa)
- ✅ Grátis
- ✅ Serverless functions incluídas
- ✅ Sem problemas CORS
- **Como**: Drag & drop da pasta no Netlify

### Vercel (alternativa)
- ✅ Grátis
- ✅ Serverless functions
- ✅ Sem CORS issues
- **Como**: `npx vercel` ou UI drag & drop

---

## 📝 Próximos Passos Recomendados

1. **Agora (5 min)**: 
   - Setup Clash Royale API token
   - Testa localmente

2. **Hoje (30 min)**:
   - Cria Cloudflare Worker para proxy
   - Deploy no Cloudflare Workers (grátis)
   - Atualiza script.js para usar o worker

3. **Esta semana**:
   - Regista conta na Leetify
   - Obter API key
   - Adiciona stats reais de CS2

4. **Opcional**:
   - Move de GitHub Pages para Netlify (mais fácil)
   - Adiciona cache para reduzir chamadas API
   - Adiciona loading states melhores

---

## ❓ FAQ

**Q: A API do Clash Royale é grátis?**  
A: Sim! Completamente grátis, sem limites de chamadas.

**Q: Porquê não consigo obter K/D do CS2?**  
A: A Steam não disponibiliza essas stats na API pública.

**Q: Como adiciono mais jogadores?**  
A: Edita o array `PLAYERS_DATA` no `script.js` com os SteamIDs ou tags de Clash Royale.

**Q: O que é CORS?**  
A: Browsers bloqueiam chamadas de sites para outras APIs. Solução: usar um proxy (Cloudflare Worker, etc).

**Q: Posso usar isto comercialmente?**  
A: Clash Royale API: Sim. Steam API: Lê os Terms of Service. APIs terceiras: Depende do plano.

---

Precisa de ajuda? Verifica:
- Clash Royale API Docs: https://developer.clashroyale.com/
- Steam Web API Docs: https://steamcommunity.com/dev
- Cloudflare Workers: https://workers.cloudflare.com/
