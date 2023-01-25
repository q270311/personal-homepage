import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../appSlice';
import { StyledSection, Title } from "./styled";

const Section = ({ title, body }) => {
    const darkMode = useSelector(selectThemeMode);
    return (
        <StyledSection darkMode={darkMode}>
            <Title darkMode={darkMode}>
                {title}
            </Title>
            {body}
        </StyledSection>
    );
}

export default Section;