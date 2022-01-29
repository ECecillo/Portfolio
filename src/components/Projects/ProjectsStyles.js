import styled from "styled-components";

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