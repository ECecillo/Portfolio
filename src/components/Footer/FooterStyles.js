import styled from "styled-components";
import { SocialIcons } from "../Header/HeaderStyles";



export const FooterDiv = styled.div`
    display: grid;
    padding: 3rem 0;
    grid-area: 1 / 1 / 2 / 1;
    grid-template-rows: 0.1fr 1fr;
`;

export const FooterInfo = styled.div`
    display: grid;
    grid-area: 2 / 1 / 3 / 1;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    justify-items: center;
    align-content: center;
`;

export const SocialFooter = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-items: center
`;

export const SocialIconsFooter = styled(SocialIcons)`
    &:hover {
        transform: scale(1.1);
        padding: 6px;
    }
`;

export const Mail = styled.a`
    align-self: center;
    color: ${props => props.theme.colors.color};
    transition: 0.4s ease;
    &:hover {
        color : #ab3e16;
    }
`;

export const Source = styled(Mail)`
    justify-self: start;
    
`;