import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';

import { useTheme } from '@/ui/context/theme-provider';

export default function Navbar() {
  //FIXME: create context that fetch user data and broadcast to components

  // const localLanguage = props.language;
  const { theme, setTheme } = useTheme();
  // const changeTheme = () => themeContext.toggler();

  const applyFilter =
    theme === 'dark'
      ? 'invert(100) sepia(0) saturate(1) hue-rotate(0deg) brightness(100)'
      : 'invert(0) sepia(0) saturate(0) brightness(0)';

  // const Navbar_Content = localLanguage === 'fr' ? Navbar.fr : Navbar.en;

  // const textLanguage = Navbar_Content.map((element) => (
  //   <li key={element}>
  //     <Link
  //       href={element === 'Accueil' || element === 'Home' ? '/' : '#' + element}
  //       passHref>
  //       <NavLink>{element}</NavLink>
  //     </Link>
  //   </li>
  // ));

  //FIXME: use transaltion
  const links = [
    {
      label: 'Portrait',
      link: '/#portrait',
    },
    {
      label: 'Projets',
      link: '/#projects',
    },
  ];
  const linkList = links.map((link, index) => (
    <a key={index} href={link.link} style={{ cursor: 'pointer' }}>
      {link.label}
    </a>
  ));

  const socialIcons: {
    icon: JSX.Element;
    link?: string;
    onClick?: () => void;
  }[] = [
    {
      icon: <AiOutlineGlobal size="2rem" />,
      link: '/',
      onClick: () => {
        console.log('Change language 🌍');
        // changeLanguage();
      },
    },
    {
      icon: <FiMoon size="2rem" />,
      onClick: () => {
        console.log('Change theme 🎨');
        setTheme('dark');
      },
    },
    {
      icon: <AiFillGithub size="2rem" />,
      link: 'https://github.com/ececillo',
    },
    {
      icon: <AiFillTwitterCircle size="2rem" />,
      link: 'https://twitter.com/EnzoCECILLON1',
    },
    {
      icon: <AiFillLinkedin size="2rem" />,
      link: 'www.linkedin.com/in/ececillo',
    },
  ];

  const socialIconsList = socialIcons.map((socialIcon, index) => (
    <a
      key={index}
      href={socialIcon.link}
      onClick={socialIcon.onClick}
      style={{ cursor: 'pointer' }}>
      {socialIcon.icon}
    </a>
  ));

  return (
    // TODO: Créer au niveau de tailwind une keyframe pour le fade
    <div className="flex flex-col justify-around items-center lg:flex-row">
      {/* <FadeSection fadeSpeed={'4s'} typeTime={'3s'}> */}

      <div className="flex flex-col lg:flex-row">{linkList}</div>
      <div style={{ filter: applyFilter }}>
        <img src="https://via.placeholder.com/150" alt="Logo du site" />
      </div>
      <div className="flex flex-row">{socialIconsList}</div>

      {/* <MobileIcon onClick={props.toggle}>
        <FaBars />
      </MobileIcon> */}
      {/* </FadeSection> */}
    </div>
  );
}
