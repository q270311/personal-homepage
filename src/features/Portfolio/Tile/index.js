import { StyledTile, StyledH1, StyledP } from './styled';

const Tile = ({ head, body, linkRepo, linkDemo }) => (
    <StyledTile>
        <StyledH1>{head}</StyledH1>
        <StyledP>{body}</StyledP>
        <StyledP>Demo: <a href={linkDemo}>{linkDemo}</a></StyledP>
        <StyledP>Code: <a href={linkRepo}>{linkRepo}</a></StyledP>
    </StyledTile>
);
export default Tile;