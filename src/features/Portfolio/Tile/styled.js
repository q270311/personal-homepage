import styled from "styled-components";

export const StyledTile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 56px;
    
    background-color: ${({ theme }) => theme.color.whiteMineShaft};
    transition: background-color 800ms linear;
    border: 6px solid ${({ theme }) => theme.color.iron};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.violet02}, ${({ theme }) => theme.color.violet03};
    border-radius: 4px;

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        padding: 24px;
    }
`;
export const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.mainBlueWhite};    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        font-size: 16px;
        line-height: 19px;
        margin-bottom:8px
    }
`;

export const StyledP = styled.p`    
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGrayWhite};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) { 
        margin:8px 0px;
        font-size: 14px;
        line-height: 17px;
    }
`;