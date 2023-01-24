import Section from '../../common/Section';
import { Ul, Li } from './styled';

const Skillset = () => {
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
        /*         {id: 15, name: "JavaScript: ES6+"},
                {id: 16, name: "Promises, Async/Await"},
                {id: 17, name: "GitHub Pull Requests & Review"},
                {id: 18, name: "Trello"},
                {id: 19, name: "Scrum"},
                {id: 20, name: "NPM"},
                {id: 21, name: "React"},
                {id: 22, name: "Git"} */
    ];

    return (
        <Section
            title="My skillset includes 🛠"
            body={
                <Ul>
                    {skills.map(skill => (
                        <Li key={skill.id}>
                            {skill.name}
                        </Li>
                    ))}
                </Ul>
            }
        />
    );
};

export default Skillset;