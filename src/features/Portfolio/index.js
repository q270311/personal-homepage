import { useSelector } from "react-redux";
import { selectProjects, selectStatus, selectError } from '../portfolioSlice';
import { Wrapper, Spinner } from './styled';
import {SubTitle, Button, Strong} from './Header/styled';
import SVGDanger from './SVGDanger';

import Tile from './Tile';
import PortfolioHeader from './Header';

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    if (status) {
        return (
            <PortfolioHeader>
                <SubTitle>Please wait, projects are being loaded...</SubTitle>
                <div><Spinner /></div>
            </PortfolioHeader>    
        );
    }
    if (error) {
        return (
            <PortfolioHeader>
                <div><SVGDanger /></div>
                <Strong>Ooops! Somethink went wrong...</Strong>
                <SubTitle>Sorry, failed to load Github projects.<br/>
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
            <PortfolioHeader />
            <Wrapper>
                {projects.map(project => (
                    <Tile
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