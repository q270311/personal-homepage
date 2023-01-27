import { StyledTile, StyledH1, StyledP } from './styled';

const Tile = ({ darkMode, head, body, linkRepo, linkDemo }) => {
    return (
        <StyledTile darkMode={darkMode}>
            <StyledH1 darkMode={darkMode}>{head}</StyledH1>
            <StyledP darkMode={darkMode}>{body}</StyledP>
            <StyledP darkMode={darkMode}>Demo: <a href={linkDemo}>{linkDemo}</a></StyledP>
            <StyledP darkMode={darkMode}>Code: <a href={linkRepo}>{linkRepo}</a></StyledP>
        </StyledTile>
    );
};

export default Tile;