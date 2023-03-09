import styled from "styled-components";

export const Wrapper = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center; 
    text-align:center;
`;

export const Title = styled.p`    
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textHeader};
    margin-top: 13px;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        font-size: 18px;
        line-height: 22px;
    }
`;

export const SubTitle = styled.p`    
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;    
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textHeader}; 
    margin-bottom: 86px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        font-size: 17px;
        line-height: 140%;
    }
`;

export const Button = styled.button`
    padding: 12px 16px;
    width: 168px;
    height: 49px;    
    border: 1px solid ${({ theme }) => theme.color.mainBlue};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.mainBlue}; 

    font-weight: 600;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.white}; 
`;

export const Strong = styled.strong`
    margin-top: 35px;
    margin-bottom: 35px;
    
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textHeader}; 
`;