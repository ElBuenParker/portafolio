import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    title: "DESARROLLO DE TIENDAS EN SHOPIFY",
    description: "Creación de tiendas online listas para vender, con una estructura clara, diseño funcional y enfoque en experiencia de usuario y conversión.",
  },
  {
    title: "REDISEÑO DE ECOMMERCE",
    description: "Optimización de tiendas existentes mediante mejoras en estructura, diseño y flujo de compra, buscando una experiencia más clara, moderna y efectiva.",
  },
  {
    title: "OPTIMIZACION DE TIENDAS ONLINE",
    description: "Mejoras enfocadas en rendimiento, navegación y usabilidad para potenciar el desempeño general del sitio.",
  },
  {
    title: "LANDING PAGES Y SITIOS WEB (FRONT END)",
    description: "Desarrollo de páginas y sitios web enfocados en frontend, ideales para presentar productos, servicios o campañas con una estructura clara, moderna y funcional.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-6 max-w-4xl mx-auto bg-[#0a0a0a]">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white uppercase"
      >
        SERVICIOS
      </motion.h2>

      <div className="space-y-4">
        {servicesData.map((service, index) => (
          <div key={index} className="overflow-hidden">
            {/* Cabecera del Acordeón */}
            <button
              onClick={() => toggleService(index)}
              className={`w-full flex justify-between items-center p-6 rounded-2xl border border-white/10 transition-all duration-500 ${
                openIndex === index 
                ? 'bg-white text-[#cccccc]' 
                : 'bg-[#1a1a1a] text-white hover:bg-[#252525]'
              }`}
            >
              <span className="text-[11px] md:text-sm font-black tracking-[0.15em] text-left uppercase">
                {service.title}
              </span>
              
              {/* Icono de estado [+] o [x] */}
              <motion.span 
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                className="text-xl font-light"
              >
                {openIndex === index ? '+' : '[+]'}
              </motion.span>
            </button>

            {/* Contenido Desplegable */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="bg-white text-black p-8 mt-2 rounded-2xl shadow-xl">
                    <p className="text-sm md:text-base leading-relaxed font-bold">
                      {service.description}
                    </p>
                    
                  <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setOpenIndex(null)}
                    className="group flex items-center gap-2 px-4 py-2 bg-black rounded-full transition-all hover:bg-[#252525] active:scale-95"
                  >
                    <span className="text-[9px] font-black text-black uppercase tracking-[0.2em]">
                      Mostrar menos
                    </span>
                    <span className="text-white text-xs group-hover:rotate-90 transition-transform duration-300">
                      —
                    </span>
                  </button>
                </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;