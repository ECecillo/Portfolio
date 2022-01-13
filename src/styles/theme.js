// Fichier dans lequel on va définir les styles générales à charger dès le début.

import React from 'react';
import {ThemeProvider} from 'styled-components';

// Fichier dans lequel on définit les règles css (root, Fonts, variable breakpoints, ...) 
import theme from '../themes/default';
// Fichier où on va mettre toutes les propriétés de bases pour nos tags.
import GlobalStyles from './globals';

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {/* Reste de la page */}
            {children} 
        </ThemeProvider>
    )
};
