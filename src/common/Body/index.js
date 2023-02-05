import { StyledBody } from "./styled";
import { useSelector } from "react-redux";
import { selectThemeMode } from '../../appSlice';

const Body = ({ children }) => {
    const darkMode = useSelector(selectThemeMode);
    return (
        <StyledBody darkMode={darkMode}>
            {children}
        </StyledBody>
    );
};

export default Body;