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
            <StyledLink to="/pokeballs" >
                <Img src={pokeballs} />
                <Txt>Pokébolas</Txt>
            </StyledLink>

            <StyledLink to="/pokedexes" >
                <Img src={pokedexes} />
                <Txt>Pokédexes</Txt>
            </StyledLink>

            <StyledLink to="/potions" >
                <Img src={potions} />
                <Txt>Poções</Txt>
            </StyledLink>

            <StyledLink to="/eggs" >
                <Img src={eggs} />
                <Txt>Ovos</Txt>
            </StyledLink>

            <StyledLink to="/stones" >
                <Img src={stones} />
                <Txt>Pedras de</Txt>
                <Txt>evolução</Txt>
            </StyledLink>

            <StyledLink to="/berries" >
                <Img src={berries} />
                <Txt>Frutas</Txt>
            </StyledLink>
        </Container>
    )
}