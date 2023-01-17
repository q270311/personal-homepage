import { useSelector } from "react-redux";
import { selectProjects } from '../portfolioSlice';

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    
    return (
        <ul>
            {projects.map(project => (
                <li key={project.id}>
                    {project.name}
                </li>
            ))}
        </ul>
    );
};

export default Portfolio;