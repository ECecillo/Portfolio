import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';

export const projects = [
  {
    id: 0,
    image: '/images/12.png',
    tags: [],
    links: [
      {
        href: 'https://www.kestio.com/',
        icon: <AiFillPlayCircle size="3rem" />,
      },
    ],
    fr: {
      title: 'KestioLive',
      description: `Plateforme web centré sur l'accompagnement et la formation des entreprises clientes à travers des visio ou des ateliers en E-learning.
      Développé à l'aide de Meteor, Postgresql, React ...`,
    },
    en: {
      title: 'KLive',
      description:
        'Multi-purpose web platform focused on the support and training of client companies through digital tools. Developed with Meteor, Postgresql, React ...',
    },
  },
  {
    id: 1,
    tags: [
      'React',
      'NextJS',
      'JS',
      'CSS',
      'HTML',
      'TailwindCSS',
      'Figma',
      'Prisma',
      'SQL',
    ],
    image: '/images/11.gif',
    links: [
      {
        href: 'https://github.com/ECecillo/KIWI',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'KIWI',
      description:
        'Application Web qui a pour vocation de regrouper différents services de musiques sur une seule plateforme. Réalisé avec Next-Auth, NextJS et TailwindCSS...',
    },
    en: {
      title: 'KIWI',
      description:
        'Web App that aims to centralise different music services on one platform. Made with NextJS, Next-Auth and TailwindCSS...',
    },
  },
  {
    id: 2,
    image: '/images/10.png',
    tags: ['JS', 'React', 'NextJS', 'CSS', 'HTML', 'TailwindCSS'],
    links: [
      {
        href: 'https://github.com/ECecillo/SpotifyClone',
        icon: <AiFillGithub size="3rem" />,
      },
      {
        href: 'https://spotify-clone-ececillo.vercel.app',
        icon: <AiFillPlayCircle size="3rem" />,
      },
    ],
    fr: {
      title: 'Clone Spotify',
      description:
        "Application web qui permet d'écouter de la musique en utilisant l'API de Spotify réalisé avec Next-Auth, NextJS et TailwindCSS.",
    },
    en: {
      title: 'Spotify Clone',
      description:
        'Using the Spotify API, the users can listen to the songs that are nested inside their playlist. Made with NextJS, Next-Auth and TailwindCSS....',
    },
  },
  {
    id: 3,
    image: '/images/1.png',
    tags: ['JS', 'HTML', 'CSS'],
    links: [
      {
        href: 'https://github.com/ECecillo/Questionnary_API',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'Gestionnaire de QCM API',
      description:
        'Gestion des requêtes/réponses vers une API avec JS, affichages, créations, modifications des données à partir de la page.',
    },
    en: {
      title: 'Questionnary API',
      description:
        'Fetch Data from an API and give you the oportunity to update, delete, and create new questions.',
    },
  },
  {
    id: 4,
    image: '/images/2.png',
    tags: ['React', 'NextJS', 'Styled Component', 'JS', 'CSS', 'Figma'],
    links: [
      {
        href: 'https://github.com/ECecillo/Portfolio',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'Portfolio',
      description:
        "En partant d'un design fait sur Figma j'ai du apprendre les frameworks React, NextJS et Styled Component pour réaliser ce projet.",
    },
    en: {
      title: 'Portfolio',
      description:
        'Using Figma for the Design model, I learned how to use React, NextJS and Styled Component to build this site.',
    },
  },
  {
    id: 5,
    image: '/images/3.png',
    tags: ['C++'],
    links: [
      {
        href: 'https://github.com/ECecillo/Star_Wars_Scene_GKIT',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'Star wars Scene',
      description:
        "Création d'une scène avec des objets 3D, une cubemap, un Billboard, des images animés en utilisant la librairie GKIT.",
    },
    en: {
      title: 'Star wars Scene',
      description:
        'Render a Static Scene with some 3D imported objets, a Cubemap, a Billboard and some images using GKIT.',
    },
  },
  {
    id: 6,
    image: '/images/4.png',
    tags: ['SQL', 'PHP', 'CSS'],
    links: [
      {
        href: 'https://github.com/ECecillo/PinterestLike',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'PinterestLike',
      description:
        'Reprend le principe de Pinterest en PHP et stock les données Utilisateurs/Images dans une DB MySQL.',
    },
    en: {
      title: 'PinterestLike',
      description:
        'As in the famous website Pinterest, we show the pictures uploaded by some users stored in a database using PHP/MySQL.',
    },
  },
  {
    id: 7,
    image: '/images/5.png',
    tags: ['C++', 'SDL'],
    links: [
      {
        href: 'https://github.com/ECecillo/Uno',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'Uno',
      description:
        'Reproduction du jeux de cartes du Uno avec ces variantes et la possibilité de jouer avec une IA. Il y a 2 versions, une version texte et une version Graphique.',
    },
    en: {
      title: 'Uno',
      description:
        'Trying to reproduce the famous game of Uno with its variant and the possibility to play with multiple AI. There are two versions, one Graphical and one in the CLI.',
    },
  },
  {
    id: 8,
    image: '/images/6.png',
    tags: ['C++'],
    links: [
      {
        href: 'https://github.com/ECecillo/Astar_Pathfinding',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'A* Pathfinding',
      description:
        "Application de l'algorithme A* avec une visualisation du résultat finale dans le Terminale.",
    },
    en: {
      title: 'A* Pathfinding',
      description:
        'Applying the principle of the Astar algorithm and visualizing the result in the CLI.',
    },
  },
  {
    id: 9,
    image: '/images/7.png',
    tags: ['HTML', 'CSS', 'JS'],
    links: [
      {
        href: 'https://github.com/ECecillo/MemoryWeb',
        icon: <AiFillGithub size="3rem" />,
      },
      {
        href: 'http://ececillo.me/MemoryWeb/',
        icon: <AiFillPlayCircle size="3rem" />,
      },
    ],
    fr: {
      title: 'Memory',
      description:
        'Site qui regroupe des jeux de mémoires, réalisés avec HTML/CSS et JS Vanilla.',
    },
    en: {
      title: 'Memory',
      description:
        'A website that groups some Memory games, realised in HTML/CSS and Vanilla JS.',
    },
  },
  {
    id: 10,
    image: '/images/8.png',
    tags: ['C++'],
    links: [
      {
        href: 'https://github.com/ECecillo/Red_Black_Tree',
        icon: <AiFillGithub size="3rem" />,
      },
    ],
    fr: {
      title: 'Arbre Rouge et Noir',
      description:
        'Visualisation et mesure des performances entre un Arbre Rouge et Noir et un Arbre Binaire de Recherche.',
    },
    en: {
      title: 'Red Black Tree',
      description:
        'Visualizing and measuring the performances between a Red-Black Tree and a BST.',
    },
  },
  {
    id: 11,
    image: '/images/9.png',
    tags: ['JS', 'React', 'NextJS', 'CSS', 'Prisma', 'SQL'],
    links: [
      {
        href: 'https://github.com/ECecillo/ececillo-blogr-nextjs-prisma',
        icon: <AiFillGithub size="3rem" />,
      },
      {
        href: 'https://ececillo-blogr-nextjs-prisma.vercel.app/',
        icon: <AiFillPlayCircle size="3rem" />,
      },
    ],
    fr: {
      title: 'Blog Prisma',
      description: 'Blog basique fait avec NextJS et Prisma en ORM.',
    },
    en: {
      title: 'Prisma Blog',
      description: 'Basic Blog using NextJS and Prisma.',
    },
  },
];
