import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../appSlice';
import { Wrapper, Img, About, BeforeName, Name, ShortDescription, Button } from './styled';
import DarkModeToggleButton from './../DarkModeToggleButton'
import MBPicture from './../../img/MB.png';

const HeroAbout = () => {
    const darkMode = useSelector(selectThemeMode);

    return (
        <Wrapper>
            <Img src={MBPicture} alt="Michał Bałdyga" />
            <About>
                <BeforeName darkMode={darkMode}>This is</BeforeName>
                <Name darkMode={darkMode}>  Michał Bałdyga</Name>
                <ShortDescription darkMode={darkMode}>👨‍🎓💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</ShortDescription>
                <Button
                    onClick={(e) => {
                        window.location.href = "mailto:baldyga.software@gmail.com";
                        e.preventDefault();
                    }}>
                    📧Hire Me
                </Button>
            </About>
            <DarkModeToggleButton />
        </Wrapper>
    );
};

export default HeroAbout;