import Body from './common/Body';
import Container from './common/Container';
import Section from './common/Section';
import Portfolio from './features/Portfolio';
import HeroAbout from './features/HeroAbout';
import Skillset from './features/Skillset';


function App() {
  return (
    <Body>
      <Container>
        <HeroAbout />
        <Skillset />
        <Section
          title="What I want to learn next 🚀"
          body={<ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>}
        />
        <Portfolio />
      </Container>
    </Body>
  );
}

export default App;
