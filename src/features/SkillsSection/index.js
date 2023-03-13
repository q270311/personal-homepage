import Section from '../../common/Section';
import { Ul, Li } from './styled';

const SkillsSection = ({ skills, title }) => (
    <Section
        title={title}
        body={
            <Ul>
                {skills.map(skill => (
                    <Li key={skill}>
                        {skill}
                    </Li>
                ))}
            </Ul>
        }
    />
);


export default SkillsSection;