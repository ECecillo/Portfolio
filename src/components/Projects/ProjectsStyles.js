import styled from 'styled-components';
import {
  ButtonFront,
  SectionTitle,
  Section,
} from '../../styles/GlobalComponentsStyles/globalC';

export const ProjectSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  grid-template-rows: max-content max-content 1fr;
  font-family: ${(props) => props.theme.fonts.project};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

export const TitleButtonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 0.5fr 0.5fr;
  justify-content: center;
  align-items: center;
`;
export const ProjectTitle = styled(SectionTitle)`
  grid-column: 2 / 3;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  justify-self: center;
  align-self: center;
  margin: 1rem 0;
`;

export const AllButton = styled(ButtonFront)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
  width: 100%;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 6rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
