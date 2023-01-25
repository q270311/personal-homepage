import styled, { css } from "styled-components";

export const Ul = styled.ul`
    list-style: none;
    column-count: 3;
    margin: 32px 0px;
    padding: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;
export const Li = styled.li`
    padding:0px;
    margin:4px 0px;
    font-style: normal;
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
    }
`;
