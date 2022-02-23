import styled from "styled-components";
import {
  blink,
  blinkSpeed,
  typeSpeed,
  typewriter
} from "../../styles/animation";

export const Container = styled.div`
  display: grid;
  font-size: 3rem;
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
    font-size: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} and (orientation: portrait) {
    margin: 0.5rem 0;
    font-size: x-large;
  }
`;

export const Head1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.special};
  position: relative;
  justify-self: center;
  text-align: center;
  border: ${(props) => props.theme.colors.color};

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
