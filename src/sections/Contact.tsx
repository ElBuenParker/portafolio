import { motion } from 'framer-motion';

import linkedinImg from '../assets/img/linkedin.png';
import emailImg from '../assets/img/email.png';
import githubImg from '../assets/img/github.png';
import telefonoImg from '../assets/img/telefono.png';

const contactLinks = [
  { 
    id: 'github', 
    img: githubImg, 
    url: 'https://github.com/elbuenparker',
    alt: 'GitHub @ELBUENPARKER',
    // Usamos variables de CSS personalizadas para las posiciones
    pos: { top: '25%', left: '15%', width: '22%' }
  },
  { 
    id: 'linkedin', 
    img: linkedinImg, 
    url: 'https://www.linkedin.com/in/mr-gonzalex',
    alt: 'LinkedIn @MR-GONZALEX',
    pos: { top: '30%', left: '38%', width: '28%' } 
  },
  { 
    id: 'email', 
    img: emailImg, 
    url: 'mailto:mr.gonzalex.4@gmail.com',
    alt: 'Email mr.gonzalex.4@gmail.com',
    pos: { top: '15%', left: '60%', width: '32%' }
  },
  { 
    id: 'telefono', 
    img: telefonoImg, 
    url: 'https://wa.me/523337010052',
    alt: 'WhatsApp +52 3337010052',
    pos: { top: '60%', left: '10%', width: '25%' }
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#0a0a0a] min-h-screen flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white uppercase text-center"
      >
        CONTACTO
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px] bg-white rounded-3xl border-4 border-black shadow-[20px_20px_0px_rgba(255,255,255,0.1)] overflow-hidden relative flex flex-col md:aspect-[16/10]"
      >
        {/* BARRA DE TÍTULO */}
        <div className="w-full h-10 md:h-12 bg-black flex items-center px-4 md:px-6 gap-2 border-b-4 border-black">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 h-5 md:h-6 bg-white/10 rounded-full mx-4" />
          <div className="flex gap-1.5">
            <div className="w-6 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
        </div>

        {/* CONTENEDOR DE CARDS */}
        <div className="flex-1 px-6 pt-10 pb-16 sm:px-10 sm:pt-14 relative bg-white
                        flex flex-col items-center gap-2 md:block md:static md:p-0">
          
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 50 }}
              
              /* CAMBIO CLAVE: 
                 1. Eliminamos el 'window.innerWidth' del style.
                 2. Usamos clases de Tailwind para alternar entre 'relative' (móvil) y 'absolute' (desktop).
                 3. Pasamos las coordenadas como variables de CSS inline.
              */
              className="group bg-white rounded-xl border-2 border-black overflow-hidden shadow-lg cursor-pointer transition-all duration-300
                         w-[90%] md:w-[var(--w)] md:absolute flex flex-col h-auto select-none
                         
                         nth-1:self-start nth-1:mt-0 
                         nth-2:self-end nth-2:mt-4 
                         nth-3:self-end nth-3:-mt-6 nth-3:mr-1
                         nth-4:self-start nth-4:-mt-10 nth-4:mb-20 nth-4:ml-1
                         
                         md:mt-0 md:mb-0 md:mr-0 md:ml-0 md:self-auto
                         md:top-[var(--t)] md:left-[var(--l)]"
              
              style={{
                // @ts-ignore (Si usas TS, para permitir variables custom)
                '--t': link.pos.top,
                '--l': link.pos.left,
                '--w': link.pos.width,
              } as React.CSSProperties}
            >
              <div className="w-full h-6 bg-black flex items-center px-3 gap-1 border-b-2 border-black">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="flex-1" />
                <div className="w-3 h-1 rounded-full bg-white/30" />
              </div>

              <img 
                src={link.img} 
                alt={link.alt}
                className="w-full h-auto object-contain p-2 md:p-4 transition-transform duration-500 group-hover:scale-105" 
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      
    </section>
  );
};

export default Contact;