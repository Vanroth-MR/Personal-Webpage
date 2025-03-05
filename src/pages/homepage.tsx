import { useEffect } from 'react';

export default function Homepage() {
  useEffect(() => {
    // Show navbar after scrolling past hero section
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      
      if (window.scrollY > heroHeight - 100) {
        navbar?.classList.add('visible');
      } else {
        navbar?.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Copy the HTML content from index.html here */}
      <nav id="navbar">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div id="hero">
        <img id="hero-video" src="/api/placeholder/1920/1080" alt="Pacific Northwest landscape" />
        <div className="video-overlay"></div>
        <div className="hero-content">
          <div className="portrait">
            <img src="/Portrait.png" alt="Vanroth Peou" />
          </div>
          <h1 className="name">Vanroth Peou</h1>
          <h2 className="title">Senior IT Analyst</h2>
          <div className="contact-info">
            <p>(425) 659-8050 | vanrothp@gmail.com</p>
            <p>Edmonds, WA 98026</p>
          </div>
          <div>
            <a href="#about" className="cta-button">Learn More</a>
            <a href="#contact" className="cta-button">Contact Me</a>
          </div>
        </div>
      </div>
      
      {/* Rest of the sections... */}
    </>
  );
}
