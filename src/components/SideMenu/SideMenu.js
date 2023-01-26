import { Container, Img, Txt, StyledLink } from "./styled";
import pokeballs from "../../assets/images/pokeballs.png";
import eggs from "../../assets/images/eggs.png";
import potions from "../../assets/images/potions.png";
import berries from "../../assets/images/berries.png";
import pokedexes from "../../assets/images/pokedexes.png";
import stones from "../../assets/images/stones.png";

export default function SideMenu() {
    return(
        <Container>
            <StyledLink to="/" >
                <Img src={pokeballs} />
                <Txt>Pokébolas</Txt>
            </StyledLink>

            <StyledLink to="/" >
                <Img src={pokedexes} />
                <Txt>Pokédexes</Txt>
            </StyledLink>

            <StyledLink to="/" >
                <Img src={potions} />
                <Txt>Poções</Txt>
            </StyledLink>

            <StyledLink to="/" >
                <Img src={eggs} />
                <Txt>Ovos</Txt>
            </StyledLink>

            <StyledLink to="/" >
                <Img src={stones} />
                <Txt>Pedras de</Txt>
                <Txt>evolução</Txt>
            </StyledLink>

            <StyledLink to="/" >
                <Img src={berries} />
                <Txt>Frutas</Txt>
            </StyledLink>
        </Container>
    )
}