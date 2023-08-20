import { ThemeContextProvider } from '../themes/context';
import Theme from '../styles/theme';


function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider theme={pageProps.theme ?? "light"}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeContextProvider>
  );
}
export default App;
