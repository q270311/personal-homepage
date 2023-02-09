import Section from '../../common/Section';
import { Ul, Li } from './styled';

const Set = ({ skills, title }) => (
    <Section
        title={title}
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


export default Set;