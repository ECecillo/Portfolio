import logo from '@/assets/logo/portfolio-logo.webp';
import ControlList from '@/ui/components/controls';
import SocialList from '@/ui/components/socials';
import { useTheme } from '@/ui/context/theme-provider';

export default function Navbar() {
  //FIXME: create context that fetch user data and broadcast to components

  // const localLanguage = props.language;
  const { theme } = useTheme();

  const applyFilter =
    theme === 'dark'
      ? 'invert(100) sepia(0) saturate(1) hue-rotate(0deg) brightness(100)'
      : 'invert(0) sepia(0) saturate(0) brightness(0)';

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
  const LinkList = links.map((link, index) => (
    <a key={index} href={link.link} style={{ cursor: 'pointer' }}>
      {link.label}
    </a>
  ));

  return (
    // TODO: Créer au niveau de tailwind une keyframe pour le fade
    <div className="flex flex-col justify-around items-center lg:flex-row">
      {/* <FadeSection fadeSpeed={'4s'} typeTime={'3s'}> */}
      <div className="flex flex-col lg:flex-row">{LinkList}</div>
      <picture className="w-1/3" style={{ filter: applyFilter }}>
        <img srcSet={logo} alt="Logo du site" />
      </picture>
      <div className="flex flex-row">
        <ControlList />
      </div>
      <div className="flex flex-row">
        <SocialList />
      </div>
      {/* <MobileIcon onClick={props.toggle}>
        <FaBars />
      </MobileIcon> */}
      {/* </FadeSection> */}
    </div>
  );
}
