import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Button, ButtonDiv, Container, Product, Products } from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const singUpWidth = {width: '6.5rem'};
    const [userOnline, setUserOnline] = useState(false);

    return(
        <>
        <Header />
        <SideMenu />
        <Container>
            <ButtonDiv style={userOnline === false ? {} : {display: 'none'}}>
            <Link to="/sign-in" ><Button>Login</Button></Link>
            <Link to="/sign-up" ><Button style={singUpWidth}>Cadastre-se</Button></Link>
            </ButtonDiv>
            <Products>
                <Product>
                    <p>___Imagem do Produto___</p>
                    <p>Descrição do Produto___</p>
                    <p>Preço do Produto</p>
                </Product>
            </Products>
        </Container>
        </>
    )
}