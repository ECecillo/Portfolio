export const projects = [
  {
    fr : {
      title: 'KIWI',
      description: "Application Web qui a pour vocation de regrouper différents services de musiques sur une seule plateforme. Réalisé avec Next-Auth, NextJS et TailwindCSS...",
    },
    en : {
      title: "KIWI",
      description: "Web App that aims to centralise different music services on one platform. Made with NextJS, Next-Auth and TailwindCSS..."
    },
    image: '/images/11.gif',
    tags: ['React', 'NextJS', 'JS','CSS', 'HTML', 'TailwindCSS', 'Figma', 'Prisma', 'SQL'],
    source: 'https://github.com/ECecillo/KIWI',
    visit:'',
    id: 0,
  },
  {
    fr : {
      title: 'Clone Spotify',
      description: "Application web qui permet d'écouter de la musique en utilisant l'API de Spotify réalisé avec Next-Auth, NextJS et TailwindCSS.",
    },
    en : {
      title: "Spotify Clone",
      description: "Using the Spotify API, the users can listen to the songs that are nested inside their playlist. Made with NextJS, Next-Auth and TailwindCSS...."
    },
    image: '/images/10.png',
    tags: ['JS', 'React', 'NextJS', 'CSS', 'HTML', 'TailwindCSS'],
    source: 'https://github.com/ECecillo/SpotifyClone',
    visit:'https://spotify-clone-ececillo.vercel.app',
    id: 1,
  },
  {
    fr : {
      title: 'Gestionnaire de QCM API',
      description: "Gestion des requêtes/réponses vers une API avec JS, affichages, créations, modifications des données à partir de la page.",
    },
    en : {
      title: "Questionnary API",
      description: "Fetch Data from an API and give you the oportunity to update, delete, and create new questions."
    },
    image: '/images/1.png',
    tags: ['JS', 'HTML', 'CSS'],
    source: 'https://github.com/ECecillo/Questionnary_API',
    visit:'',
    id: 2,
  },
  {
    fr : {      
      title: 'Portfolio',
      description: "En partant d'un design fait sur Figma j'ai du apprendre les frameworks React, NextJS et Styled Component pour réaliser ce projet..",
    },
    en : {
      title:"Portfolio",
      description:"Using Figma for the Design model, I learned how to use React, NextJS and Styled Component to build this site.",
    },
    image: '/images/2.png',
    tags: ['React', 'NextJS', 'Styled Component', 'JS', 'CSS', 'Figma'],
    source: 'https://github.com/ECecillo/Portfolio',
    visit:'',
    id: 3,
  },
  {
    fr : {
      title: 'Star wars Scene',
      description: "Création d'une scène avec des objets 3D, une cubemap, un Billboard, des images animés en utilisant la librairie GKIT.",
    },
    en : {
      title: "Star wars Scene",
      description: "Render a Static Scene with some 3D imported objets, a Cubemap, a Billboard and some images using GKIT."
    },
    image: '/images/3.png',
    tags: ['C++'],
    source: 'https://github.com/ECecillo/Star_Wars_Scene_GKIT',
    visit: '',
    id: 4,
  }, 
  {
    fr : {
      title: 'PinterestLike',
      description: "Reprend le principe de Pinterest en PHP et stock les données Utilisateurs/Images dans une DB MySQL.",
    },
    en : {
      title: "PinterestLike",
      description: "As in the famous website Pinterest, we show the pictures uploaded by some users stored in a database using PHP/MySQL."
    },
    image: '/images/4.png',
    tags: ['SQL', 'PHP', 'CSS'],
    source: 'https://github.com/ECecillo/PinterestLike',
    visit: '',
    id: 5,
  },
  {
    fr : {
      title: 'Uno',
      description: "Reproduction du jeux de cartes du Uno avec ces variantes et la possibilité de jouer avec une IA. Il y a 2 versions, une version texte et une version Graphique.",
    },
    en : {
      title: "Uno",
      description: "Trying to reproduce the famous game of Uno with its variant and the possibility to play with multiple AI. There are two versions, one Graphical and one in the CLI."
    },
    image: '/images/5.png',
    tags: ['C++', 'SDL'],
    source: 'https://github.com/ECecillo/Uno',
    visit: '',
    id: 6,
  },
  {
    fr : {
      title: 'A* Pathfinding',
      description: "Application de l'algorithme A* avec une visualisation du résultat finale dans le Terminale.",
    },
    en : {
      title: "A* Pathfinding",
      description: "Applying the principle of the Astar algorithm and visualizing the result in the CLI."
    },
    image: '/images/6.png',
    tags: ['C++'],
    source: 'https://github.com/ECecillo/Astar_Pathfinding',
    visit: '',
    id: 7,
  },
  {
    fr : {
      title: 'Memory',
      description: "Site qui regroupe des jeux de mémoires, réalisés avec HTML/CSS et JS Vanilla.",
    },
    en : {
      title: "Memory",
      description: "A website that groups some Memory games, realised in HTML/CSS and Vanilla JS."
    },
    image: '/images/7.png',
    tags: ['HTML', 'CSS', 'JS'],
    source: 'https://github.com/ECecillo/MemoryWeb',
    visit: 'http://ececillo.me/MemoryWeb/',
    id: 8,
  },
  {
    fr: {
      title: 'Arbre Rouge et Noir',
      description: "Visualisation et mesure des performances entre un Arbre Rouge et Noir et un Arbre Binaire de Recherche.",
    },
    en : {
      title: "Red Black Tree",
      description: "Visualizing and measuring the performances between a Red-Black Tree and a BST."
    },
    image: '/images/8.png',
    tags: ['C++'],
    source: 'https://github.com/ECecillo/Red_Black_Tree',
    visit: '',
    id: 9,
  },
  {
    fr : {
      title: 'Blog Prisma',
      description: "Blog basique fait avec NextJS et Prisma en ORM.",
    },
    en : {
      title: 'Prisma Blog',
      description: "Basic Blog using NextJS and Prisma."
    },
    image: '/images/9.png',
    tags: ['JS', 'React','NextJS', 'CSS', 'Prisma', 'SQL'],
    source: 'https://github.com/ECecillo/ececillo-blogr-nextjs-prisma',
    visit: 'https://ececillo-blogr-nextjs-prisma.vercel.app/',
    id: 10,
  }
];

export const Personnal_Info =
{
  recherche: true,
  fr: {
    Poste: "Développeur Web Front-End",
    Description: "Passionné par les nouvelles Technologies et la création d'Application depuis mon adolescence. Aujourd'hui, je code en C++, React/Nextjs et Javascript des projets en équipes ou en solo que je poste sur Github. N'hésitez pas à checker mes réseaux pour plus d'info 😉 , à très bientôt 😃.",
  },
  en: {
    Job: "Front-End Developer",
    Description: `
    Since I was a teenager, I've always been fascinated by new technologies and the process of creating applications. 
    Today, I code in C++,  React/Nextjs and Javascript, projects with a team or at Home, which I post on Github.
    Please feel free to check my socials (Linkedin, Twitter) and contact me if you need anything 😉 .See you soon!😃`,
  },
  Contact: {
    adress: "41 Vieille Route",
    city: "Chaponost",
    postal_code: "69630",
    phone: "+33 6 81 24 51 27",
    email: "enzo.cecillon@gmail.com"
  }
};