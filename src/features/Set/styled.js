import styled, { css } from "styled-components";

export const Ul = styled.ul`
    list-style: none;
    column-count: 3;
    margin: 32px 0px;
    padding: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        column-count: 1; 
        margin: 0px;  
    }
`;
export const Li = styled.li`
    padding:0px;
    margin:4px 0px;    
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGray};
    
    &:before {
        content: "• ";
        color: ${({ theme }) => theme.color.mainBlue};
    }

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        font-size: 14px;
        line-height: 17px;  
    }
`;
