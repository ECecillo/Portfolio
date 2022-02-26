
const breakpoints = {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 900px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
};
const fonts = {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
    special: "Lato",
    project: "Source Code Pro, monospace",
    presentation: "Oxygen",
};
const lightTheme = {
    fonts: fonts,
    colors: {
        rainbowPurple: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        darkblue: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );",
        color: "#212121",
        background: "#EBECED"
    },
    breakpoints: breakpoints
};
const darkTheme = {
    fonts: fonts,
    colors: {
        rainbowPurple: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        darkblue: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );",
        color: "#EBECED",
        background: "#212121"
    },
    breakpoints: breakpoints
}
// Créer dictionnaire pour light and dark avec les couleurs dans theme.
export default {
    light: lightTheme,
    dark: darkTheme
};