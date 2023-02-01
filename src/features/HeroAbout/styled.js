import styled, {css} from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr 50px;
    align-items: center;    
    border-bottom-color: ${({ theme }) => theme.color.lightGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;

export const Img = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const About = styled.div`
    width: 633px;
    height: 247px;
    margin-left: 66px;
`;

export const BeforeName = styled.p`    
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGray};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;
export const Name = styled.p`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.blackText};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;
export const ShortDescription = styled.p`    
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGray};

    ${({ darkMode }) => darkMode && css`
        color: ${({ theme }) => theme.color.white};
    `};
`;

export const Button = styled.button`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;    
    font-weight: 400;
    font-size: 20.0584px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    width: 154px;
    height: 49px;
    margin-top: 32px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mainBlue};
    border: 1px solid ${({ theme }) => theme.color.mainBlue};
    border-radius: 4px;
`;
