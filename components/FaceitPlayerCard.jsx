import React, { useState, useEffect } from 'react';

// Configuração visual de cores e limites de Elo para os níveis FACEIT (1 a 10)
const LEVEL_CONFIG = {
  1: { label: '1', color: 'text-gray-300', bg: 'bg-gray-800', border: 'border-gray-600', ring: 'ring-gray-500/20', minElo: 1, maxElo: 800 },
  2: { label: '2', color: 'text-emerald-400', bg: 'bg-emerald-950/80', border: 'border-emerald-600', ring: 'ring-emerald-500/20', minElo: 801, maxElo: 950 },
  3: { label: '3', color: 'text-emerald-400', bg: 'bg-emerald-950/80', border: 'border-emerald-600', ring: 'ring-emerald-500/20', minElo: 951, maxElo: 1100 },
  4: { label: '4', color: 'text-yellow-400', bg: 'bg-yellow-950/80', border: 'border-yellow-600', ring: 'ring-yellow-500/20', minElo: 1101, maxElo: 1250 },
  5: { label: '5', color: 'text-yellow-400', bg: 'bg-yellow-950/80', border: 'border-yellow-600', ring: 'ring-yellow-500/20', minElo: 1251, maxElo: 1400 },
  6: { label: '6', color: 'text-yellow-400', bg: 'bg-yellow-950/80', border: 'border-yellow-600', ring: 'ring-yellow-500/20', minElo: 1401, maxElo: 1550 },
  7: { label: '7', color: 'text-yellow-400', bg: 'bg-yellow-950/80', border: 'border-yellow-600', ring: 'ring-yellow-500/20', minElo: 1551, maxElo: 1700 },
  8: { label: '8', color: 'text-orange-400', bg: 'bg-orange-950/80', border: 'border-orange-600', ring: 'ring-orange-500/20', minElo: 1701, maxElo: 1850 },
  9: { label: '9', color: 'text-orange-400', bg: 'bg-orange-950/80', border: 'border-orange-600', ring: 'ring-orange-500/20', minElo: 1851, maxElo: 2000 },
  10: { label: '10', color: 'text-red-500', bg: 'bg-red-950/90', border: 'border-red-600', ring: 'ring-red-500/30', minElo: 2001, maxElo: 3500 },
};

export default function FaceitPlayerCard({ nickname = 'jotapfiche', apiUrl = '/api/player' }) {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlayerData = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = `${apiUrl}?nickname=${encodeURIComponent(nickname)}`;
      const res = await fetch(endpoint);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Erro ${res.status}: Não foi possível carregar dados da FACEIT`);
      }

      setPlayer(data);
    } catch (err) {
      console.error('Erro ao obter jogador:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayerData();
  }, [nickname]);

  const levelInfo = player ? (LEVEL_CONFIG[player.skill_level] || LEVEL_CONFIG[1]) : LEVEL_CONFIG[1];

  // Cálculo da percentagem de progresso de Elo no nível atual
  const progressPercent = player
    ? Math.min(
        100,
        Math.max(
          0,
          ((player.faceit_elo - levelInfo.minElo) / (levelInfo.maxElo - levelInfo.minElo)) * 100
        )
      )
    : 0;

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-zinc-800/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-orange-500/10">
      {/* Luz ambiente de fundo (Glow) */}
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header com Badge da FACEIT, VNDL e CS2 */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          {/* VNDL Brand Tag */}
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black text-[11px] tracking-widest font-mono shadow-sm">
            VNDL
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            CS2 Tracker
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-[11px] font-semibold text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Stats
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="p-6">
        {loading ? (
          // Skeleton Loading
          <div className="space-y-4 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-zinc-800" />
              <div className="space-y-2 flex-1">
                <div className="h-5 bg-zinc-800 rounded w-1/2" />
                <div className="h-3.5 bg-zinc-800/60 rounded w-1/3" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-20 bg-zinc-800/60 rounded-xl" />
              <div className="h-20 bg-zinc-800/60 rounded-xl" />
            </div>
          </div>
        ) : error ? (
          // Mensagem de Erro
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/40 text-center">
            <p className="text-sm font-semibold text-red-400 mb-2">Erro ao carregar dados</p>
            <p className="text-xs text-red-300/80 mb-3">{error}</p>
            <button
              onClick={fetchPlayerData}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-red-600/80 hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
            >
              Tentar Novamente
            </button>
          </div>
        ) : player ? (
          // Dados do Jogador Carregados
          <div>
            {/* Perfil & Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src={player.avatar}
                  alt={player.nickname}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-zinc-700/80 shadow-md bg-zinc-800"
                />
                {player.country && (
                  <span className="absolute -bottom-1 -right-1 text-xs px-1 py-0.5 rounded bg-zinc-900 border border-zinc-700 font-mono uppercase text-[10px] text-zinc-300">
                    {player.country}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-extrabold text-white truncate tracking-tight">
                  {player.nickname}
                </h3>
                <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <span>Counter-Strike 2</span>
                  <span>·</span>
                  <span className="text-orange-400 font-medium">Oficial FACEIT</span>
                </p>
              </div>
            </div>

            {/* Grid com Destaque para Nível e ELO */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Card Nível FACEIT */}
              <div
                className={`relative overflow-hidden p-4 rounded-xl border ${levelInfo.bg} ${levelInfo.border} shadow-inner flex flex-col items-center justify-center text-center`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Nível FACEIT
                </span>
                <div className="flex items-center gap-1.5 my-0.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-xl border shadow-lg ${levelInfo.color} ${levelInfo.border} bg-black/40`}
                  >
                    {player.skill_level}
                  </div>
                </div>
                <span className={`text-[10px] font-semibold mt-1 ${levelInfo.color}`}>
                  {player.skill_level === 10 ? 'Nível Máximo' : `Nível ${player.skill_level}`}
                </span>
              </div>

              {/* Card ELO */}
              <div className="p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/60 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  FACEIT ELO
                </span>
                <span className="text-2xl font-black text-white tracking-tight font-mono">
                  {player.faceit_elo.toLocaleString()}
                </span>
                <span className="text-[10px] font-semibold text-zinc-400 mt-1">
                  Pontos ELO CS2
                </span>
              </div>
            </div>

            {/* Barra de Progresso de ELO até ao Próximo Nível */}
            {player.skill_level < 10 && (
              <div className="mb-5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex justify-between text-[11px] font-medium text-zinc-400 mb-1.5">
                  <span>Progresso do Nível {player.skill_level}</span>
                  <span className="text-zinc-200 font-mono font-bold">
                    {player.faceit_elo} / {levelInfo.maxElo} ELO
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Ações & Link FACEIT */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={player.faceit_url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs text-center shadow-lg shadow-orange-500/20 transition-all duration-200 cursor-pointer"
              >
                Ver Perfil na FACEIT →
              </a>
              <button
                onClick={fetchPlayerData}
                title="Atualizar Estatísticas"
                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>

            {/* Corner Watermark */}
            <div className="mt-4 pt-3 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>CS2 OFFICIAL MATRIX</span>
              <span className="font-black tracking-widest text-emerald-400/80">BRAND: VNDL</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
