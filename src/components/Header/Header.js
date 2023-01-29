import { Container, Input, Logo, Bag, UserPerfil, UserArea } from "./style";
import pokestore from "../../assets/images/pokestore.png";
import bag from "../../assets/images/bag.png";
import userImg from "../../assets/images/user-img.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Link to="/">
        <Logo src={pokestore} rel="pokestore" />
      </Link>
      <Input placeholder="Buscar produto" type="text" />
      <UserArea>
        <Bag src={bag} />
        <Link to="/user">
          <UserPerfil src={user.img} />
        </Link>
      </UserArea>
    </Container>
  );
}
