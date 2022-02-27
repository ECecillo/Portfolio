import styled from "styled-components";
import {
  blink,
  blinkSpeed,
  rotating_line,
  typeSpeed,
  typewriter
} from "../../styles/animation";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  padding: 1rem;
  margin-top: 4rem;

  @media ${props => props.theme.breakpoints.lg} {
    margin-top: 2rem;
  }
  
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
  
  @media ${props => props.theme.breakpoints.lg} {
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


// Source : https://codepen.io/bhadupranjal/pen/vYLZYqQ?editors=0100
export const HireButton = styled.a`
  font-weight: bold;
  font-family: ${props => props.theme.fonts.main};
  font-size : 1rem;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  justify-self: center;
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  width: 30%;
  @media ${props => props.theme.breakpoints.lg} {
    width: 40%;
    margin: 2rem 0 1rem 0;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 50%;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 70%;
  }

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
  }

  & span {
    position: absolute;
    display: block;
  }
  & span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: ${rotating_line.rotating_line_left_right} 1s linear infinite;
  }

  & span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: ${rotating_line.rotating_line_top_bottom_right} 1s linear infinite;
    animation-delay: 0.25s;
  }
  & span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: ${rotating_line.rotating_line_bottom_right_left} 1s linear infinite;
    animation-delay: 0.5s;
  }
  & span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: ${rotating_line.rotating_line_bottom_top_left} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;