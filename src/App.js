import './App.css';
import Container from './common/Container';
import Section from './common/Section';

function App() {
  return (
    <Container>
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
    </Container>

  );
}

export default App;
