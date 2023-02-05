import styled, { css } from "styled-components";

export const StyledSection = styled.section`    
    padding: 36px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.white};
    transition: background-color 800ms linear;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);   

    ${({ darkMode }) => darkMode && css`
        background-color: ${({ theme }) => theme.color.mineShaft};
    `};

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
    color: ${({ theme }) => theme.color.blackText};

    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-bottom: 12px;
        font-size: 18px;
        line-height: 22px;   
    }
`;