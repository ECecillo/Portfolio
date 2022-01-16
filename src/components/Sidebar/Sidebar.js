import React from 'react'
import logo from "../../../public/images/Logo.png"
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiOutlineGlobal
} from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import {
    BrandDiv,
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarIcons,
    SidebarLink,
    SidebarMenu,
    SidebarSocial,
    SidebarWrapper
} from './SidebarStyles';
import Link from "next/link";
import Image from 'next/image';
import { LogoDiv } from '../Header/HeaderStyles';




export default function Sidebar(props) {
    let localLanguage = props.language;
    const Navbar = [
        {
            "fr": ["Accueil", "Moi", "Projets"],
            "en": ["Home", "Me", "Projects"]
        }
    ];
    let textLanguage = localLanguage === "fr" ? Navbar[0].fr.map(element =>
        <li key={element}>
            <Link href={element === "Accueil" || element === "Home" ? "/" : "#" + element}>
                <SidebarLink onClick={props.toggle}>{element}</SidebarLink>
            </Link>
        </li>
    ) : Navbar[0].en.map(element =>
        <li key={element}>
            <Link href={element === "Accueil" || element === "Home" ? "/" : "#" + element}>
                <SidebarLink onClick={props.toggle}>{element}</SidebarLink>
            </Link>
        </li>
    );
    // On va charger dynamiquement le code de la sidebar en fonction de la variable isMobile (évite d'ajouter du code html pour rien).
    return (
        <>
            {props.isMobile ?
                <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
                    <BrandDiv>
                        <Image src={logo} href="/" alt="Logo du site"/>
                    </BrandDiv>
                    <Icon onClick={props.toggle}>
                        <CloseIcon />
                    </Icon>
                    <SidebarMenu>
                        {textLanguage}
                    </SidebarMenu>
                    <SidebarSocial>
                        <SidebarIcons>
                            <AiOutlineGlobal size="2rem" />
                        </SidebarIcons>
                        <SidebarIcons>
                            <FiMoon size="2rem" />
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
                :
                <div></div>
            }
        </>
    )
}
