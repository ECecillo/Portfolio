// Composant qui utilise UseContext pour appliquer notre thème à toute l'app.
import { ThemeProvider } from 'styled-components';
// Fichier dans lequel on définit notre thème de l'app.
import theme from '../themes/default';
// Fichier où on va mettre toutes les propriétés de bases pour nos tags.
import GlobalStyles from './globals';

const Theme = (props) => {

    // Get the state variable that define the theme of the page.
    const AmbientTheme = props.children.props.ambientTheme;

    return (
        <ThemeProvider theme={theme[AmbientTheme]}>
            <GlobalStyles />
            {props.children}
        </ThemeProvider>
    )
};

export default Theme;
