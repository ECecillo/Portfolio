import React from 'react';
import { Container } from './LayoutStyles'
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';



export default function Layout({children}) {
    const router = useRouter();
    const lang = router.locale;
    return (
        <Container>
            <Header language={lang}/>
            {children}
        </Container>
    );
};