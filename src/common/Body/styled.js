import styled, { css } from "styled-components";

export const StyledBody = styled.div`
    background-color: ${({ theme }) => theme.color.whiteMode}; 
    transition: background-color 800ms linear;

    ${({ darkMode }) => darkMode && css`
        background-color: ${({ theme }) => theme.color.darkMode};
    `};
`;