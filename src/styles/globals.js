// Reference : https://scalablecss.com/styled-components-global-styles/

import { createGlobalStyle } from 'styled-components';

// normalize est un fichier css permettant une meilleur compatibilité cross navigateur.
import { normalize } from 'styled-normalize';

// On définit notre composant globale, le DOM va l'ajouter à l'arbre des composants et injecter le style globale à tous les composants.

const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: ${(props) => props.theme.fonts.special};
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.color};
        cursor: default;
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
    h1,h2,h3,h4, h5, h6, button {
        font-family: ${(props) => props.theme.fonts.title};
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`;

export default GlobalStyles;
