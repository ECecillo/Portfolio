import styled from "styled-components";

export const CardBackground = styled.div`
    ${props => props.background};
    backgroundImage: ${props => props.image};
    backgroundSize: "cover";
    backgroundRepeat: "no-repeat";
`;

