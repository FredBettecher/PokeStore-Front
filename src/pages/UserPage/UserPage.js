import {
  UserPageContainer,
  UserPerfil,
  UserPerfilData,
  PerfilButtons,
} from "./styled";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import AshCareca from "../../assets/images/user-img.jpg";
import EditPokedex from "../../assets/images/edit-pokedex.png";
import LogoutPokedex from "../../assets/images/logout-pokedex.png";

export default function UserPage() {
  return (
    <>
      <Header />
      <SideMenu />
      <UserPageContainer>
        <UserPerfil src={AshCareca} />
        <UserPerfilData>
          <h1>Ash Ketchum</h1>
          <p>ash.ketchum@pokemon.jp</p>
          <PerfilButtons>
            <img src={EditPokedex} />
            <Link to="/sign-in">
              <img src={LogoutPokedex} />
            </Link>
          </PerfilButtons>
        </UserPerfilData>
      </UserPageContainer>
    </>
  );
}
