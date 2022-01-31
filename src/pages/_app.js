import { useEffect, useState } from 'react';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {

  // https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a
  
  // Hook for Theme Dark and light. (We could try to put it in another file)
  const [AmbientTheme, setAmbientTheme] = useState('light');

  // Check if the theme is dark or not.
  const isDarkTheme = AmbientTheme === "dark";
  // Theme toggler to go from light to dark and vice-versa.
  const themeToggler = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setAmbientTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  // We will check for userPref and get the theme stored locally.
  useEffect(() => { 
    // Run on client side and ensure that localStorage... will be define.
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches; // Check user pref.
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setAmbientTheme(savedTheme);
    } else if (prefersDark) {
      setAmbientTheme("dark");
    }
  }, []);

  return (
    <>
      <Theme>
        <Component {...pageProps}
          toggler={themeToggler}
          ambientTheme={AmbientTheme} />
      </Theme>
    </>
  );
}
