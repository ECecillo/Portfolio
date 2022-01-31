
const breakpoints = {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
};
const fonts = {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
    special: "Source Code Pro, monospace",
    test1: "Montserrat"
};
const lightTheme = {
    fonts: fonts,
    colors: {
        rainbowPurple: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        darkblue: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );",
        venice: "#6CBF84",
        moss: "#323339",
        wash: "#EBECED",
        color: "#212121",
        background: "#EBECED",
        cashmere: "#CBC5C1",
        french: "#A2AAB0",
        denim: "#4C586F",
        gunmetal: "#3E3E3B"
    },
    breakpoints: breakpoints
};
const darkTheme = {
    fonts: fonts,
    colors: {
        rainbowPurple: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        darkblue: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );",
        venice: "#6CBF84",
        moss: "#323339",
        wash: "#EBECED",
        color: "#EBECED",
        background: "#212121",
        cashmere: "#CBC5C1",
        french: "#A2AAB0",
        denim: "#4C586F",
        gunmetal: "#3E3E3B"
    },
    breakpoints: breakpoints
}
// Créer dictionnaire pour light and dark avec les couleurs dans theme.
export default {
    light: lightTheme,
    dark: darkTheme
};