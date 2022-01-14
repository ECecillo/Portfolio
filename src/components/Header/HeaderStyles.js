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
    align-self: center;
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
export const LogoDiv = styled.div`
    grid-area: 1 / 2 / 1 / 3;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 75%;
    @media ${(props) => props.theme.breakpoints.sm} {
      grid-area: 1 / 1 / 2 / 3;
      width: 100%;
    }
`;

export const SocialDiv = styled.div`
    grid-area: 1 / 3 / 1 / 4;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:hover .DropDownContent {
        display: block;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      align-items: center;
      grid-area: 1 / 3 / 1 / 4;
    }
`;
export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: black;
    border-radius: 50px;
    padding: 6px;
    
    &:hover {
        background-color: #000;
        color: white;
        transform: scale(1.2);
        cursor: pointer;

    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    &:hover {
        display: block;
        background-color: #000;
    }
`;
