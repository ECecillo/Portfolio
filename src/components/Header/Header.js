import React from "react";
// module de nextjs permettant de faire les liens entre les pages plus facilement avec le composant <Link>
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, LinkDiv, NavLink } from "./HeaderStyles"


export default function Header() {
    let userLa = navigator.language || navigator.userLanguage; // Récupère la langue du navigateur.
    return (
        <Container>
            <LinkDiv>
                <li>
                    <Link href="/">
                     <NavLink>Accueil</NavLink>   
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                     <NavLink>Projets</NavLink>   
                    </Link>
                </li>
                <li>
                    <Link href="/">
                     <NavLink></NavLink>   
                    </Link>
                </li>
            </LinkDiv>
        </Container>
    )
};