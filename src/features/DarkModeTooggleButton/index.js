import { useState } from "react";
import { Input, Label, Ball } from './styled';
import Sun from './sun';

const DarkModeToggleButton = () => {
    const [isDark, setDarkMode] = useState(false);

    const onChangeCheckbox = () => {
        setDarkMode(!isDark);
    }

    return (
        <>
            <Input type="checkbox" id="chk" onChange={onChangeCheckbox} />
            <Label className="label" htmlFor="chk" darkMode={isDark}>
                <Ball className="ball" darkMode={isDark}>
                    <Sun color={isDark ? "black" : "white"} />
                </Ball>
            </Label>
        </>
    );
};

export default DarkModeToggleButton;