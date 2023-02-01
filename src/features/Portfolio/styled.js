import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;  
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        grid-template-columns: 1fr;
        margin: 14px;
        grid-gap: 16px;
    }
`;

export const Spinner = styled.div.attrs({ className: 'spinner-border' })`
    margin-top: 50px;
    height: 160px; 
    width: 160px; 
    border-width:11.38px; 
    color:#0366D6;
`;