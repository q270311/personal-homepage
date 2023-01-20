import styled, { css } from "styled-components";

export const Input = styled.input`    
    ${({ type }) => type === "checkbox" && css`
        opacity: 0; 
        position: absolute;       
    `};  
`;

export const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 3px;
    height: 26px;
    width: 48px;
    background-color: ${({ theme }) => theme.color.mercury};
    border: 1px solid ${({ theme }) => theme.color.iron};
    border-radius: 50px;

    ${({ darkMode }) => darkMode && css`
        justify-content: flex-end;
        background-color: ${({ theme }) => theme.color.mineShaft};
        /* border: 1px solid ${({ theme }) => theme.color.white}; */
        border: 1px solid ${({ theme }) => theme.color.iron};
    `};

    /* @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    } */
`;

export const Ball = styled.div.attrs({className:'ball'})`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px; 
    width: 20px; 
    border:none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.slateGray};

    ${({ darkMode }) => darkMode && css`
        justify-content: flex-end;
        background-color: ${({ theme }) => theme.color.white};
        align-items: center;
        justify-content: center;
    `};
`;