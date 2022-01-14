import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;

    @media ${props => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 60px);
        grid-column-gap: 0.5rem;
        grid-row-gap: .5rem;
    }
`;

export const LinkDiv = styled.div`
    grid-area: 1 / 1 / 1 / 2; 
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-items: stretch;
    align-content: center;
    @media ${props => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 1 / 2;
    } 
`;
export const NavLink = styled.a`
    font-size: 1.5rem;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #AB3E16;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;