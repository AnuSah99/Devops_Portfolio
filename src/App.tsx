import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Pipeline } from './components/Pipeline';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';

export function App() {
  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 font-sans relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Background Interactive Particles & Grid */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-40 z-0" />
      <ParticlesBackground />

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Navbar onOpenTerminal={handleOpenTerminal} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Pipeline />
          <Terminal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
