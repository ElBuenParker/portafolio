export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Logo del proyecto
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "UGGA CONCEPT STORE",
    description: "Tienda en línea enfocada en Shopify, optimizada para mejorar la experiencia de compra clara, moderna y funcional.",
    image: "/src/assets/projects/ugga.png", // Ajusta la ruta a tus assets
  },
  {
    id: 2,
    title: "INTERCHANGE",
    description: "Plataforma diseñada para facilitar servicios financieros de forma clara y confiable.",
    image: "/src/assets/projects/interchange.png",
  },
  {
    id: 3,
    title: "KAIZEN TALENT",
    description: "Plataforma orientada a la vinculación y gestión de talento con un enfoque en agilidad y eficiencia.",
    image: "/src/assets/projects/kaizen.png",
  },
  {
    id: 4,
    title: "PRÓXIMAMENTE...",
    description: "Nuevos proyectos en desarrollo enfocados en soluciones escalables.",
    image: "", // Puedes dejarlo vacío para el placeholder
  },
];