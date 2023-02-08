import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-style: normal;      
        word-break: break-word;
        color:#000000;
        background-color: ${({ theme }) => theme.color.mainBackground}; 
        transition: background-color 800ms linear;
    }
`; 