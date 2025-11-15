import './ParallaxHeader.css'

export default function ParallaxHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">MD</span>
        </a>
        <nav className="nav">
          <a href="#home" className="nav-link">
            <span className="nav-icon">🏠</span>
            Home
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-icon">👤</span>
            About
          </a>
          <a href="#resume" className="nav-link">
            <span className="nav-icon">📄</span>
            Resume
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-icon">💼</span>
            Portfolio
          </a>
          <a href="#services" className="nav-link">
            <span className="nav-icon">🛠️</span>
            Services
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-icon">✉️</span>
            Contact
          </a>
        </nav>
        <div className="header-accent"></div>
      </div>
    </header>
  )
}
