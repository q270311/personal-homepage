import { useSelector } from "react-redux";
import { selectProjects, selectStatus, selectError } from '../portfolioSlice';
import { Wrapper, Spinner } from './styled';
import Tile from './Tile';

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    if (status) {
        return (
            <>
                <p>Please wait, projects are being loaded...</p>
                <Spinner />
            </>
        );
    }
    if (error) {
        return (
            <>
                <p>Ooops! Somethink went wrong...</p>
                <p>Sorry, failed to load Github projects.</p><p>You can check them directly on Github.</p>
                <button>Go to Github</button>
            </>
        );
    }
    return (
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
    );
};

export default Portfolio;