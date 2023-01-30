import { Container, Img, Txt, StyledLink } from "./styled";
import pokeballs from "../../assets/images/pokeballs.png";
import potions from "../../assets/images/potions.png";
import berries from "../../assets/images/berries.png";
import pokedexes from "../../assets/images/pokedexes.png";
import stones from "../../assets/images/stones.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SideMenu() {
  const [collection, setCollection] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5008/products")
        .then(resp => console.log("Home page!"))
        .catch(err => console.log("Algo de errado não está certo. Erro " + err));
  }, []);

  console.log(collection)

  return (
    <Container>
      <StyledLink to="/products?collection=pokeballs" >
        <Img src={pokeballs} />
        <Txt>Pokébolas</Txt>
      </StyledLink>

      <StyledLink to="/products?collection=pokedexes">
        <Img src={pokedexes} />
        <Txt>Pokédexes</Txt>
      </StyledLink>

      <StyledLink to="/products?collection=potions">
        <Img src={potions} />
        <Txt>Poções</Txt>
      </StyledLink>

      <StyledLink to="/products?collection=stones">
        <Img src={stones} />
        <Txt>Pedras de</Txt>
        <Txt>evolução</Txt>
      </StyledLink>

      <StyledLink to="/products?collection=berries">
        <Img src={berries} />
        <Txt>Frutas</Txt>
      </StyledLink>
    </Container>
  );
}
