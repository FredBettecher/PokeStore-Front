import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Button, ButtonDiv, Container, ImgBox, ImgPrice, ItemDesc, ItemImg, ItemName,
ItemPrice, Price, Product, Products, SaleIcon, SalesOff, StyledLink, TxtBox } from "./styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import pdollar from "../../assets/images/pokedollar.png"

export default function Home() {
    const singUpWidth = {width: '6.5rem'};
    const [userOnline, setUserOnline] = useState(false);
    const [saleOff, setSaleOff] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5008/")
            .then(resp => setSaleOff(resp.data))
            .catch(err => console.log("Algo de errado não está certo. Erro " + err));
    }, []);

    return(
        <>
        <Header />
        <SideMenu />
        <Container>
            <ButtonDiv style={userOnline === false ? {} : {display: 'none'}}>
            <Link to="/sign-in" ><Button>Login</Button></Link>
            <Link to="/sign-up" ><Button style={singUpWidth}>Cadastre-se</Button></Link>
            </ButtonDiv>
            <SalesOff>LIQUIDAÇÃO POKÉSTORE!</SalesOff>
            <Products>
                    {saleOff.map((item) => (
                        <Product>
                            <StyledLink to={`/product/${item._id}`}>
                            <ImgBox>
                            <ItemImg src={item.image} />
                            </ImgBox>
                            <TxtBox>
                            <ItemName>{item.name}</ItemName>
                            <ItemDesc>{item.description}</ItemDesc>
                            <Price><ImgPrice src={pdollar} />{item.price + 300}</Price>
                            <ItemPrice>
                                <ImgPrice src={pdollar} />{item.price}
                                <SaleIcon>{`${(300/item.price*100).toFixed(0)}%`}</SaleIcon>
                                </ItemPrice>
                            </TxtBox>
                            </StyledLink>
                        </Product>
                    ))}
            </Products>
        </Container>
        </>
    )
}