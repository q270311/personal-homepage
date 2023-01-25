import styled from "styled-components";

export const StyledTile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 56px;
    
    background: ${({ theme }) => theme.color.white};
    //border: 6px solid ${({ theme }) => theme.color.iron};
    //box-shadow: 0px -2px 50px ${({ theme }) => theme.color.violet02}, ${({ theme }) => theme.color.violet03};
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;
export const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.mainBlue};
`;

export const StyledP = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGray};
`;