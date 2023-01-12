import { StyledSection, Title } from "./styled";

const Section = ({ title, body }) => (
    <StyledSection>
        <Title>
            {title}
        </Title>
        {body}
    </StyledSection>
);

export default Section;