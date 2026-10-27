export const translations = {
  pt: {
    nav: { about: 'Sobre', projects: 'Projetos', contact: 'Contato' },
    hero: { greeting: 'Olá, meu nome é', role: 'Senior Frontend Developer' },
    about: {
      title: 'Sobre',
      text: 'Desenvolvedor Frontend Sênior com mais de 10 anos de experiência construindo interfaces modernas com React, Next.js e TypeScript. Apaixonado por performance, acessibilidade e boas práticas de desenvolvimento.',
    },
    projects: {
      title: 'Projetos',
      monthctrl: { description: 'Gerenciador de tarefas mensais com foco em produtividade e organização pessoal.' },
      awakeui: { description: 'Biblioteca de componentes UI para React, inspirada no Material UI, para uso em projetos pessoais e profissionais.' },
      awakr: { description: 'Site institucional para criação de sites para restaurantes e negócios locais, com CMS Sanity, domínio próprio e PWA.' },
    },
    contact: { title: 'Contato' },
  },
  en: {
    nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
    hero: { greeting: 'Hi, my name is', role: 'Senior Frontend Developer' },
    about: {
      title: 'About',
      text: 'Senior Frontend Developer with over 10 years of experience building modern interfaces with React, Next.js and TypeScript. Passionate about performance, accessibility and best development practices.',
    },
    projects: {
      title: 'Projects',
      monthctrl: { description: 'Monthly task manager focused on productivity and personal organization.' },
      awakeui: { description: 'UI component library for React, inspired by Material UI, for use in personal and professional projects.' },
      awakr: { description: 'Institutional website for restaurant and local business site creation, with Sanity CMS, custom domain and PWA.' },
    },
    contact: { title: 'Contact' },
  },
  es: {
    nav: { about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    hero: { greeting: 'Hola, mi nombre es', role: 'Desarrollador Frontend Senior' },
    about: {
      title: 'Sobre mí',
      text: 'Desarrollador Frontend Senior con más de 10 años de experiencia construyendo interfaces modernas con React, Next.js y TypeScript. Apasionado por el rendimiento, la accesibilidad y las buenas prácticas de desarrollo.',
    },
    projects: {
      title: 'Proyectos',
      monthctrl: { description: 'Gestor de tareas mensuales enfocado en la productividad y organización personal.' },
      awakeui: { description: 'Biblioteca de componentes UI para React, inspirada en Material UI, para uso en proyectos personales y profesionales.' },
      awakr: { description: 'Sitio institucional para la creación de sitios web para restaurantes y negocios locales, con CMS Sanity, dominio propio y PWA.' },
    },
    contact: { title: 'Contacto' },
  },
} as const;

export type Language = keyof typeof translations;
