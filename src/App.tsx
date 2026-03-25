import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-[#040304] text-white min-h-screen">
      <Navbar />
      
      {/* El main tiene un padding top para no quedar detrás del nav */}
      <main className="pt-20 md:pt-24">
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <footer className="mt-20 text-center pb-10">
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
          ALEX © {new Date().getFullYear()} - WEB DEVELOPER
        </p>
      </footer>
    </div>
  );
}

export default App;