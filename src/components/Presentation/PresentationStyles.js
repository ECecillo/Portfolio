import styled from 'styled-components';

export const BioLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const LeftSection = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const MiddleSection = styled.div`
  grid-area : 1 / 2 / 1 / 3;
`;
export const RightSection = styled.div`
  grid-area : 1 / 3 / 1 / 4;
`;