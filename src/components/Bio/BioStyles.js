import styled from "styled-components";
import { SectionText } from "../../styles/GlobalComponentsStyles/globalC";


export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .1fr 1fr .1fr;
    margin: 0;
    grid-row-gap: 2rem;
`;

export const SectionContent = styled.div`
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const ContentTitle = styled.h3`
  grid-area: 1 / 1 / 2 / 1;
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '50px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background-color:  ${props => props.theme.colors.color};
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: ${(props) => props.main ? '4rem 0' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;

export const PContent = styled(SectionText)`
    grid-area: 2 / 1 / 3 / 1;
`;

