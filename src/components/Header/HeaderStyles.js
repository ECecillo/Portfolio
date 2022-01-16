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
        padding-top: 2rem;
        padding-bottom: 0;
    }
`;

export const LinkDiv = styled.div`
    grid-area: 1 / 1 / 1 / 2; 
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-items: center;
    align-self: center;
    align-content: center;
    @media ${props => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 1 / 2;
        display: none;
    } 
`;
export const NavLink = styled.a`
    font-size: 1.5rem;
    font-weight: 400;
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
    display: grid;
    flex-direction: row;
    align-content: center;
    justify-self: center;
    width: 25%;
    cursor: pointer;
    @media ${(props) => props.theme.breakpoints.sm} {
      grid-area: 1 / 1 / 2 / 4;
      margin: auto;
      align-items: center;
      width: 20%;
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
      display: none;
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

export const MobileIcon = styled.div`
    display: none;

    @media ${props => props.theme.breakpoints.sm} {
        display: block;
        position: absolute;
        right: 0;
        justify-self: center;
        margin: auto;
        transform: translate(-100%, 50%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    @media ${props => props.theme.breakpoints.sm} {
        display: none;
    }
`
