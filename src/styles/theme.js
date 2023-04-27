// Composant qui utilise UseContext pour appliquer notre thème à toute l'app.
import { ThemeProvider } from 'styled-components';
// Fichier dans lequel on définit notre thème de l'app.
import theme from '../themes/default';
// Fichier où on va mettre toutes les propriétés de bases pour nos tags.
import GlobalStyles from './globals';
import { useContext } from "react";
import { ThemeContext } from '../themes/context';

const Theme = ({ children }) => {
  const context = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme[context.ambientTheme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
