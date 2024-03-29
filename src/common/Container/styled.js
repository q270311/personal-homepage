import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 74px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 115px 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) and (max-width: 1216px) {
    padding: 115px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0;
    margin: 0;
    grid-gap: 50px;
  }
`;
