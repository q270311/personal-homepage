import { useSelector } from "react-redux";
import { selectThemeMode } from '../../appSlice';
import { selectProjects, selectStatus, selectError } from '../portfolioSlice';
import { Wrapper, Spinner } from './styled';
import { SubTitle, Button, Strong } from './Header/styled';
import SVGDanger from './SVGDanger';

import Tile from './Tile';
import PortfolioHeader from './Header';

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);
    const darkMode = useSelector(selectThemeMode);

    if (status) {
        return (
            <PortfolioHeader darkMode={darkMode}>
                <SubTitle >Please wait, projects are being loaded...</SubTitle>
                <div><Spinner /></div>
            </PortfolioHeader>
        );
    }
    if (error) {
        return (
            <PortfolioHeader darkMode={darkMode}>
                <div><SVGDanger color={darkMode ? "white" : "black"} /></div>
                <Strong darkMode={darkMode}>Ooops! Somethink went wrong...</Strong>
                <SubTitle darkMode={darkMode}>Sorry, failed to load Github projects.<br />
                    You can check them directly on Github.</SubTitle>
                <div><Button
                    onClick={(e) => {
                        window.location.href = "https://github.com/";
                        e.preventDefault();
                    }}>
                    Go to Github
                </Button></div>
            </PortfolioHeader>
        );
    }
    return (
        <div>
            <PortfolioHeader darkMode={darkMode} />
            <Wrapper>
                {projects.map(project => (
                    <Tile
                        key={project.id}
                        darkMode={darkMode}
                        head={project.name}
                        body={project.description}
                        linkRepo={project.html_url}
                        linkDemo={`https://${project.owner.login}.github.io/${project.name}/`}
                    />
                ))} 
            </Wrapper>
        </div>
    );
};

export default Portfolio;