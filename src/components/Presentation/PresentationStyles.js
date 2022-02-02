import styled from 'styled-components';
import { heartBeat, wobbleBottom } from '../../styles/animation';

export const BioLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .7fr .5fr;
  }
`;

export const LeftSection = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    grid-area: 2 / 1 / 2 / 1;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const MiddleSection = styled.div`
  grid-area : 1 / 1 / 1 / 4;
  width: 50%;
  height: 50%;
  justify-self: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const RightSection = styled.div`
  grid-area : 1 / 3 / 1 / 4;

  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 3 / 1 / 3 / 1;
  }
`;
export const FrameworkDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 3rem;
  margin: 4rem 0;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    margin: 0;
    grid-row-gap: 0;
  }
`;

export const FrameworkIcons = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.color};
  justify-self: center;
  align-self: center;
  margin: 1rem;

  &:hover {
      animation: ${heartBeat} 1.1s ease-in-out infinite both;
      transform: scale(1.15);
      cursor: pointer;
    }
`;