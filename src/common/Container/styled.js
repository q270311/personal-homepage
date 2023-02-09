import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 74px;    
    max-width: 1216px;
    margin: 0px auto;
    padding: 115px 0px;

    @media (min-width:${({ theme }) => theme.breakpoint.mobileMax}px) and (max-width: 1216px){
        padding: 115px 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        padding: 0px;
        margin: 0px;
        grid-gap: 50px;
    }
`;