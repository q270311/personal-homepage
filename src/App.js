import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
// import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import Container from './common/Container';
import Portfolio from './features/Portfolio';
import HeroAbout from './features/HeroAbout';
import Set from './features/Set';
import ContactSection from './features/ContactSection';
import { themes } from './allThemes.js';
import { useSelector } from "react-redux";
import { selectThemeMode } from './appSlice';
import {skills, skillsToLearnNext} from './skills';

function App() {
  const darkMode = useSelector(selectThemeMode);
  const [selectedTheme, setSelectedTheme] = useState(themes.whiteMode);

  useEffect(() => {
    darkMode ? setSelectedTheme(themes.darkMode) : setSelectedTheme(themes.whiteMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />      
        <Container>
          <HeroAbout />
          <Set skills={skills} title="My skillset includes 🛠" />
          <Set skills={skillsToLearnNext} title="What I want to learn next 🚀" />
          <Portfolio />
          <ContactSection /> 
        </Container>      
    </ThemeProvider>
  );
}

export default App;
