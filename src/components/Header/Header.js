import { Container, Input, Logo, Bag, UserPerfil, UserArea } from "./style";
import pokestore from "../../assets/images/pokestore.png";
import bag from "../../assets/images/bag.png";
import userImg from "../../assets/images/user-img.jpg";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={pokestore} rel="pokestore" />
      </Link>
      <Input placeholder="Buscar produto" type="text" />
      <UserArea>
        <Bag src={bag} />
        <Link to="/user">
          <UserPerfil src={userImg} />
        </Link>
      </UserArea>
    </Container>
  );
}
