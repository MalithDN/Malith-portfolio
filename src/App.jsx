import './App.css'
import Starfield from './Starfield'
import NeonTrails from './NeonTrails'
import GitHubEffect from './GitHubEffect'
import BackgroundMesh from './BackgroundMesh'
import StatLines from './StatLines'
import Chatbot from './Chatbot'
import Typewriter from './Typewriter'
import TechStats from './TechStats'
import ParallaxHeader from './components/ParallaxHeader'
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
                    <img src="/profile.jpg" alt="Malith Dilhara" />
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
                    <a href="mailto:malithdilharanawala@gmail.com" className="social-link email" aria-label="Email">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="hero-photo" style={{ "--hero-photo": "url('/profile.jpg')" }} aria-hidden />
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
                  <a href="https://github.com/MalithDN/mern-ecommerce-shop" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>Inventory Management System For University Faculty</h3>
                  <span className="card-badge">React • Node.js</span>
                </div>
                <p>Streamlined inventory management platform with real-time tracking, automated stock updates, and intuitive tools designed to help university 
                  faculty manage equipment, supplies, and resource allocation efficiently.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>MongoDB</span>
                  <span>Stripe API</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="https://github.com/MalithDN/Inventory-Management-System-For-University-Faculty/tree/project" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>Library Management Web Application</h3>
                  <span className="card-badge">PHP • My SQL</span>
                </div>
                <p>Web-based library management system with online catalog search, member and staff portals, automated issue/return tracking, and 
                  admin tools for managing books, records, and reports</p>
                <div className="tech-tags">
                  <span>PHP</span>
                  <span>SQL</span>

                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="https://github.com/MalithDN/Library-Management-Web-Application-Project" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>Campus News app</h3>
                  <span className="card-badge">Java • Fire base</span>
                </div>
                <p>Campus Android app designed for students to easily view campus news, offering quick access 
                  to real-time updates and announcements.</p>
                <div className="tech-tags">
                  <span>Android Studio</span>
                  <span>Java</span>
                  <span>Firebase</span>

                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="https://github.com/MalithDN/campus-android-app" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>AI App .NET Microsoft</h3>
                  <span className="card-badge">C# • .NET</span>
                </div>
                <p>AI-powered .NET application leveraging Microsoft.Extensions.AI for seamless model integration, intelligent data 
                  processing, and scalable.</p>
                <div className="tech-tags">
                  <span>.NET</span>
                  <span>C#</span>
                  <span>Open AI</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="https://github.com/MalithDN/AI-App-in-.NET-using-microsoft.Extensions.AI" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </article>
              <article className="card">
                <div className="card-header">
                  <h3>MyStudy AI-Chat-app </h3>
                  <span className="card-badge">C# • .NET</span>
                </div>
                <p>Personal study assistant chat app built with .NET, offering AI-powered Q&A, topic explanations, 
                  and organized study support tailored to students’ learning needs.</p>
                <div className="tech-tags">
                  <span>.NET</span>
                  <span>C#</span>
                  <span>Open AI</span>
                </div>
                <div className="card-actions">
                  <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href="https://github.com/MalithDN/Build-an-AI-Chat-app-using-.NET" target="_blank" rel="noreferrer">View Code</a>
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
              <h3>Full-Stack Web Development</h3>
              <p>End-to-end web applications with React frontend, Node.js backend, and MongoDB databases. From e-commerce platforms to inventory management systems.</p>
            </article>
            <article className="card">
              <h3>AI & Machine Learning Integration</h3>
              <p>Intelligent applications using OpenAI APIs, Microsoft.Extensions.AI, and .NET for smart chatbots, study assistants, and data processing solutions.</p>
            </article>
            <article className="card">
              <h3>Mobile & Android Development</h3>
              <p>Native Android applications built with Java and Firebase. Real-time features, push notifications, and cloud synchronization for campus and social apps.</p>
            </article>
            <article className="card">
              <h3>.NET & C# Solutions</h3>
              <p>Enterprise-grade applications using .NET framework with C#. AI-powered backends, real-time processing, and scalable cloud solutions.</p>
            </article>
            <article className="card">
              <h3>Database Design & Optimization</h3>
              <p>Expert database architecture with MongoDB, PostgreSQL, MySQL, and Firebase. Optimized queries, real-time sync, and data management systems.</p>
            </article>
            <article className="card">
              <h3>UI/UX & Frontend Engineering</h3>
              <p>Modern, responsive interfaces with React, TypeScript, and Tailwind CSS. Accessibility, performance optimization, and interactive user experiences.</p>
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
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>State Management</li>
                  <li>Responsive Design</li>
                  <li>Web APIs</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend & APIs</h3>
                <ul className="chips">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>.NET/C#</li>
                  <li>PHP</li>
                  <li>REST APIs</li>
                  <li>Authentication</li>
                  <li>Payment Integration</li>
                  <li>Real-time Sync</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Databases & Cloud</h3>
                <ul className="chips">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                  <li>AWS</li>
                  <li>Cloud Sync</li>
                  <li>Database Optimization</li>
                  <li>Query Optimization</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Mobile & AI</h3>
                <ul className="chips">
                  <li>Android Development</li>
                  <li>Java</li>
                  <li>Android Studio</li>
                  <li>OpenAI APIs</li>
                  <li>Microsoft AI Extensions</li>
                  <li>AI Integration</li>
                  <li>Machine Learning</li>
                  <li>Chatbot Development</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>DevOps & Tools</h3>
                <ul className="chips">
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>Vite</li>
                  <li>NPM/Package Management</li>
                  <li>Web Performance</li>
                  <li>Testing</li>
                  <li>ESLint</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Additional Skills</h3>
                <ul className="chips">
                  <li>Full-Stack Development</li>
                  <li>UI/UX Engineering</li>
                  <li>System Design</li>
                  <li>D3.js Visualization</li>
                  <li>Stripe Integration</li>
                  <li>Real-time Features</li>
                  <li>Performance Optimization</li>
                  <li>Accessibility (A11y)</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="certifications" className="section">
            <h2>Certifications & Achievements</h2>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">🏆</span>
                  <h3>AWS Certified Cloud Practitioner</h3>
                </div>
                <p className="cert-issuer">Amazon Web Services</p>
                <p className="cert-date">2024</p>
                <p className="cert-description">Demonstrated cloud computing fundamentals and AWS services knowledge.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">🚀</span>
                  <h3>Microsoft AI Developer Fundamentals</h3>
                </div>
                <p className="cert-issuer">Microsoft Azure</p>
                <p className="cert-date">2024</p>
                <p className="cert-description">Certified in building AI-powered applications using Microsoft.Extensions.AI and .NET framework.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">⚛️</span>
                  <h3>React Advanced Concepts</h3>
                </div>
                <p className="cert-issuer">Udemy</p>
                <p className="cert-date">2023</p>
                <p className="cert-description">Expert-level training in React hooks, context API, performance optimization, and state management.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">🗄️</span>
                  <h3>MongoDB Developer Certification</h3>
                </div>
                <p className="cert-issuer">MongoDB University</p>
                <p className="cert-date">2023</p>
                <p className="cert-description">Proficient in database design, CRUD operations, aggregation pipelines, and optimization strategies.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">🔐</span>
                  <h3>Web Security Essentials</h3>
                </div>
                <p className="cert-issuer">Coursera</p>
                <p className="cert-date">2023</p>
                <p className="cert-description">Comprehensive understanding of security best practices, authentication, and data protection.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <span className="cert-icon">📱</span>
                  <h3>Android Development Mastery</h3>
                </div>
                <p className="cert-issuer">Google Developers</p>
                <p className="cert-date">2023</p>
                <p className="cert-description">Expert certification in Android development with Java, Firebase integration, and real-time applications.</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="section-wrapper">
          <section id="contact" className="section">
            <h2>Get In Touch</h2>
            <div className="contact-container">
              <div className="contact-form-wrapper">
                <ContactForm />
                <div className="contact-links">
                  <p className="contact-or">Or connect on social media:</p>
                  <div className="links">
                    <a href="https://github.com/MalithDN" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
                    <a href="https://www.linkedin.com/in/malith-dilhara-9ab044354" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    <a href="https://twitter.com/MalithDN" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-wrapper">
                <h3 className="contact-subtitle">Let's Connect</h3>
                <p className="contact-description">
                  Have a question or want to work together? I'd love to hear from you! I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <h4 className="contact-label">Email</h4>
                    <a href="mailto:malithdilharanawala@gmail.com" className="contact-value">
                      malithdilharanawala@gmail.com
                    </a>
                  </div>
                  
                  <div className="contact-detail-item">
                    <h4 className="contact-label">Phone</h4>
                    <a href="tel:+94778165902" className="contact-value">
                      +94 77 816 5902
                    </a>
                  </div>
                  
                  <div className="contact-detail-item">
                    <h4 className="contact-label">Location</h4>
                    <p className="contact-value">
                      Matara, Sri Lanka
                    </p>
                  </div>
                </div>
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
