import { keyframes } from "styled-components";

// Variable pour la rapidité du curseur, animation et Nombre de lettre.
export const typeSpeed = '4s';
export const blinkSpeed = "750ms";

// Fais la barre vertical écriture de texte.
export const blink = keyframes`
to {
    background: transparent;
}
`;

// Block que l'on rétrécie au fur et à mesure que l'on avancera.
export const typewriter = keyframes`
to {
    left: 100%;
}

`;

export const fadeInUp = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;