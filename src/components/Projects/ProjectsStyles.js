import styled from "styled-components";
import { ButtonFront, SectionTitle } from "../../styles/GlobalComponentsStyles/globalC";

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;


export const TitleButtonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 0.5fr));
  grid-template-rows: 0.5fr;
  justify-content: center;
  align-items: center;
  //margin: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 1.5rem;
  }
`;
export const ProjectTitle = styled(SectionTitle)`
  grid-column: 2 / 3;
  padding: .5rem;
  margin-bottom: 3rem;
`;

export const AllButton = styled(ButtonFront)`
  grid-column: 2 / 3;
  position: relative;
  width: 30%;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`