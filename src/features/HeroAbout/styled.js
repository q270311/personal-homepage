import styled from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr 50px;
    align-items: center;    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        padding:16px;
        grid-template-columns: 50% 50%;        
    }
`;

export const Img = styled.img`
    max-width: 398px;
    max-height: 398px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.textColor};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        object-fit: cover;
        width: 100%;
    }
`;

export const About = styled.div`
    max-width: 633px;
    max-height: 247px;
    margin-left: 66px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        order: 1;
        grid-column: span 2;
        margin: 0px;
        width: 100%;
    }
`;

export const BeforeName = styled.p`    
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slateGrayWhite};    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        margin-top:12px;
    }
`;

export const Name = styled.p`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textHeader};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        margin:0px;
        padding:0px;
        font-size: 22px;
        line-height: 27px;
    }
`;

export const ShortDescription = styled.p`
    margin: 34px 0px;    
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textColor};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        margin-top:16px;
        margin-bottom:24px;
        font-size: 17px;
    }
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

    &:hover {
        box-shadow: rgb(140 194 255) 2px -2px 0px, 
        rgb(140 194 255) -2px 2px 0px, 
        rgb(140 194 255) 2px 2px 0px, 
        rgb(140 194 255) -2px -2px 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        width: 138px;
        height: 46px;
        margin: 0px;
        padding:0px;
    }
`;
