import { useSelector } from "react-redux";
import { selectProjects, selectStatus, selectError } from '../portfolioSlice';
import { Spinner } from './styled';

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
        <>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Portfolio;