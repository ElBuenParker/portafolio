import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// IMPORTACIÓN DE IMÁGENES
import uggaOf from '../assets/img/uggaoff.png';
import interOf from '../assets/img/interoff.png';
import kaizenOf from '../assets/img/kaizenoff.png';
import loadingOf from '../assets/img/loadingoff.png';

import uggaOn from '../assets/img/uggaon.png';
import interOn from '../assets/img/interon.png';
import kaizenOn from '../assets/img/kaizenon.png';
import loadingOn from '../assets/img/loadingon.png';

const projectsData = [
  { id: 1, imageBefore: uggaOf, imageAfter: uggaOn, url: "https://ugga.com.mx" },
  { id: 2, imageBefore: interOf, imageAfter: interOn, url: "https://interchangecefid.com" },
  { id: 3, imageBefore: kaizenOf, imageAfter: kaizenOn, url: "https://elbuenparker.github.io/kaizentalent/#home" },
  { id: 4, imageBefore: loadingOf, imageAfter: loadingOn, url: "https://google.com" }
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // 1. LIMPIEZA AL CAMBIAR TAMAÑO: Si pasas a Desktop, apagamos el estado activo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveProjectId(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. CLIC FUERA MEJORADO: Detecta toques en cualquier parte del documento
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Si el clic NO fue sobre una de las tarjetas (dentro del grid), reseteamos
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setActiveProjectId(null);
      }
    };

    document.addEventListener('touchstart', handleClickOutside, { passive: false });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto bg-[#0a0a0a]">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white"
      >
        PROYECTOS
      </motion.h2>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isActive={activeProjectId === project.id}
            setActive={(id) => setActiveProjectId(id)}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isActive, setActive }: { project: any, isActive: boolean, setActive: (id: number | null) => void }) => {
  
  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (!isActive) {
        e.preventDefault();
        e.stopPropagation(); // Evita que el evento "limpie" el estado inmediatamente
        setActive(project.id);
      }
      // Si ya está activo, el enlace se dispara normalmente
    }
  };

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTap}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="group relative h-[250px] md:h-[300px] overflow-hidden rounded-[30px] border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out"
    >
      
      {/* IMAGEN OFF: Se oculta si está activo (móvil) o si hay hover (desktop) */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out 
        ${isActive ? 'opacity-0' : 'md:group-hover:opacity-0'}`}>
        <img 
          src={project.imageBefore} 
          alt="Proyecto reposo"
          className="w-full h-full object-cover select-none pointer-events-none" 
        />
      </div>

      {/* IMAGEN ON: Se muestra si está activo (móvil) o si hay hover (desktop) */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out opacity-0 
        ${isActive ? 'opacity-100' : 'md:group-hover:opacity-100'}`}>
        <img 
          src={project.imageAfter} 
          alt="Proyecto activo"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

    </motion.a>
  );
};

export default Projects;