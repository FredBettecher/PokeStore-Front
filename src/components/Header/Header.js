import { Container, Input, Logo, Bag, UserPerfil, UserArea } from "./style";
import pokestore from "../../assets/images/pokestore.png";
import bag from "../../assets/images/bag.png";
import userImg from "../../assets/images/user-img.jpg";

export default function Header() {
    return(
        <Container>
            <Logo src={pokestore} rel="pokestore" />
            <Input placeholder="Buscar produto" type="text" />
            <UserArea>
                <Bag src={bag} />
                <UserPerfil src={userImg} />
            </UserArea>
        </Container>
    );
}