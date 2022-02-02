import React, { useState } from 'react';
import { Container } from './LayoutStyles'
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar/Sidebar';
import useWindowSize from '../hooks/WindowSize/UseWindowSize';

export default function Layout(props) {

    /* React Hook qui permettra d'activer la sidebar */
    const [isOpen, setIsOpen] = useState(false);
    /* Fonction qui change l'état de isOpen */
    const sideBar = () => {
        setIsOpen(!isOpen);
    }
    // Le Handler qui nous permettra de changer l'état du Theme qui vient de index.js.
    const themeToggler = props.toggler;

    /* Langue */
    const router = useRouter();
    const lang = router.locale;


    /* Screen Size Hook cf(UseWindowSize.js) */
    const size = useWindowSize();

    // true : la taille de la fenêtre est un 📱 .
    // false : ~ (//).
    const isMobile = size.width <= 640 ? true : false;

    return (
        <Container>
            <Sidebar
                isMobile={isMobile}
                isOpen={isOpen}
                toggle={sideBar}
                toggleTheme={themeToggler}
                theme={props.theme}
                language={lang} />

            <Header
                language={lang}
                toggle={sideBar}
                toggleTheme={themeToggler}
                theme={props.theme}/>

            {props.children}
        </Container>
    );
};