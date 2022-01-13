import React from "react";
// module de nextjs permettant de faire les liens entre les pages plus facilement avec le composant <Link>
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, PageLink } from "./HeaderStyles"


export default function Header() {
    return (
        <Container>
            <PageLink>
                <li>
                    <Link href="/">
                        Accueil
                    </Link>
                </li>
            </PageLink>
        </Container>
    )
};