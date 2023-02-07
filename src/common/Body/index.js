import { StyledBody } from "./styled";

const Body = ({ children }) => {
    return (
        <StyledBody>
            {children}
        </StyledBody>
    );
};

export default Body;