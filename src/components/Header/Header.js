import {
  Container,
  Input,
  HomeIcon,
  Logo,
  Bag,
  UserPerfil,
  UserArea,
} from "./style";
import pokestore from "../../assets/images/pokestore.png";
import bag from "../../assets/images/bag.png";
import noUser from "../../assets/images/noUser.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import home from "../../assets/images/home.png";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Link to="/">
        <HomeIcon src={home} rel="Home page" />
      </Link>
      <Logo src={pokestore} rel="Home page" />
      <UserArea>
        <Link to="/cart">
          <Bag src={bag} />
        </Link>
        {user.image === undefined ? (
          <Link to="/sign-in">
            <UserPerfil src={noUser} />{" "}
          </Link>
        ) : (
          <Link to="/user">
            <UserPerfil src={user.image} />{" "}
          </Link>
        )}
      </UserArea>
    </Container>
  );
}
