import styled from "styled-components";
import { SocialDiv } from "../Header/HeaderStyles";



export const FooterDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
`;



export const SocialFooter = styled.div`
    grid-area: 2 / 3 / 3 / 4;
`;