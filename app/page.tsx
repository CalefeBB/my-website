import Image from "next/image";
import CountdownBirthday from "./components/CountdownBirthday";
import HairPullScene from "./components/HairPullScene";

export default function Home() {
  const reasons = [
    { emoji: "😊", text: "Seu sorriso ilumina qualquer ambiente que você entra." },
    { emoji: "💫", text: "Sua inteligência e sua forma de ver o mundo me encantam." },
    { emoji: "🤗", text: "O jeito carinhoso que você trata as pessoas ao seu redor." },
    { emoji: "🌙", text: "As nossas conversas até tarde da noite que nunca quero que acabem." },
    { emoji: "🎵", text: "A forma como você me faz rir mesmo nos momentos difíceis." },
    { emoji: "🌸", text: "Cada detalhe seu, do jeito que você fala ao jeito que você ri." },
  ];

  return (
    <main className="bg-love relative">
      {/* Floating hearts */}
      <div className="hearts-container" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="heart">❤️</span>
        ))}
      </div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
        <p
          className="text-pink-300 text-lg tracking-[0.4em] uppercase mb-4 fade-in"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Uma mensagem especial para
        </p>
        <h1
          className="text-7xl md:text-9xl font-bold gradient-text glow mb-6 fade-in"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          Maria Alice
        </h1>
        <p
          className="text-pink-200 text-xl md:text-2xl max-w-xl mb-8 fade-in"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          &ldquo;Você é o melhor acontecimento da minha vida.&rdquo;
        </p>
        <span className="pulse-heart text-5xl fade-in">❤️</span>
      </section>

      {/* Photo */}
      <section className="relative z-10 flex flex-col items-center px-6 py-12 text-center">
        <div className="photo-frame">
          <Image
            src="/maria-alice.jpg"
            alt="Maria Alice"
            width={320}
            height={320}
            className="photo-img"
            priority
          />
        </div>
        <p
          className="text-pink-300 text-xl mt-6"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          A pessoa mais linda do meu mundo 💕
        </p>
      </section>

      {/* Love letter */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="heart-divider mb-12 text-pink-400 text-xl">❤️</div>
        <div className="love-card text-center">
          <h2
            className="text-4xl md:text-5xl gradient-text mb-8"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Para você, meu amor
          </h2>
          <div
            className="text-pink-100 text-lg leading-relaxed space-y-5"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <p>
              Existem coisas na vida que a gente não consegue explicar direito — e você é uma delas.
              Não sei ao certo em que momento você se tornou a pessoa mais importante do meu mundo,
              mas sei que não consigo imaginar esse mundo sem você.
            </p>
            <p>
              Você tem um jeito único de transformar os dias comuns em momentos especiais.
              Sua presença, seu carinho e até o seu silêncio ao meu lado já são o suficiente
              para eu me sentir completo.
            </p>
            <p>
              Obrigado por cada gargalhada, cada abraço, cada mensagem boa no dia.
              Obrigado por ser exatamente quem você é — porque quem você é é tudo que eu precisava.
            </p>
            <p className="text-pink-300 font-bold text-xl" style={{ fontFamily: "var(--font-dancing)" }}>
              Te amo muito, Maria Alice. 💕
            </p>
          </div>
        </div>
        <div className="heart-divider mt-12 text-pink-400 text-xl">❤️</div>
      </section>

      {/* Reasons */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <h2
          className="text-4xl md:text-5xl gradient-text text-center mb-12"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          Por que eu te amo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="love-card fade-in text-center">
              <span className="text-4xl block mb-3">{reason.emoji}</span>
              <p className="text-pink-100 text-base" style={{ fontFamily: "var(--font-lato)" }}>
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Birthday Countdown */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="heart-divider mb-12 text-pink-400 text-xl">🎂</div>
        <h2
          className="text-4xl md:text-5xl gradient-text mb-4"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          Contagem para o seu aniversário
        </h2>
        <p className="text-pink-300 text-lg mb-2" style={{ fontFamily: "var(--font-lato)" }}>
          3 de Abril 🎉
        </p>
        <p className="text-pink-500 text-sm mb-4" style={{ fontFamily: "var(--font-lato)" }}>
          Mal posso esperar para celebrar você!
        </p>
        <CountdownBirthday />
        <HairPullScene />
        <div className="heart-divider mt-12 text-pink-400 text-xl">🎂</div>
      </section>

      {/* Music */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-8 text-center">
        <h2
          className="text-4xl md:text-5xl gradient-text mb-4"
          style={{ fontFamily: "var(--font-dancing)" }}
        >
          Sua música
        </h2>
        <p className="text-pink-300 text-base mb-8" style={{ fontFamily: "var(--font-lato)" }}>
          Seus cabelos são um privilégio
        </p>
        <div className="love-card p-4">
          <iframe
            style={{ borderRadius: "12px", border: "none" }}
            src="https://open.spotify.com/embed/track/2mdEsXPu8ZmkHRRtAdC09e?utm_source=generator&autoplay=1"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="love-card">
          <p
            className="text-3xl md:text-4xl gradient-text leading-relaxed"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            &ldquo;Amar é encontrar na felicidade de outra pessoa a sua própria felicidade.&rdquo;
          </p>
          <p className="text-pink-400 mt-4 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-lato)" }}>
            — Gottfried Leibniz
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 text-pink-400" style={{ fontFamily: "var(--font-dancing)" }}>
        <p className="text-2xl">Feito com <span className="pulse-heart">❤️</span> para Maria Alice</p>
        <p className="text-pink-600 text-sm mt-2" style={{ fontFamily: "var(--font-lato)" }}>
          Sempre e para sempre.
        </p>
      </footer>
    </main>
  );
}
