import SVGLogoGithub from './SVGLogoGithub';
import { Wrapper, Title, SubTitle } from './styled';

const PortfolioHeader = ({ darkMode, children }) => {
    return (
        <Wrapper>
            <div><SVGLogoGithub /></div>
            <Title darkMode={darkMode}>Portfolio</Title>
            <SubTitle darkMode={darkMode}>My recent projects</SubTitle>
            {children}
        </Wrapper>
    );
};

export default PortfolioHeader;