import styled from "styled-components";
import {
  blink,
  blinkSpeed,
  typeSpeed,
  typewriter
} from "../../styles/animation";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  margin-top: 4rem;

  @media ${(props) => props.theme.breakpoints.sm} and (orientation: portrait){
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;

    margin: 3rem 0;
    padding: 0;
  }
`;

export const Head1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.special};
  position: relative;
  justify-self: center;
  text-align: center;
  border: ${(props) => props.theme.colors.color};
  font-size: 6rem;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 4rem;
  }
  @media ${props => props.theme.breakpoints.sm} and (orientation: landscape){
    font-size: 3rem;
  }
  @media ${props => props.theme.breakpoints.sm} and (orientation: portrait) {
    font-size: 2rem;
  }

  &::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &::before {
    animation: ${typewriter} ${typeSpeed} steps(13) 1s forwards;
    background: ${(props) => props.theme.colors.background};
  }
  &::after {
    width: 0.125rem;
    background: ${(props) => props.theme.colors.color};
    animation: ${typewriter} ${typeSpeed} steps(13) 1s forwards,
      ${blink} ${blinkSpeed} steps(15) infinite;
  }
`;
