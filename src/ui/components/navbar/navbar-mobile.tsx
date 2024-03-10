import logo from '@/assets/logo/portfolio-logo.webp';

function NavbarMobile({ logoFilter }: { logoFilter: string }) {
  return (
    <div className="flex flex-col justify-around items-center my-8">
      <picture className="w-1/3 " style={{ filter: logoFilter }}>
        <img srcSet={logo} alt="Logo du site" />
      </picture>
    </div>
  );
}

export default NavbarMobile;
