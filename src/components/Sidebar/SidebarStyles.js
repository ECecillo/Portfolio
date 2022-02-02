import { FaTimes } from "react-icons/fa";
import styled from "styled-components";


export const SidebarContainer = styled.aside`
    position : fixed; 
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 2fr 1fr;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const Icon = styled.div`
    display: grid;
    grid-area: 1 / 2 / 1 / 2;
    position: absolute;
    right: 0;
    justify-self: center;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fffff;
`;

export const BrandDiv = styled.div`
    display: grid;
    cursor: pointer;
    grid-area: 1 / 1 / 1 / 1;
    flex-direction: column;
    align-content: center;
    justify-self: center;
    width: 25%;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-area: 2 / 1 / 4 / 1; 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    text-align: center;

    @media ${props => props.theme.breakpoints.sm} {
        grid-template-rows: 1fr min-content;
    }
`;
export const SidebarLink = styled.a`
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin: 3rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${props => props.theme.colors.color};

    &:hover {
        cursor: pointer;
        color: #AB3E16;;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarSocial = styled.div`
    grid-area: 4 / 1 / 5 / 1;
    display: flex;
    justify-content: space-evenly;
`;

export const SidebarIcons = styled.a`
    transition: 0.3s ease;
    z-index: 1;
    color: ${props => props.theme.colors.color};
    border-radius: 50px;
    padding: 6px;

    &:hover {
        background-color: ${props => props.theme.colors.color};
        color: ${props => props.theme.colors.background};
        transform: scale(1.2);
        cursor: pointer;

    }
`;