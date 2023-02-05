import Body from './common/Body';
import Container from './common/Container';
import Portfolio from './features/Portfolio';
import HeroAbout from './features/HeroAbout';
import Set from './features/Set';
import ContactsSocials from './features/Contact&socials';


function App() {
  const skills = [
    { id: 1, name: "Semantic & accessible HTML" },
    { id: 2, name: "Responsive Web Design" },
    { id: 3, name: "Teamwork" },
    { id: 4, name: "Markdown" },
    { id: 5, name: "Immutability" },
    { id: 6, name: "CSS BEM convention" },
    { id: 7, name: "CSS Grid" },
    { id: 8, name: "CSS Flexbox" },
    { id: 9, name: "React Router" },
    { id: 10, name: "Redux-Saga" },
    { id: 11, name: "Redux (Toolkit)" },
    { id: 12, name: "React Hooks" },
    { id: 13, name: "Error handling" },
    { id: 14, name: "Working with API (fetch, axios)" },
    // eslint-disable-next-line
    { id: 15, name: "JavaScript: ES6+" },
    { id: 16, name: "Promises, Async/Await" },
    { id: 17, name: "GitHub Pull Requests & Review" },
    { id: 18, name: "Trello" },
    { id: 19, name: "Scrum" },
    { id: 20, name: "NPM" },
    { id: 21, name: "React" },
    { id: 22, name: "Git" }
  ];
  const skillsToLearnNext = [
    { id: 1, name: "React Context" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "Cypress" },
    { id: 4, name: "Unit testing" },
    { id: 5, name: "TypeScript" },
    { id: 6, name: "JS classes" },
  ];

  return (
    <Body>
      <Container>
        <HeroAbout />
        <Set skills={skills} title="My skillset includes 🛠" />
        <Set skills={skillsToLearnNext} title="What I want to learn next 🚀" />
        <Portfolio />
        <ContactsSocials />
      </Container>
    </Body>
  );
}

export default App;
