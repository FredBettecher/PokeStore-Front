import { Header, Input, Logo, Cart, UserPerfil, UserArea } from "./style";

export default function Menu() {
    return(
        <Header>
            <Logo src="./images/logo.png" rel="logo" />
            <Input placeholder="Buscar produto" type="text" />
            <UserArea>
                <Cart />
                <UserPerfil src="./images/user-img-exmpl.jpg"/>
            </UserArea>
            
        </Header>
    );
}