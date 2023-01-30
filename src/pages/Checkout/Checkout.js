import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Button, ButtonDiv, Container, Product, Products } from "../Home/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Checkout({ success }) {
    const { name, price, user } = success
    const singUpWidth = {width: '6.5rem'};

    return(
        <>
        <Header />
        <SideMenu />
        <Container>
        <h1>Pedido feito <br /> com sucesso!</h1>
            
            <Products>
              <Product>
                {success.map((item) => (
                    <>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </>
                    ))}
                </Product>
            </Products>
        </Container>
        </>
    )
}
