import {
  UserPageContainer,
  UserPerfil,
  UserPerfilData,
  PerfilButtons,
} from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import AshCareca from "../../assets/images/user-img.jpg";
import EditPokedex from "../../assets/images/edit-pokedex.png";
import LogoutPokedex from "../../assets/images/logout-pokedex.png";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const { user, setJwt, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function signOut() {
    setJwt("");
    setUser({});
    navigate("/sign-in");
  }

  return (
    <>
      <Header />
      <SideMenu />
      <UserPageContainer>
        <UserPerfil src={user.image} />
        <UserPerfilData>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <PerfilButtons>
            <img src={EditPokedex} />
            <img src={LogoutPokedex} onClick={signOut} />
          </PerfilButtons>
        </UserPerfilData>
      </UserPageContainer>
    </>
  );
}
