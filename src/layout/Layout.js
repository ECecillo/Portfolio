import { useRouter } from 'next/router'
import React from 'react';
import { Container } from './LayoutStyles'
import Header from '../components/Header/Header';



export default function Layout({children}) {
    //let userLa = navigator.language || navigator.userLanguage; // Récupère la langue du navigateur.
    const router = useRouter();
    return (
        <Container>
            <Header language={router.locale}/>
            {children}
        </Container>
    );
};