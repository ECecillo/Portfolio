import React from 'react';
import logo from '../../../public/images/Logo.png';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import {
  BrandClose,
  BrandDiv,
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarIcons,
  SidebarLink,
  SidebarMenu,
  SidebarSocial,
} from './SidebarStyles';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../Header/data/data';
import { useContext } from 'react';
import { ThemeContext } from '../../themes/context';

export default function Sidebar(props) {
  let localLanguage = props.language;
  
  const themeContext= useContext(ThemeContext);
  const changeTheme = () => themeContext.toggler();
  
  const applyFilter =
    props.theme === 'dark'
      ? 'invert(100%) sepia(100%) saturate(1%) hue-rotate(176deg) brightness(94%) contrast(100%)'
      : '';

  let textLanguage =
    localLanguage === 'fr'
      ? Navbar.fr.map((element) => (
          <li key={element}>
            <Link
              href={
                element === 'Accueil' || element === 'Home' ? '/' : '#' + element
              }
            >
              <SidebarLink onClick={props.toggle}>{element}</SidebarLink>
            </Link>
          </li>
        ))
      : Navbar.en.map((element) => (
          <li key={element}>
            <Link
              href={
                element === 'Accueil' || element === 'Home' ? '/' : '#' + element
              }
            >
              <SidebarLink onClick={props.toggle}>{element}</SidebarLink>
            </Link>
          </li>
        ));
  // On va charger dynamiquement le code de la sidebar en fonction de la variable isMobile (évite d'ajouter du code html pour rien).
  return (
    <>
      {props.isMobile ? (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
          <BrandClose>
            <BrandDiv style={{ filter: applyFilter }}>
              <Image src={logo} href="/" alt="Logo du site" />
            </BrandDiv>
            <Icon onClick={props.toggle}>
              <CloseIcon />
            </Icon>
          </BrandClose>
          <SidebarMenu>{textLanguage}</SidebarMenu>
          <SidebarSocial>
            <SidebarIcons>
              <Link href={'/'} locale={localLanguage === 'en-US' ? 'fr' : 'en-US'}>
                <AiOutlineGlobal size="2rem" />
              </Link>
            </SidebarIcons>
            <SidebarIcons>
              <FiMoon size="2rem" onClick={changeTheme} />
            </SidebarIcons>
            <SidebarIcons href="https://github.com/ECecillo">
              <AiFillGithub size="2rem" />
            </SidebarIcons>
            <SidebarIcons href="https://twitter.com/EnzoCECILLON1">
              <AiFillTwitterCircle size="2rem" />
            </SidebarIcons>
            <SidebarIcons href="https://www.linkedin.com/in/enzo-cecillon-27142a145/">
              <AiFillLinkedin size="2rem" />
            </SidebarIcons>
          </SidebarSocial>
        </SidebarContainer>
      ) : (
        <div></div>
      )}
    </>
  );
}
