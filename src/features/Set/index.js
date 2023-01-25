import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../appSlice';
import Section from '../../common/Section';
import { Ul, Li } from './styled';

const Set = ({ skills, title }) => {
    const darkMode = useSelector(selectThemeMode);

    return (
        <Section
            title={title}
            body={
                <Ul>
                    {skills.map(skill => (
                        <Li key={skill.id} darkMode={darkMode}>
                            {skill.name}
                        </Li>
                    ))}
                </Ul>
            }
        />
    );
};

export default Set;