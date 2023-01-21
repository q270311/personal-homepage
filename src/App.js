import Body from './common/Body';
import Container from './common/Container';
import Section from './common/Section';
import Portfolio from './features/Portfolio';
import DarkModeToggleButton from './features/DarkModeTooggleButton'

function App() {
  return (
    <Body>
      <Container>
        <DarkModeToggleButton />

        <Section
          title="My skillset includes 🛠"
          body={<ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>}
        />
        <Section
          title="What i want to learn next 🚀"
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
