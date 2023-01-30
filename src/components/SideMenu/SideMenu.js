import { Container, Img, Txt, StyledLink } from "./styled";
import pokeballs from "../../assets/images/pokeballs.png";
import eggs from "../../assets/images/eggs.png";
import potions from "../../assets/images/potions.png";
import berries from "../../assets/images/berries.png";
import pokedexes from "../../assets/images/pokedexes.png";
import stones from "../../assets/images/stones.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SideMenu() {
  const [saleOff, setSaleOff] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5008/")
        .then(resp => setSaleOff(resp.data.type))
        .catch(err => console.log("Algo de errado não está certo. Erro " + err));
  }, []);

  return (
    <Container>
      <StyledLink to="/products:type">
        <Img src={pokeballs} />
        <Txt>Pokébolas</Txt>
      </StyledLink>

      <StyledLink to="/products:type">
        <Img src={pokedexes} />
        <Txt>Pokédexes</Txt>
      </StyledLink>

      <StyledLink to="/products:type">
        <Img src={potions} />
        <Txt>Poções</Txt>
      </StyledLink>

      <StyledLink to="/products:type">
        <Img src={eggs} />
        <Txt>Ovos</Txt>
      </StyledLink>

      <StyledLink to="/products:type">
        <Img src={stones} />
        <Txt>Pedras de</Txt>
        <Txt>evolução</Txt>
      </StyledLink>

      <StyledLink to="/products:type">
        <Img src={berries} />
        <Txt>Frutas</Txt>
      </StyledLink>
    </Container>
  );
}
