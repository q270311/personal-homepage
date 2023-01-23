import { Wrapper, Img, About, BeforeName, Name, ShortDescription, Button } from './styled';
import DarkModeToggleButton from './../DarkModeTooggleButton'
import MBPicture from './../../img/MB.png';

const HeroAbout = () => {


    return (
        <Wrapper>
            <Img src={MBPicture} alt="Michał Bałdyga" />
            <About>
                <BeforeName >This is</BeforeName>
                <Name>  Michał Bałdyga</Name>
                <ShortDescription>👨‍🎓💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</ShortDescription>
                <Button>📧Hire Me</Button>
            </About>
            <DarkModeToggleButton />
        </Wrapper>
    );
};

export default HeroAbout;