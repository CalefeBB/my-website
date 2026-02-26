'use client';

import { useState } from 'react';

export default function ListaDesejos() {
  const [texto, setTexto] = useState('');
  const [link, setLink] = useState('');
  const [enviados, setEnviados] = useState<string[]>([]);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!texto.trim()) return;

    setEnviando(true);
    setErro('');

    try {
      const res = await fetch('/api/desejos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto, link }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErro(data.error ?? 'Erro ao enviar. Tenta de novo!');
        return;
      }

      setEnviados((prev) => [texto, ...prev]);
      setTexto('');
      setLink('');
    } catch {
      setErro('Sem conexão. Tenta de novo!');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="lista-main">
      {/* VHS noise overlay */}
      <div className="lista-vhs-overlay" />

      <div className="lista-container">
        {/* Header */}
        <div className="lista-header">
          <span className="lista-badge">✦ A EMPREGADA ✦</span>
          <h1 className="lista-title">Lista de Desejos</h1>
          <p className="lista-subtitle">
            A patroa manda, a empregada anota 📋
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="lista-form">
          <div className="lista-field">
            <label htmlFor="texto" className="lista-label">
              O que você quer de presente? ✨
            </label>
            <textarea
              id="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Escreva aqui seu desejo..."
              maxLength={200}
              rows={3}
              className="lista-textarea"
              required
            />
            <span className="lista-char-count">{texto.length}/200</span>
          </div>

          <div className="lista-field">
            <label htmlFor="link" className="lista-label">
              Link (opcional) 🔗
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="lista-input"
            />
          </div>

          {erro && <p className="lista-erro">{erro}</p>}

          <button
            type="submit"
            disabled={enviando || !texto.trim()}
            className="lista-btn"
          >
            {enviando ? 'Enviando...' : '✦ Adicionar à lista ✦'}
          </button>
        </form>

        {/* Sent wishes in this session */}
        {enviados.length > 0 && (
          <div className="lista-enviados">
            <h2 className="lista-enviados-title">Já adicionou:</h2>
            <ul className="lista-enviados-list">
              {enviados.map((item, i) => (
                <li key={i} className="lista-enviados-item">
                  <span className="lista-check">✓</span> {item}
                </li>
              ))}
            </ul>
            <p className="lista-nota">
              Ele vai ver tudo. Sem pressa, vai sendo escrita! 🕯️
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="lista-footer">
        <p>Com amor, o seu faz-tudo 🖤</p>
      </footer>
    </main>
  );
}
