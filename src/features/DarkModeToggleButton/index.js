import { useSelector, useDispatch } from "react-redux";
import { selectThemeMode, toggleThemeMode } from '../../appSlice';
import { Wrapper, Input, Label, Ball, DescriptionOfButton } from './styled';
import Sun from './SVGSun';

const DarkModeToggleButton = () => {
    const darkMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <DescriptionOfButton darkMode={darkMode}>dark mode off</DescriptionOfButton>
            <Input type="checkbox" id="checkobx" onChange={() => { dispatch(toggleThemeMode()) }} />
            <Label darkMode={darkMode} className="label" htmlFor="checkobx">
                <Ball darkMode={darkMode}>
                    <Sun color={darkMode ? "black" : "white"} />
                </Ball>
            </Label>
        </Wrapper>
    );
};

export default DarkModeToggleButton;