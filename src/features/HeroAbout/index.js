import {Wrapper, Img, StyledP} from './styled';
import DarkModeToggleButton from './../DarkModeTooggleButton'
import MBPicture from './../../img/MB.png';

const HeroAbout = () => {

    
    return (
        <Wrapper>
            <Img src={MBPicture} alt="Michał Bałdyga" />
            <div>
                <StyledP className='thisIs'>This is</StyledP>
                <StyledP className='name'>  Michał Bałdyga</StyledP>
                <StyledP className='shorMessage'>I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</StyledP>
            </div>
            <DarkModeToggleButton />
        </Wrapper>
    );
};

export default HeroAbout;