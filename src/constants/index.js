import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  vistajet,
  genki,
  vodafone,
  globo,
  cvc,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Virgos IP Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2015 - Out 2015',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Runweb Desenvolvimento de Sistemas',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2015 - Jul 2017',
  },
  {
    title: 'Front End Developer',
    company_name: 'Monitora Solucoes Tecnologicas',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2017 - Apr 2019',
  },
  {
    title: 'Front End Developer',
    company_name: 'Liber Capital ',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Apr 2019 - Set 2019',
  },
  {
    title: 'Front End Developer',
    company_name: 'CVC CORP ',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Set 2019 - Feb 2021',
  },
  {
    title: 'Front End Developer',
    company_name: 'Globo ',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2021 - Jul 2022',
  },
  {
    title: 'Front End Developer',
    company_name: 'Capgemini Engineering',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'VistaJet',
    description: 'VistaJet is a global business aviation company. The firm flies between any two points, under a "pay for hours flown" fare structure.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: vistajet,
    demo: 'https://www.vistajet.com/',
  },
  {
    id: 'project-2',
    name: 'globo.com',
    description: 'This is the most accessed news portal in Brazil',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: globo,
    demo: 'https://www.globo.com/',
  },
  {
    id: 'project-3',
    name: 'CVC Corp',
    description:
      'CVC CORP is a holding of companies in the tourism sector.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: cvc,
    demo: 'https://www.cvc.com.br/pacotes-turisticos',
  },
  {
    id: 'project-4',
    name: 'Vodafone',
    description: `Vodafone is a multinational mobile operator and currently has interests in 25 countries and partner networks in over 42 countries.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'graphql',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: vodafone,
    demo: 'https://www.vodacombusiness.co.za/business/v-hub/',
  },
  {
    id: 'project-5',
    name: 'Genki',
    description:
      'Travel health insurance for digital nomads.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'graphql',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: genki,
    demo: 'https://genki-test.com/',
  },
];

export { services, technologies, experiences, projects };
