import styled from 'styled-components';

export const Footer = styled.footer`
  max-width: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
  }
`;

export const BeforeName = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGrayWhite};
`;

export const Name = styled.p`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.textHeader};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
    margin: 12px 0;
  }
`;

export const ShortDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.slateGrayWhite};
  margin-top: 24px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const SocialsMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-column-gap: 26px;
  padding-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-gap: 16px;
  }
`;
