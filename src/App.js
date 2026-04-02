import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Service from './component/Portfolio';
import Skill from './component/Skill';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <section id="home" className="section hero-section">
          <Welcome />
        </section>

        <section id="About" className="section">
          <About />
        </section>

        <section id="Service" className="section">
          <Service />
        </section>

        <section id="Skill" className="section">
          <Skill />
        </section>

        <section id="Gallery" className="section">
          <Gallery />
        </section>

        <section id="Contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
