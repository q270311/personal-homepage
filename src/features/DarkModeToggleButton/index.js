import { useSelector, useDispatch } from "react-redux";
import { selectThemeMode, toggleThemeMode } from '../../appSlice';
import { Wrapper, Input, Label, Ball, DsscriptionOfButton } from './styled';
import Sun from './SVGSun';

const DarkModeToggleButton = () => {
    const darkMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <DsscriptionOfButton darkMode={darkMode}>dark mode off</DsscriptionOfButton>
            <Input type="checkbox" id="chk" onChange={() => { dispatch(toggleThemeMode()) }} />
            <Label darkMode={darkMode} className="label" htmlFor="chk">
                <Ball darkMode={darkMode}>
                    <Sun color={darkMode ? "black" : "white"} />
                </Ball>
            </Label>
        </Wrapper>
    );
};

export default DarkModeToggleButton;