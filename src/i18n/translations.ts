export const translations = {
  pt: {
    nav: { about: 'Sobre', technologies: 'Tecnologias', experience: 'Experiência', projects: 'Projetos', contact: 'Contato' },
    technologies: { title: 'Tecnologias' },
    hero: { greeting: 'Olá, meu nome é', role: 'Senior Frontend Developer', bio: 'Mais de 10 anos construindo interfaces modernas, acessíveis, com suporte a PWA e bem testadas — com Jest, React Testing Library, Cypress e Playwright. Atualmente na Ci&T.', stats: { years: 'anos de experiência', projects: 'projetos entregues', companies: 'empresas', stacks: 'stacks principais' } },
    experience: {
      title: 'Experiência',
      present: 'presente',
      earlier: 'Anteriormente',
      earlierDesc: 'Capgemini, Accenture, FCamara, Solutis, Mazzatech, Iteris (2013–2021) — projetos em Angular, Vue.js, PHP, Java Spring Boot e React, em setores como financeiro, varejo e setor público.',
    },
    about: {
      title: 'Sobre',
      text: 'Desenvolvedor Frontend Sênior com mais de 10 anos de experiência construindo interfaces modernas com React, Next.js e TypeScript. Apaixonado por performance, acessibilidade e boas práticas de desenvolvimento.',
    },
    projects: {
      title: 'Projetos',
      monthctrl: { description: 'Aplicação web para controle financeiro mensal, com suporte a múltiplas moedas, registro de entradas e saídas e exportação de dados.' },
      cyclehabits: { description: 'PWA para acompanhamento de hábitos diários como vitaminas, treinos e rotinas, com notificações push e suporte multilíngue. Pode ser instalado como app no celular.' },
      awakeui: { description: 'Biblioteca de componentes UI para React, inspirada no Material UI, para uso em projetos pessoais e profissionais.' },
      awakr: { description: 'Site institucional para criação de sites para restaurantes e negócios locais, com CMS Sanity, domínio próprio e PWA.' },
    },
    contact: { title: 'Contato' },
  },
  en: {
    nav: { about: 'About', technologies: 'Technologies', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    technologies: { title: 'Technologies' },
    hero: { greeting: 'Hi, my name is', role: 'Senior Frontend Developer', bio: 'Over 10 years building modern, accessible, PWA-ready and well-tested interfaces — with Jest, React Testing Library, Cypress and Playwright. Currently at Ci&T.', stats: { years: 'years of experience', projects: 'projects delivered', companies: 'companies', stacks: 'main stacks' } },
    experience: {
      title: 'Experience',
      present: 'present',
      earlier: 'Earlier',
      earlierDesc: 'Capgemini, Accenture, FCamara, Solutis, Mazzatech, Iteris (2013–2021) — projects in Angular, Vue.js, PHP, Java Spring Boot and React, across financial, retail and public sector industries.',
    },
    about: {
      title: 'About',
      text: 'Senior Frontend Developer with over 10 years of experience building modern interfaces with React, Next.js and TypeScript. Passionate about performance, accessibility and best development practices.',
    },
    projects: {
      title: 'Projects',
      monthctrl: { description: 'Web app for monthly financial control, supporting multiple currencies, income and expense tracking, and data export.' },
      cyclehabits: { description: 'PWA for tracking daily habits like vitamins, workouts and routines, with push notifications and multilingual support. Can be installed as an app on your phone.' },
      awakeui: { description: 'UI component library for React, inspired by Material UI, for use in personal and professional projects.' },
      awakr: { description: 'Institutional website for restaurant and local business site creation, with Sanity CMS, custom domain and PWA.' },
    },
    contact: { title: 'Contact' },
  },
  es: {
    nav: { about: 'Sobre mí', technologies: 'Tecnologías', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    technologies: { title: 'Tecnologías' },
    hero: { greeting: 'Hola, mi nombre es', role: 'Desarrollador Frontend Senior', bio: 'Más de 10 años construyendo interfaces modernas, accesibles, con soporte PWA y bien testeadas — con Jest, React Testing Library, Cypress y Playwright. Actualmente en Ci&T.', stats: { years: 'años de experiencia', projects: 'proyectos entregados', companies: 'empresas', stacks: 'stacks principales' } },
    experience: {
      title: 'Experiencia',
      present: 'presente',
      earlier: 'Anteriormente',
      earlierDesc: 'Capgemini, Accenture, FCamara, Solutis, Mazzatech, Iteris (2013–2021) — proyectos en Angular, Vue.js, PHP, Java Spring Boot y React, en sectores financiero, retail y sector público.',
    },
    about: {
      title: 'Sobre mí',
      text: 'Desarrollador Frontend Senior con más de 10 años de experiencia construyendo interfaces modernas con React, Next.js y TypeScript. Apasionado por el rendimiento, la accesibilidad y las buenas prácticas de desarrollo.',
    },
    projects: {
      title: 'Proyectos',
      monthctrl: { description: 'Aplicación web para control financiero mensual, con soporte a múltiples monedas, registro de ingresos y gastos y exportación de datos.' },
      cyclehabits: { description: 'PWA para seguimiento de hábitos diarios como vitaminas, ejercicios y rutinas, con notificaciones push y soporte multilingüe. Se puede instalar como app en el móvil.' },
      awakeui: { description: 'Biblioteca de componentes UI para React, inspirada en Material UI, para uso en proyectos personales y profesionales.' },
      awakr: { description: 'Sitio institucional para la creación de sitios web para restaurantes y negocios locales, con CMS Sanity, dominio propio y PWA.' },
    },
    contact: { title: 'Contacto' },
  },
} as const;

export type Language = keyof typeof translations;
