import styled, { css } from "styled-components";

export const Wrapper = styled.header`
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;

export const BeforeName = styled.p`  
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGray};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;
export const Name = styled.p`      
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.blackText};    

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;
export const ShortDescription = styled.p`        
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGray};
    margin-top: 24px;
    margin-bottom: 56px;

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;
export const SocialsMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 48px);
    grid-column-gap: 25px;
`;

