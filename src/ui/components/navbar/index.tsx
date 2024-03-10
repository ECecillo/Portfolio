import { useTheme } from '@/ui/context/theme-provider';

import Desktop from '@/ui/components/desktop';
import Mobile from '@/ui/components/mobile';
import NavbarMobile from './navbar-mobile';
import NavbarDesktop from './navbar-desktop';

export default function Navbar() {
  //FIXME: create context that fetch user data and broadcast to components

  // const localLanguage = props.language;
  const { theme } = useTheme();

  const applyFilter =
    theme === 'dark'
      ? 'invert(100) sepia(0) saturate(1) hue-rotate(0deg) brightness(100)'
      : 'invert(0) sepia(0) saturate(0) brightness(0)';

  return (
    // TODO: Créer au niveau de tailwind une keyframe pour le fade
    <div>
      {/* <FadeSection fadeSpeed={'4s'} typeTime={'3s'}> */}
      <Mobile>
        <NavbarMobile logoFilter={applyFilter} />
      </Mobile>
      <Desktop>
        <NavbarDesktop logoFilter={applyFilter} />
      </Desktop>
    </div>
  );
}
