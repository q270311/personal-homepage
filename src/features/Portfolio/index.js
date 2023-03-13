import { useSelector } from "react-redux";
import { selectThemeMode } from '../../appSlice';
import { selectProjects, selectStatus } from '../portfolioSlice';
import { Wrapper, Spinner } from './styled';
import { SubTitle, Button, Strong } from './Header/styled';
import SVGDanger from './SVGDanger';

import Tile from './Tile';
import PortfolioHeader from './Header';

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const darkMode = useSelector(selectThemeMode);

    return (
        status === "loading"
            ? <PortfolioHeader>
                <SubTitle >Please wait, projects are being loaded...</SubTitle>
                <div><Spinner /></div>
            </PortfolioHeader>
            : status === "error"
                ? <PortfolioHeader>
                    <div><SVGDanger color={darkMode ? "white" : "black"} /></div>
                    <Strong>Ooops! Somethink went wrong...</Strong>
                    <SubTitle>Sorry, failed to load Github projects.<br />
                        You can check them directly on Github.</SubTitle>
                    <div>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();

                                window.location.href = "https://github.com/";
                            }}
                        >
                            Go to Github
                        </Button>
                    </div>
                </PortfolioHeader>
                : <>
                    <PortfolioHeader />
                    <Wrapper>
                        {projects.map(project => (
                            <Tile
                                key={project.id}
                                head={project.name}
                                body={project.description}
                                linkRepo={project.html_url}
                                linkDemo={`https://${project.owner.login}.github.io/${project.name}/`}
                            />
                        ))}
                    </Wrapper>
                </>
    );
};

export default Portfolio;