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
  grid-template-rows: 1fr 1fr 2fr 1fr;
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

export const Icon = styled.div`
  display: grid;
  grid-area: 1 / 2 / 1 / 2;
  position: absolute;
  right: 0;
  justify-self: center;
  transform: translate(-100%, 50%);
  font-size: 2.5rem;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-area: 1 / 3 / 1 / 4;
    position: relative;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fffff;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
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
  grid-area: 2 / 1 / 4 / 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-rows: 1fr min-content;
  }
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-area: 2 / 1 / 3 / 4;
  }
`;
export const SidebarLink = styled.a`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 2.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.color};

  &:hover {
    cursor: pointer;
    color: #ab3e16;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarSocial = styled.div`
  grid-area: 4 / 1 / 5 / 1;
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    grid-area: 3 / 1 / 3 / 4;
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
