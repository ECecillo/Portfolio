import logo from '@/assets/logo/portfolio-logo.webp';

import PageLinks from '@/ui/components/page-links';
import SocialList from '@/ui/components/socials';
import ControlList from '@/ui/components/controls';

function NavbarDesktop({ logoFilter }: { logoFilter: string }) {
  return (
    <div className="flex flex-col justify-around items-center lg:flex-row">
      <div className="flex flex-col lg:flex-row">
        <PageLinks />
      </div>
      <picture className="w-1/3" style={{ filter: logoFilter }}>
        <img srcSet={logo} alt="Logo du site" />
      </picture>
      <div className="flex flex-row">
        <ControlList />
      </div>
      <div className="flex flex-row">
        <SocialList />
      </div>
    </div>
  );
}

export default NavbarDesktop;
