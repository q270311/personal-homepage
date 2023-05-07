import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../appSlice';
import { Footer, BeforeName, Name, ShortDescription, SocialsMedia } from './styled';
import SVGFacebook from './SVGFacebook';
import SVGGithub from './SVGGithub';
import SVGLinkedIn from './SVGLinkedIn';

const ContactSection = () => {
  const darkMode = useSelector(selectThemeMode);
  const iconProps = {
    color: darkMode ? 'white' : 'black',
  };

  return (
    <Footer>
      <BeforeName>Let’s talk!</BeforeName>
      <Name>baldyga.software@gmail.com</Name>
      <ShortDescription>
        I’m always open to new projects whenever I have the time. If you have a website, dashboard
        or mobile app in mind and need some help to make your ideas come to life, feel free to
        conatct me
      </ShortDescription>
      <SocialsMedia>
        <a href="https://github.com/q270311">
          <SVGGithub {...iconProps} />
        </a>
        <a href="https://www.linkedin.com/in/micha%C5%82-ba%C5%82dyga-383526251">
          <SVGLinkedIn color={darkMode ? 'white' : 'black'} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100005246371155">
          <SVGFacebook color={darkMode ? 'white' : 'black'} />
        </a>
      </SocialsMedia>
    </Footer>
  );
};

export default ContactSection;
