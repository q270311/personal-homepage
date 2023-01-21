import { useSelector, useDispatch } from "react-redux";
import { selectThemeMode, toggleThemeMode } from '../../appSlice';
import { Input, Label, Ball } from './styled';
import Sun from './sun';

const DarkModeToggleButton = () => {
    const darkMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    return (
        <>
            <Input type="checkbox" id="chk" onChange={() => { dispatch(toggleThemeMode()) }} />
            <Label className="label" htmlFor="chk" darkMode={darkMode}>
                <Ball className="ball" darkMode={darkMode}>
                    <Sun color={darkMode ? "black" : "white"} />
                </Ball>
            </Label>
        </>
    );
};

export default DarkModeToggleButton;