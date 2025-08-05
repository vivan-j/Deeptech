import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import TextType from './components/TextType'
import Particles from './components/Particles'
import Squares from './components/Squares'
import CircularGallery from './components/CircularGallery';
import TargetCursor from './components/TargetCursor';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Background squares grid - furthest back */}
        <div className="background-squares">
          <Squares 
            speed={0.3} 
            squareSize={60}
            direction='diagonal'
            borderColor='rgba(255, 255, 255, 0.05)'
            hoverFillColor='rgba(255, 255, 255, 0.02)'
          />
        </div>
        
        {/* Background particles - middle layer */}
        <div className="background-particles">
          <Particles
            particleColors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.2)']}
            particleCount={150}
            particleSpread={15}
            speed={0.05}
            particleBaseSize={80}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
            alphaParticles={true}
          />
        </div>
        
        {/* Background gradient - top background layer */}
        <div className="background-gradient"></div>
        
        {/* Main content */}
        <div className="app-container">
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/outreach" element={<OutreachPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

// Navigation Component
function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo cursor-target">
          <div className="logo-container">
            <img 
              src="https://deeptech.doo.ee/assets/logo2.png" 
              alt="Deep Tech Logo" 
              className="logo-image"
            />
            <span className="logo-text">Deep Tech</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link cursor-target ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link cursor-target ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/outreach" className={`nav-link cursor-target ${location.pathname === '/outreach' ? 'active' : ''}`}>
            Outreach
          </Link>
          <Link to="/contact" className={`nav-link cursor-target ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Home Page
function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <TextType 
              text="Advancing robotics through innovative engineering, collaborative problem-solving, and cutting-edge technology solutions."
              typingSpeed={50}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              className="hero-typing"
              cursorClassName="cursor-accent"
              loop={false}
            />
          </div>
          <div className="hero-cta">
            <Link to="/about" className="cta-button cursor-target">Discover Our Team</Link>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <h2 className="section-title">Our Technology Stack</h2>
        <div className="features-grid">
          <div className="feature-card cursor-target">
            <h3>🤖 Advanced Robotics</h3>
            <p>Custom-designed mechanical systems with precision-engineered components, advanced sensors, and intelligent control algorithms for optimal performance in competitive environments.</p>
          </div>
          <div className="feature-card cursor-target">
            <h3>💻 Software Engineering</h3>
            <p>Robust programming solutions using Java, Python, and C++, featuring autonomous navigation, computer vision, and real-time decision-making systems.</p>
          </div>
          <div className="feature-card cursor-target">
            <h3>🔧 Engineering Design</h3>
            <p>CAD modeling, 3D printing, CNC machining, and iterative prototyping processes that transform innovative concepts into competition-ready solutions.</p>
          </div>
          <div className="feature-card cursor-target">
            <h3>📊 Data Analytics</h3>
            <p>Performance optimization through telemetry analysis, statistical modeling, and machine learning techniques to enhance robot capabilities and strategic decision-making.</p>
          </div>
          <div className="feature-card cursor-target">
            <h3>🎯 Strategic Innovation</h3>
            <p>Game analysis, strategic planning, and adaptive gameplay development that leverages technical capabilities for competitive advantage.</p>
          </div>
          <div className="feature-card cursor-target">
            <h3>🔌 Systems Integration</h3>
            <p>Seamless integration of hardware and software components, ensuring reliable performance under competitive pressure and complex operational requirements.</p>
          </div>
        </div>
      </section>
    </>
  )
}

// About Page
function AboutPage() {
  return (
    <section className="page-section">
      <div className="page-content">
        <h1 className="page-title">Meet Deep Tech</h1>
        <div className="team-intro">
          <p className="team-description">
            Deep Tech is a competitive FIRST Tech Challenge (FTC) robotics team dedicated to pushing the boundaries of innovation in robotics and engineering. Our multidisciplinary team combines technical expertise with creative problem-solving to tackle complex challenges.
          </p>
        </div>
        
        {/* Team Carousel - Moved to top */}
        <div className="team-showcase">
          <h2 className="showcase-title">Our Team</h2>
          <CircularGallery />
        </div>
        
        <div className="content-grid">
          <div className="content-card cursor-target">
            <h3>🎯 Our Mission</h3>
            <p>To develop cutting-edge robotic solutions while fostering STEM education and inspiring future engineers through hands-on learning and competitive excellence.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>🚀 Our Vision</h3>
            <p>To be recognized as leaders in robotics innovation, creating impactful solutions that advance technology and inspire the next generation of problem-solvers.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>⚡ Our Approach</h3>
            <p>We combine rigorous engineering methodology with creative thinking, emphasizing collaboration, continuous learning, and technical excellence in every project.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>🏆 Our Impact</h3>
            <p>Through competitive robotics and community outreach, we demonstrate how technology can solve real-world problems and create positive change.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Outreach Page
function OutreachPage() {
  return (
    <section className="page-section">
      <div className="page-content">
        <h1 className="page-title">Community Impact</h1>
        <div className="outreach-intro">
          <p className="section-description">
            Beyond competition, Deep Tech is committed to making a lasting impact in our community through education, mentorship, and technology advocacy. We believe in sharing knowledge and inspiring the next generation of innovators.
          </p>
        </div>
        <div className="content-grid">
          <div className="content-card cursor-target">
            <h3>🎓 STEM Education Initiatives</h3>
            <p>We partner with local schools and educational institutions to deliver hands-on robotics workshops, coding bootcamps, and engineering design challenges that make STEM accessible and exciting for students of all ages.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>👥 Mentorship & Leadership</h3>
            <p>Our experienced team members provide one-on-one mentorship to aspiring engineers, offering guidance in technical skills, project management, and career development in STEM fields.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>🌟 Innovation Showcases</h3>
            <p>We regularly participate in science fairs, maker spaces, and technology exhibitions, demonstrating cutting-edge robotics solutions and inspiring curiosity about engineering and technology.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>💡 Open Source Contributions</h3>
            <p>We actively contribute to open-source robotics projects, share our technical documentation, and develop educational resources that benefit the global robotics community.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>🤝 Industry Partnerships</h3>
            <p>We collaborate with technology companies, research institutions, and engineering firms to bridge the gap between academic learning and real-world applications.</p>
          </div>
          <div className="content-card cursor-target">
            <h3>🌍 Global Outreach</h3>
            <p>Through virtual workshops and international collaborations, we connect with robotics teams worldwide, sharing knowledge and fostering a global community of young innovators.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Page
function ContactPage() {
  return (
    <section className="page-section">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card cursor-target">
              <h3>🚀 Get in Touch</h3>
              <p>📧 Email: team@deeptech.org</p>
              <p>📱 Phone: (555) 123-4567</p>
              <p>📍 Location: Your City, State</p>
            </div>
            <div className="contact-card cursor-target">
              <h3>🌐 Follow Our Journey</h3>
              <p>📸 Instagram: @deeptechftc</p>
              <p>🐦 Twitter: @deeptechteam</p>
              <p>💻 GitHub: github.com/deeptech</p>
            </div>
            <div className="contact-card cursor-target">
              <h3>🏆 Achievements</h3>
              <p>🥇 Regional Champions 2023</p>
              <p>🎯 Innovation Award Winner</p>
              <p>🤝 Community Impact Award</p>
            </div>
          </div>
          <div className="contact-form">
            <h3 className="form-title">💬 Send us a Message</h3>
            <div className="tally-embed-container">
              <iframe 
                src="https://tally.so/embed/w26r1V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className="tally-iframe"
              />
            </div>
          </div>
        </div>
        
        {/* Team signature */}
        <div className="contact-signature">
          <img 
            src="https://deeptech.doo.ee/deeptechlogo%20copy.png" 
            alt="Deep Tech Team" 
            className="team-signature-banner"
          />
        </div>
      </div>
    </section>
  )
}



export default App