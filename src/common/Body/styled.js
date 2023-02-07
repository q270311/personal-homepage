import styled from "styled-components";

export const StyledBody = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.color.mainBackground}; 
    transition: background-color 800ms linear;
`;