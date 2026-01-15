# Copilot Instructions for Novamato

## Project Overview
Novamato Esports team website - Amateur competitive gaming organization established in 2018. Vanilla JavaScript with no build tooling, optimized for GitHub Pages deployment. Ultra-minimalist design (Anduril-inspired) with complex functionality.

## Team Information
- **Founded**: 2018
- **Status**: Amateur competitive team
- **Active Members**: 14 players
- **Main Games**: 
  - Counter-Strike 2 (primary focus)
  - Clash Royale (8 players with 10k+ trophies)
  - Minecraft (custom map development)

## Architecture & Structure

### Core Files
- **index.html** - Single-page application structure
- **script.js** - All JavaScript logic, API integrations
- **styles.css** - Minimalist styling, breathing background effect
- **imagens/** - Image assets directory

### Design Philosophy
- **Visual Minimalism**: Black background, thin borders (1px), single accent color (green #00ff00)
- **Complex Functionality**: Live API data, filtering, search, real-time stats
- **No Backend**: Client-side only, suitable for GitHub Pages
- **Breathing Effect**: Subtle radial gradients that animate to give life without clutter

## External API Integrations

### Clash Royale API
- Official API: https://developer.clashroyale.com
- Requires Bearer token authentication
- Fetches player stats (trophies, wins, losses, win rate)
- **Note**: May need CORS proxy or serverless function for production

### CS2/Steam API (Future)
- Steam Web API for player statistics
- Requires API key from https://steamcommunity.com/dev/apikey
- K/D ratios, hours played, competitive stats

### Current Implementation
- Mock data simulates API responses
- Easy to replace with real API calls
- All data fetching is client-side

## Development Conventions

### JavaScript Patterns
- Modern ES6+ syntax (async/await, arrow functions, template literals)
- API integration functions return promises
- Mock data clearly separated for easy replacement
- DOMContentLoaded wraps all initialization
- Intersection Observer for performance (lazy stat animations)

### CSS Approach
- CSS custom properties for theming
- System fonts (-apple-system, Segoe UI)
- Sticky navigation + sticky filter bar
- 1px borders, minimal shadows, no gradients (except breathing bg)
- Grid layouts with 1px gaps for data tables

### HTML Structure
- Semantic HTML5 elements
- Data attributes for JavaScript hooks: `[data-cs-players]`, `[data-cr-players]`
- Modal overlay system
- Search overlay with live filtering

## Key Features

### Breathing Background
- Radial gradients that pulse (8s animation)
- Positioned off-screen edges
- Opacity 0.3-0.5, subtle green tint
- Creates "alive" feeling without visual clutter

### Dynamic Filtering
- Filter teams by game (CS2, Clash Royale, Minecraft)
- Grid/List view toggle
- Real-time filtering without page reload

### Search System
- Fullscreen overlay
- Live search with indexed data
- ESC key to close
- Searches games, tournaments, players

### Stats Dashboard
- CS2: Individual player K/D ratios, kills, hours
- Clash Royale: Trophy counts, win rates per player
- Minecraft: Project progress bar (85% complete)
- Animated counters on scroll into view

## API Integration Guide

### To Add Real Clash Royale Data
```javascript
// Replace in initClashRoyale()
const API_TOKEN = 'your_token_here';
const response = await fetch(`https://api.clashroyale.com/v1/players/${encodeURIComponent(tag)}`, {
    headers: { 'Authorization': `Bearer ${API_TOKEN}` }
});
const data = await response.json();
```

### CORS Workaround for GitHub Pages
- Use Netlify/Vercel serverless function as proxy
- Or: https://cors-anywhere.herokuapp.com/ (for development only)
- Production: Deploy proxy function on Cloudflare Workers

## Common Tasks

### Adding New Player to CS2 Roster
1. Add to `cs2PlayersData` array in script.js
2. Include `steamId`, `name` fields
3. Stats auto-populate from API/mock

### Adding Clash Royale Player
1. Add player tag to `clashRoyalePlayerTags` array
2. Update mock data or API will fetch automatically

### Updating Project Progress
- Edit `mc-progress-fill` width in HTML
- Change percentage in `mc-progress-label`

## Important Notes
- No npm dependencies - uses native browser APIs
- Deploy to GitHub Pages: push to main branch
- Portuguese UI text acceptable ("Junta-te à equipa")
- Keep visual minimalism - remove before adding
- All animations should be subtle (ease timing, low opacity)

## Performance Considerations
- Intersection Observer for lazy animations
- Debounced search input
- CSS transitions instead of JS animations
- Mock data loads with setTimeout (simulates API latency)

## Future Enhancements
- Real Steam API integration for CS2 stats
- Live Clash Royale API with authentication
- Minecraft server status API
- Tournament bracket system
- Player profile pages

