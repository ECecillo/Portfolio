import React from "react";
// module de nextjs permettant de faire les liens entre les pages plus facilement avec le composant <Link>
import Link from "next/link";
import Image from 'next/image';
import { FiMoon } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGlobal } from 'react-icons/ai';
import { Container, LinkDiv, LogoDiv, NavLink, SocialDiv, SocialIcons } from "./HeaderStyles"
import { Navbar, } from "../../constants/site";
import logo from "../../../public/images/Logo.png";

export default function Header(props) {
    //let textLink = [];
    let l = props.language;
    let textLanguage = l === "fr" ? Navbar[0].fr.map(element =>
        <li key={element}>
            <Link href={element === "Accueil" || element === "Home" ? "/" : "#" + element}>
                <NavLink>{element}</NavLink>
            </Link>
        </li>
    ) : Navbar[0].en.map(element =>
        <li key={element}>
            <Link href="/">
                <NavLink>{element}</NavLink>
            </Link>
        </li>
    );
    return (
        <Container>
            <LinkDiv>
                {textLanguage}
            </LinkDiv>
            <LogoDiv>
                <Image src={logo} alt="Logo du site" />
            </LogoDiv>
            <SocialDiv>
                <SocialIcons>
                    <AiOutlineGlobal size="2rem" />
                </SocialIcons>
                <SocialIcons>
                    <FiMoon size="2rem"/>
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
    )
};