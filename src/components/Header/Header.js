import React from 'react';
// module de nextjs permettant de faire les liens entre les pages plus facilement avec le composant <Link>
import Link from 'next/link';
import Image from 'next/image';
import { FiMoon } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from 'react-icons/ai';
import {
  Container,
  LinkDiv,
  LogoDiv,
  MobileIcon,
  NavLink,
  SocialDiv,
  SocialIcons,
} from './HeaderStyles';

import logo from '../../../public/images/Logo.png';
import { FadeSection } from '../../styles/GlobalComponentsStyles/globalC';
import { Navbar } from './data/data';
import { useContext } from 'react';
import { ThemeContext } from '../../themes/context';

export default function Header(props) {
  let localLanguage = props.language;
  const themeContext = useContext(ThemeContext);

  const changeTheme = () => themeContext.toggler();

  const applyFilter =
    themeContext.ambientTheme === 'dark'
      ? 'invert(100) sepia(0) saturate(1) hue-rotate(0deg) brightness(100)'
      : 'invert(0) sepia(0) saturate(0) brightness(0)';

  const Navbar_Content = localLanguage === 'fr' ? Navbar.fr : Navbar.en;

  let textLanguage = Navbar_Content.map((element) => (
    <li key={element}>
      <Link href={element === 'Accueil' || element === 'Home' ? '/' : '#' + element}>
        <NavLink>{element}</NavLink>
      </Link>
    </li>
  ));

  return (
    <FadeSection fadeSpeed={'1.5s'} typeTime={'1.5s'}>
      <Container>
        <LogoDiv style={{ filter: applyFilter }}>
          <Image src={logo} alt="Logo du site" href="/" />
        </LogoDiv>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <LinkDiv>{textLanguage}</LinkDiv>
        <SocialDiv>
          <SocialIcons style={{ cursor: 'pointer' }}>
            <Link href={'/'} locale={localLanguage === 'en-US' ? 'fr' : 'en-US'}>
              <AiOutlineGlobal size="2rem" />
            </Link>
          </SocialIcons>
          <SocialIcons style={{ cursor: 'pointer' }}>
            <FiMoon size="2rem" onClick={changeTheme} />
          </SocialIcons>
          <SocialIcons href="https://github.com/ECecillo">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/EnzoCECILLON1">
            <AiFillTwitterCircle size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/enzo-cecillon-27142a145/">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
        </SocialDiv>
      </Container>
    </FadeSection>
  );
}
