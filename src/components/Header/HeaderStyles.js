import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${(props) => props.theme.colors.color};
  grid-template-rows: 1fr;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
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
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 2;
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;
export const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 32px;
  transition: 0.4s ease;
  &:hover {
    color: #ab3e16;
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
  width: 40%;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 70%;
  }
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: landscape) {
    width: 60%;
  }
  @media ${(props) => props.theme.breakpoints.sm} and (orientation: portrait) {
    grid-area: 1 / 1 / 2 / 4;
    margin: auto;
    align-items: center;
    width: 30%;
  }
`;

export const SocialDiv = styled.div`
  grid-area: 1 / 3 / 1 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 3 / 1 / 4;
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    align-items: center;
    grid-area: 1 / 3 / 1 / 4;
    display: none;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  border-radius: 100%;
  padding: 5px;
  color: ${(props) => props.theme.colors.color};

  &:hover {
    background-color: ${(props) => props.theme.colors.color};
    color: ${(props) => props.theme.colors.background};
    transform: scale(1.3);
    cursor: pointer;
    padding: 3px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
    position: absolute;
    right: 0;
    justify-self: center;
    margin: auto;
    transform: translate(-100%, 100%);
    font-size: 3rem;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: absolute;
    right: 0;
    justify-self: center;
    margin: auto;
    transform: translate(-50%, 100%);
    font-size: 2rem;
    cursor: pointer;
  }
`;
