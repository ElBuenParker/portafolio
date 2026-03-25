import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'ALEX', id: 'hero' },
  { name: 'PROYECTOS', id: 'projects' },
  { name: 'HABILIDADES', id: 'skills' },
  { name: 'SERVICIOS', id: 'services' },
  { name: 'CONTACTO', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0a0a0a]">
      {/* 1. BARRA BLANCA SUPERIOR */}
      <div className="w-full h-3 md:h-8 bg-white relative z-[110]" />

      <div className="w-full px-4 md:px-10">
        <div className="flex items-center justify-start h-12 md:h-16">
          <div className="flex items-center gap-5 md:gap-8 h-full -mt-2 md:-mt-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isMain = item.id === 'hero';

              return (
                <div key={item.id} className="relative flex items-center justify-center h-full">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative z-[120] px-4 md:px-10 h-full flex items-center justify-center font-black tracking-tight uppercase transition-colors duration-500 whitespace-nowrap
                      ${isMain ? 'text-[15px] md:text-[18px]' : 'text-[10px] md:text-[12px]'}`}
                    style={{ color: isActive ? '#000000' : '#ffffff' }}
                  >
                    {item.name}
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="liquid-pill"
                      className="absolute bg-white z-[100]"
                      style={{
                        top: '-1px', 
                        /* --- CONTROL DE ANCHO DE LA GOTA --- */
                        left: '-15px',   // Aumenta para hacerla más ancha a la izquierda
                        right: '-15px',  // Aumenta para hacerla más ancha a la derecha
                        /* --- CONTROL DE LARGO (ALTO) --- */
                        height: 'calc(100% + 10px)', // Cambia '15px' para que cuelgue más o menos
                        /* --- CONTROL DE REDONDEZ INFERIOR --- */
                        borderBottomLeftRadius: '100px',
                        borderBottomRightRadius: '100px',
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* CURVA DE OLA Derecha (CÓNCAVA)
                          - width/height: Debe coincidir con el radio del radial-gradient (20px).
                          - left: Debe ser el negativo del width para pegarse por fuera.
                      */}
                      <div 
                        className="absolute -right-[20px] top-0 w-[40px] h-[20px]"
                        style={{
                          // circle at 100% 100% -> El círculo invisible se pone abajo a la derecha del cuadro
                          background: 'radial-gradient(circle at 100% 100%, transparent 20px, white 21px)'
                        }}
                      />

                      {/* CURVA DE OLA Izquierda (CÓNCAVA)
                          - circle at 0% 100% -> El círculo invisible se pone abajo a la izquierda del cuadro
                      */}
                      <div 
                        className="absolute -left-[20px] top-0 w-[40px] h-[20px]"
                        style={{
                          background: 'radial-gradient(circle at 0% 100%, transparent 20px, white 21px)'
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;