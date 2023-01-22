import styled from "styled-components";


export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr 50px;
    width: 1089px;
    height: 384px;
    
    border-bottom-color: ${({ theme }) => theme.color.lightGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;
export const Img = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {   
    }
`;
export const StyledP=styled.p`
    & .thisIs{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.slateGray};
    };
    
`;