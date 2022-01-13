// Fichier dans lequel on va définir les styles générales à charger dès le début.

import { ThemeProvider } from 'styled-components';

// Fichier dans lequel on définit les règles css (root, Fonts, variable breakpoints, ...) 
import theme from '../themes/default';
// Fichier où on va mettre toutes les propriétés de bases pour nos tags.
import GlobalStyles from './globals';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;
