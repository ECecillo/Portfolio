import styled from "styled-components"
import { keyframes } from "styled-components";

// Variable pour la rapidité du curseur, animation et Nombre de lettre.
const typeSpeed = '4s';
const blinkSpeed = "750ms";

export const Container = styled.div`
    display: grid;
    font-size: 5rem;
    grid-template-columns: 1fr;
    padding: 1rem;
    padding-top: 4rem;
    
    @media ${props => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 0.5rem;
        grid-row-gap: .5rem;
        margin: auto;
        font-size: 1rem;
        width: 50%;
    }
`;


const blink = keyframes`
    to {
        background: transparent;
    }
`;
const typewriter = keyframes`
    to {
        left: 100%;
    }

`;

export const Head1 = styled.h1`
    font-family: ${props => props.theme.fonts.special};
    position: relative;
    justify-self: center;
    text-align: center;
    border: ${props => props.theme.colors.wash};
    &::before, 
    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    } 
    &::before {
        animation: 
            ${typewriter} ${typeSpeed} steps(13) 1s forwards;
        background: ${props => props.theme.colors.background};
    }
    &::after {
        width: .125rem;
        background: black;
        animation: 
            ${typewriter} ${typeSpeed} steps(13) 1s forwards, ${blink} ${blinkSpeed} steps(13) infinite;
    }
`;

