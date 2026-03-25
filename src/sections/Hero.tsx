import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import bannerImg from '../assets/img/banner.png';

const tabs = [
  { id: 1, content: "Soy desarrollador web con experiencia en eCommerce, especializado en Shopify y React. No solo construyo sitios: desarrollo experiencias pensadas para convertir, optimizar y escalar resultados reales." },
  { id: 2, content: "Trabajo resolviendo problemas concretos de negocio. Desde mejorar la velocidad de carga hasta optimizar la experiencia de usuario, mi enfoque siempre está en impacto medible." },
  { id: 3, content: "He participado en proyectos donde he desarrollado y mejorado sitios activos, entendiendo necesidades, proponiendo soluciones y ejecutando con un enfoque práctico y eficiente." },
  { id: 4, content: "Busco seguir creciendo en entornos donde se valore la calidad, la mejora continua y la capacidad de construir productos que funcionen. Si necesitas a alguien que ejecute bien, soy esa persona." },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    /* 1. SECCIÓN PRINCIPAL: 
       - pt-12 (Móvil) / pt-20 (Desktop): Controla el aire arriba.
       - min-h-[85vh]: Evita que la sección se vea gigante en monitores grandes.
    */
    <section id="hero" className="min-h-[85vh] bg-[#0a0a0a] flex items-center justify-center p-6 pt-4 md:pt-1">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* BANNER IZQUIERDA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="w-full md:w-1/2 flex justify-center"
        >
          {/* max-h-[40vh]: Controla que la imagen no empuje demasiado el contenido hacia abajo en móvil */}
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="w-full max-w-[320px] md:max-w-full max-h-[40vh] md:max-h-none object-contain" 
          />
        </motion.div>

        {/* TARJETA DE TEXTO */}
        <div className="w-full md:w-1/2 relative">
          {/* p-6 (Móvil) / p-12 (Desktop): Reduce el aire interno de la tarjeta */}
          <div className="bg-white rounded-[30px] p-8 md:p-12 min-h-[250px] md:min-h-[300px] flex flex-col justify-center relative z-10">
            
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[#0a0a0a] text-base md:text-lg font-medium leading-relaxed text-center md:text-left"
              >
                {tabs.find(t => t.id === activeTab)?.content}
              </motion.p>
            </AnimatePresence>

            {/* CONTENEDOR DE BOTONES */}
            <div className="absolute 
              bottom-[-40px] left-1/2 -translate-x-1/2 flex flex-row gap-4 
              md:bottom-auto md:left-[-45px] md:top-1/2 md:-translate-y-1/2 md:flex-col md:translate-x-0">
              
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg transition-colors duration-300 z-[120]
                    ${activeTab === tab.id ? 'text-[#0a0a0a]' : 'text-white'}`}
                >
                  <span className="relative z-[130]">{tab.id}</span>
                  
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="hero-liquid"
                      className="absolute bg-white z-[100] inset-0
                        top-[-12px] rounded-b-[100px] rounded-t-none  /* Móvil: se une arriba */
                        md:top-0 md:right-[-12px] md:rounded-l-[100px] md:rounded-r-none /* Desktop: se une a la derecha */
                      "
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* --- CURVAS CÓNCAVAS (Corrección de orientación) --- */}
                      
                      {/* Escritorio (Solo visibles en md:) */}
                      <div className="absolute bg-white hidden md:block -right-[1px] -top-[15px] w-[15px] h-[15px]" 
                           style={{ background: 'radial-gradient(circle at 0% 0%, transparent 15px, white 16px)' }} />
                      <div className="absolute bg-white hidden md:block -right-[1px] -bottom-[15px] w-[15px] h-[15px]" 
                           style={{ background: 'radial-gradient(circle at 0% 100%, transparent 15px, white 16px)' }} />
                           
                      {/* Móvil (Ocultas en md:) */}
                      <div className="absolute bg-white md:hidden -top-[1px] -right-[15px] w-[15px] h-[15px]" 
                           style={{ background: 'radial-gradient(circle at 100% 100%, transparent 15px, white 16px)' }} />
                      <div className="absolute bg-white md:hidden -top-[1px] -left-[15px] w-[15px] h-[15px]" 
                           style={{ background: 'radial-gradient(circle at 0% 100%, transparent 15px, white 16px)' }} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;