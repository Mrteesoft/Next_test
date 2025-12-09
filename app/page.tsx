export default function Home() {
  const modes = [
    {
      title: "Cinematic Mode",
      description: "High-quality output with enhanced visuals and detailed rendering for professional-grade results.",
      image: "/cinematic-film-production-camera-dark-moody-lighti.jpg",
    },
    {
      title: "Fast Mode",
      description: "Quick generation for rapid iterations and previews when speed matters most.",
      image: "/abstract-speed-motion-blur-fast-technology-dark-ba.jpg",
    },
    {
      title: "Avatar Mode",
      description: "Optimized for character and portrait generation with lifelike detail and expression.",
      image: "/digital-avatar-portrait-face-futuristic-dark-backg.jpg",
    },
  ]

  return (
    <>
      <div className="background">
        <div className="background__gradient background__gradient--1" />
        <div className="background__gradient background__gradient--2" />
        <div className="background__gradient background__gradient--3" />
        <div className="background__noise" />
      </div>

      <header className="header">
        <div className="header__logo">
          <div className="header__logo-icon">
            <span className="header__logo-mark" />
          </div>
          <span className="header__logo-text">Studio</span>
        </div>
        <nav className="header__nav">
          <a href="#" className="header__link">
            Features
          </a>
          <a href="#" className="header__link">
            Pricing
          </a>
          <a href="#" className="header__link">
            Docs
          </a>
        </nav>
        <button className="header__login">Sign In</button>
      </header>

      <main className="main">
        <div className="hero">
          <h1 className="hero__title">Choose Your Generation Mode</h1>
          <p className="hero__subtitle">
            Select the rendering approach that fits your creative workflow. Each mode is optimized for different use
            cases and output quality.
          </p>
        </div>

        <div className="cards">
          {modes.map((mode, index) => (
            <article key={mode.title} className="card">
              <div className="card__image-wrapper">
                <img src={mode.image || "/placeholder.svg"} alt={mode.title} className="card__image" />
              <div className="card__image-overlay" />
            </div>
            <div className="card__content">
              <h2 className="card__title">{mode.title}</h2>
              <p className="card__description">{mode.description}</p>
                <button className="card__button">
                  <span>Select Mode</span>
                  <svg
                    className="card__button-arrow"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 10h12M12 6l4 4-4 4" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer" />
    </>
  )
}
