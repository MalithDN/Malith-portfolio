import './App.css'
import profileImage from '../public/profile.jpg'
import Starfield from './Starfield'
import NeonTrails from './NeonTrails'
import GitHubEffect from './GitHubEffect'
import BackgroundMesh from './BackgroundMesh'
import StatLines from './StatLines'
import Chatbot from './Chatbot'
import Typewriter from './Typewriter'
import TechStats from './TechStats'
import ParallexHeader from './components/ParallaxHeader'
import ScrollReveal from './components/ScrollReveal'
import ContactForm from './ContactForm'

function App() {
  return (
    <>
      <Starfield />
      <NeonTrails />
      <GitHubEffect />
      <BackgroundMesh />
      <StatLines />
      <Chatbot />
      <div className="bg-overlay" aria-hidden />
      <div className="page">
        <ParallaxHeader />
        <main>
          <section id="home" className="section hero">
            <div className="hero-content">
              <span className="kicker">Creative Workflow</span>
              <h1 className="title">Hi, I'm Malith Dilhara</h1>
            <p className="subtitle">
              <Typewriter
                words={[
                  'AI/ML Developer',
                  'Full-Stack Developer',
                  'Frontend Developer',
                  'React Enthusiast',
                  'Problem Solver',
                ]}
                typingSpeedMs={70}
                deletingSpeedMs={40}
                pauseAtWordMs={1100}
              />
            </p>
              <div className="hero-columns">
                <div className="hero-robot-column">
                  <div className="profile-circle">
                    <img src={profileImage} alt="Malith Dilhara" />
                  </div>
                </div>
                
                <div className="hero-right-column">
                  <div className="wordpress-link">
                    <a href="http://techbot50.wordpress.com" target="_blank" rel="noreferrer" className="wp-button">
                      <span className="wp-icon">📝</span>
                      <span className="wp-text">
                        <span className="wp-label">Blog & Insights</span>
                        <span className="wp-desc">TechBot50 on WordPress</span>
                      </span>
                      <span className="wp-arrow">→</span>
                    </a>
                  </div>
                  
                  <div className="social-links" aria-label="Social media">
                    <a href="https://github.com/MalithDN" target="_blank" rel="noreferrer" className="social-link github" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/malith-dilhara-9ab044354" target="_blank" rel="noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.667-2.236-1.312 0-2.095.883-2.434 1.735-.125.307-.156.735-.156 1.164v5.106h-3.554s.047-8.283 0-9.142h3.554v1.294c-.009.015-.021.029-.03.043h.03v-.043c.404-.623 1.125-1.511 2.735-1.511 1.997 0 3.495 1.304 3.495 4.106v5.253zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.702 1.96-1.702 1.188 0 1.911.747 1.937 1.701 0 .948-.749 1.706-1.982 1.706zm1.581 11.597H3.635V10.27h3.283v10.182zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/MalithDN" target="_blank" rel="noreferrer" className="social-link twitter" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 002.856-9.934c-1.674.05-3.338.142-5.009.3a15.07 15.07 0 014.062-4.306c-.01.004-.02.008-.03.01a10.934 10.934 0 01-1.561.413c1.424-1.092 2.947-2.178 4.612-3.31-1.23.023-2.437.147-3.53.285 1.396-1.162 2.919-2.3 4.56-3.431-1.747.146-3.446.374-5.12.693 1.494-1.263 3.1-2.47 4.757-3.657-1.997.25-3.94.645-5.84 1.173 1.70-1.491 3.53-2.846 5.44-4.038zM19 13v11h-4V13h4zm-9 0v11H6V13h4zm-9 0v11H0V13h4z"/>
                      </svg>
                    </a>
                    <a href="mailto:malithdilhara56@gmail.com" className="social-link email" aria-label="Email">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="hero-photo" style={{ "--hero-photo": `url('${profileImage}')` }} aria-hidden />
          </section>
          <ScrollReveal className="section-wrapper">
            <section id="about" className="section">
              <h2>About</h2>
              <div className="about-grid">
                <div className="about-content">
                  <p className="about-intro">
                    I'm a <strong>full-stack developer</strong> and <strong>ICT undergraduate</strong> at the <strong>University of Colombo</strong>, passionate about building <strong>modern, scalable, and user-focused applications</strong>.
                  </p>
                  <p className="about-detail">
                    I work with <strong>.NET</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>, and enjoy integrating <strong>AI features</strong> to create <strong>high-performance, visually polished digital experiences</strong>. 
                    <br />
                    <br />
                    <span className="availability">✦ Currently available for <strong>freelance</strong>, <strong>contract</strong>, and <strong>full-time roles</strong></span>
                  </p>
                </div>
                <TechStats />
              </div>
            </section>
          </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="resume" className="section">
            <h2>Resume</h2>
            <p>
              Download my resume and explore my experience and education.
            </p>
            <div className="card-actions">
              <a href="#" target="_blank" rel="noreferrer">Download PDF</a>
              <a href="#" target="_blank" rel="noreferrer">View Online</a>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal className="section-wrapper">
          <section id="projects" className="section">
            <h2>Featured Projects</h2>
              <div className="grid">
              <article className="card">
                <div className="card-header">
                  <h3>E-Commerce Platform</h3>
                  <span className="card-badge">React • Node.js</span>
                </div>
                <p>Full-stack e-commerce solution with real-time inventory management, payment integration, and analytics dashboard.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>MongoDB</span>
                  <span>Stripe API</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>Task Management App</h3>
                  <span className="card-badge">React • Firebase</span>
                </div>
                <p>Collaborative task manager with real-time sync, drag-and-drop interface, and team collaboration features.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Tailwind CSS</span>
                  <span>Framer Motion</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>Data Visualization Dashboard</h3>
                  <span className="card-badge">React • D3.js</span>
                </div>
                <p>Interactive analytics dashboard with real-time data updates, custom charts, and export functionality.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>D3.js</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="services" className="section">
          <h2>Services</h2>
          <div className="grid">
            <article className="card">
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web apps built with React.</p>
            </article>
            <article className="card">
              <h3>UI Engineering</h3>
              <p>Design systems, component libraries, accessibility and performance.</p>
            </article>
            <article className="card">
              <h3>Consulting</h3>
              <p>Architecture reviews, audits, and mentoring for frontend teams.</p>
            </article>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="skills" className="section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul className="chips">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>State Management</li>
                  <li>Web APIs</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul className="chips">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                  <li>Authentication</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>DevOps & Tools</h3>
                <ul className="chips">
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>AWS</li>
                  <li>Web Performance</li>
                  <li>Testing</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="contact" className="section">
            <h2>Contact</h2>
            <p>
              Want to work together? Send me a message using the form below or reach out via the links.
            </p>
            <ContactForm />
            <div className="contact-links">
              <p className="contact-or">Or connect on social media:</p>
              <div className="links">
                <a href="https://github.com/MalithDN" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
                <a href="https://www.linkedin.com/in/malith-dilhara-9ab044354" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                <a href="mailto:malithdilhara56@gmail.com" aria-label="Email">Email</a>
              </div>
            </div>
          </section>
        </ScrollReveal>
        </main>
        <footer className="footer">
          <span>© {new Date().getFullYear()} Malith Dilhara</span>
        </footer>
      </div>
    </>
  )
}

export default App
