import styled from 'styled-components';
import { heartBeat, wobbleBottom } from '../../styles/animation';

export const BioLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.2fr;
  }
`;

export const LeftSection = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  margin-right: 3rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.presentation};
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 80%;
    display: flex;
    grid-area: 2 / 1 / 2 / 1;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }
`;
export const MiddleSection = styled.div`
  grid-area: 1 / 2 / 1 / 3;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
    align-self: center;
    margin: 0 auto;
    width: 65%;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const RightSection = styled.div`
  grid-area: 1 / 3 / 1 / 4;
  justify-self: end;
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 0.01fr);

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-area: 3 / 1 / 3 / 1;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 0.01fr);
    grid-row-gap: 2rem;
    margin: 2rem 0 1rem 0;
    height: fit-content;
    justify-self: center;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} and (orientation: landscape) {
    width: 80%;
    justify-self: center;
  }
`;

export const FrameworkIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.color};
  justify-self: center;
  align-self: center;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    animation: ${heartBeat} 1.1s ease-in-out infinite both;
    transform: scale(1.15);
    cursor: pointer;
  }
`;
