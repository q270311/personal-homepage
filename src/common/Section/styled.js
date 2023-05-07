import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 36px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.whiteMineShaft};
  transition: background-color 800ms linear;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 14px;
    padding: 16px;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.textHeader};

  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 12px;
    font-size: 18px;
    line-height: 22px;
  }
`;
