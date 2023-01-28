import styled, {css} from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    transition: background-color 800ms linear;
    padding: 36px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    ${({ darkMode }) => darkMode && css`
        background-color: ${({ theme }) => theme.color.mineShaft};
    `};
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: left;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.blackText};
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.color.lightGrey};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;