'use client';

import { useEffect, useState } from 'react';

interface Desejo {
  id: string;
  texto: string;
  link?: string;
  criadoEm: string;
}

export default function VerPedidos() {
  const [desejos, setDesejos] = useState<Desejo[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  async function fetchDesejos() {
    try {
      const res = await fetch('/api/desejos');
      if (!res.ok) throw new Error('Erro ao buscar');
      const data = await res.json();
      setDesejos(data.reverse()); // most recent first
    } catch {
      setErro('Não foi possível carregar a lista. Tenta de novo!');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDesejos();
  }, []);

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <main className="ver-main">
      <div className="ver-vhs-overlay" />

      <div className="ver-container">
        {/* Header */}
        <div className="ver-header">
          <span className="ver-badge">✦ APENAS PARA TI ✦</span>
          <h1 className="ver-title">Pedidos da Patroa</h1>
          <p className="ver-subtitle">
            A lista secreta de desejos da Maria Alice 🎀
          </p>
          <button onClick={fetchDesejos} className="ver-refresh">
            ↻ Atualizar lista
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="ver-loading">
            <span className="ver-loading-dot" />
            <span className="ver-loading-dot" />
            <span className="ver-loading-dot" />
          </div>
        ) : erro ? (
          <p className="ver-erro">{erro}</p>
        ) : desejos.length === 0 ? (
          <div className="ver-empty">
            <p className="ver-empty-icon">🕯️</p>
            <p>Ainda não há desejos na lista.</p>
            <p className="ver-empty-hint">
              Partilha o link{' '}
              <span className="ver-link-hint">/lista</span> com ela!
            </p>
          </div>
        ) : (
          <>
            <p className="ver-count">
              {desejos.length} {desejos.length === 1 ? 'desejo' : 'desejos'} na lista
            </p>
            <ul className="ver-list">
              {desejos.map((d) => (
                <li key={d.id} className="ver-card">
                  <div className="ver-card-header">
                    <span className="ver-card-num">✦</span>
                    <p className="ver-card-texto">{d.texto}</p>
                  </div>
                  {d.link && (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ver-card-link"
                    >
                      🔗 Ver link
                    </a>
                  )}
                  <p className="ver-card-date">{formatDate(d.criadoEm)}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <footer className="ver-footer">
        <p>🖤 Esta página é só tua. Guarda bem o link!</p>
      </footer>
    </main>
  );
}
