import styled, { css } from "styled-components";

export const StyledBody = styled.div`
    background-color: ${({ theme }) => theme.color.whiteMode}; 

    ${({ darkMode }) => darkMode && css`
        background-color: ${({ theme }) => theme.color.darkMode};
    `};
`;