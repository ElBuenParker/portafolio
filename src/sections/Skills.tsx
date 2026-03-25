import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// IMPORTACIÓN DE IMÁGENES
import shopifyImg from '../assets/img/shopify.png';
import marketingImg from '../assets/img/marketing.png';
import cssImg from '../assets/img/css.png';
import htmlImg from '../assets/img/html.png';
import reactImg from '../assets/img/react.png';
import jsImg from '../assets/img/js.png';
import metaImg from '../assets/img/meta.png';
import figmaImg from '../assets/img/figma.png';

const skillsData = [
  { id: 1, name: 'Shopify', icon: shopifyImg, desc: "Desarrollo y personalización de tiendas Shopify utilizando Liquid, optimizando la experiencia de compra, el rendimiento y la conversión." },
  { id: 2, name: 'Marketing', icon: marketingImg, desc: "Planificación y ejecución de estrategias digitales enfocadas en posicionamiento orgánico, atracción de tráfico y crecimiento de marca." },
  { id: 3, name: 'CSS', icon: cssImg, desc: "Diseño de interfaces modernas, responsivas y optimizadas, utilizando CSS y frameworks como Tailwind para acelerar el desarrollo." },
  { id: 4, name: 'HTML', icon: htmlImg, desc: "Estructuración de sitios web con buenas prácticas de semántica, accesibilidad y optimización para motores de búsqueda." },
  { id: 5, name: 'React', icon: reactImg, desc: "Creación de interfaces modernas basadas en componentes, enfocadas en rendimiento, reutilización y escalabilidad." },
  { id: 6, name: 'JavaScript', icon: jsImg, desc: "Desarrollo de funcionalidades dinámicas y aplicaciones robustas mediante código escalable, mantenible y tipado." },
  { id: 7, name: 'Meta', icon: metaImg, desc: "Gestión y optimización de campañas publicitarias enfocadas en generar tráfico calificado y maximizar conversiones." },
  { id: 8, name: 'Figma', icon: figmaImg, desc: "Diseño de interfaces y creación de contenido visual atractivo, alineado a objetivos de experiencia de usuario y marketing digital." },
];

const Skills = () => {
  const [activeSkillId, setActiveSkillId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Cerrar descripción al tocar fuera de las tarjetas
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setActiveSkillId(null);
      }
    };
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 max-w-7xl mx-auto bg-[#0a0a0a]">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white uppercase"
      >
        HABILIDADES
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skillsData.map((skill) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            isActive={activeSkillId === skill.id}
            toggleActive={() => setActiveSkillId(activeSkillId === skill.id ? null : skill.id)}
          />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skill, isActive, toggleActive }: { skill: any, isActive: boolean, toggleActive: () => void }) => {
  return (
    <motion.div
      onClick={toggleActive}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative aspect-square overflow-hidden rounded-[2.5rem] bg-white cursor-pointer transition-all duration-700 ease-in-out shadow-xl"
    >
      {/* 1. IMAGEN FULL (1080x1080)
          - Se oculta suavemente al activarse (clic en móvil o hover en desktop)
      */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out
        ${isActive ? 'opacity-0' : 'md:group-hover:opacity-0'}`}>
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-full h-full object-cover select-none pointer-events-none" 
        />
      </div>

      {/* 2. DESCRIPCIÓN 
          - Aparece con un fondo sólido para asegurar legibilidad
      */}
      <div className={`absolute inset-0 z-20 p-6 md:p-10 flex items-center justify-center text-center bg-white transition-opacity duration-700 ease-in-out opacity-0
        ${isActive ? 'opacity-100' : 'md:group-hover:opacity-100'}`}>
        <p className="text-black text-[11px] md:text-sm font-bold leading-relaxed">
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default Skills;