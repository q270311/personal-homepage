import SVGLogoGithub from './SVGLogoGithub';
import { Wrapper, Title, SubTitle } from './styled';

const PortfolioHeader = ({ children }) => (
    <Wrapper>
        <div><SVGLogoGithub /></div>
        <Title> Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
        {children}
    </Wrapper>
);

export default PortfolioHeader;