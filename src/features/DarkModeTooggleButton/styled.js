import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    align-self: flex-start;
    justify-self: end;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    width: 170px;

    ${({ darkMode }) => darkMode && css`
        width: 50px;
    `};
 `;

export const DsscriptionOfButton = styled.p`  
    padding-top: 10px;
    margin-right:10px ;
    font-weight: 700;
    font-size: 12px;    
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGray};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        visibility:hidden;  
    } 
`;

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
        background-color: ${({ theme }) => theme.color.slateGray};
        border: 1px solid ${({ theme }) => theme.color.white}; 
    `};    
`;

export const Ball = styled.div`
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