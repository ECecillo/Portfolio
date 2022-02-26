import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
export const BrandClose = styled.div`
  display: contents;
`;

export const Icon = styled.div`
  display: grid;
  grid-area: 1 / 2 / 1 / 2;
  position: absolute;
  right: 0;
  justify-self: center;
  transform: translate(-100%, 50%);
  cursor: pointer;
  
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-area: 1 / 3 / 1 / 4;
    position: relative;
    transform: translate(0, 50%);
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fffff;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1024px) and (orientation: portrait) {
    font-size: 3rem;
  }
`;

export const BrandDiv = styled.div`
  display: grid;
  cursor: pointer;
  grid-area: 1 / 1 / 1 / 1;
  flex-direction: column;
  align-content: center;
  justify-self: center;
  margin: 1rem 0;
  width: 25%;
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-area: 1 / 1 / 1 / 4;
    flex-direction: column;
    align-content: center;
    justify-self: center;
    width: 15%;
    margin: 1rem 0;
  }
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-area: 2 / 1 / 3 / 1;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 0.66fr);
  height: 100%;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    //grid-template-rows: 1fr min-content;
  }
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    grid-area: 2 / 1 / 4 / 4;
  }
`;
export const SidebarLink = styled.a`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  margin : 1rem 0;
  color: ${(props) => props.theme.colors.color};

  &:hover {
    cursor: pointer;
    color: #ab3e16;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarSocial = styled.div`
  grid-area: 3 / 1 / 4 / 1;
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-area: 3 / 1 / 4 / 4;
  }
`;

export const SidebarIcons = styled.a`
  transition: 0.3s ease;
  z-index: 1;
  color: ${(props) => props.theme.colors.color};
  border-radius: 50px;
  padding: 6px;

  &:hover {
    background-color: ${(props) => props.theme.colors.color};
    color: ${(props) => props.theme.colors.background};
    transform: scale(1.2);
    cursor: pointer;
  }
`;
