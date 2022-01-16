import React from "react";
// module de nextjs permettant de faire les liens entre les pages plus facilement avec le composant <Link>
import Link from "next/link";
import Image from 'next/image';
import { FiMoon } from "react-icons/fi";
import { FaBars } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGlobal } from 'react-icons/ai';
import {  Container, LinkDiv, LogoDiv, MobileIcon, NavLink, SocialDiv, SocialIcons } from "./HeaderStyles"
import logo from "../../../public/images/Logo.png";
import { FadeSection } from "../../styles/GlobalComponentsStyles/globalC";

export default function Header(props) {
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
                <NavLink>{element}</NavLink>
            </Link>
        </li>
    ) : Navbar[0].en.map(element =>
        <li key={element}>
            <Link href={element === "Accueil" || element === "Home" ? "/" : "#" + element}>
                <NavLink>{element}</NavLink>
            </Link>
        </li>
    );
    return (
        <FadeSection low>
            <Container>
                <LogoDiv>
                    <Image src={logo} alt="Logo du site" href="/"/>
                </LogoDiv>
                <MobileIcon onClick={props.toggle}>
                    <FaBars />
                </MobileIcon>
                <LinkDiv>
                    {textLanguage}
                </LinkDiv>
                <SocialDiv>
                    <SocialIcons>
                        <AiOutlineGlobal size="2rem" />
                    </SocialIcons>
                    <SocialIcons>
                        <FiMoon size="2rem" />
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
    )
};