import { createContext, useState } from "react";

const ThemeContext = createContext({
  ambientTheme: "",
  toggler: null
});

const ThemeContextProvider = ({theme, children}) => {
  let [currentTheme, setTheme] = useState(theme);

  let themeSwitchHandler = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (document) document.cookie = `theme=${newTheme}`;
  };

  return (
    <ThemeContext.Provider
      value={{
        ambientTheme: currentTheme,
        toggler: themeSwitchHandler
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
