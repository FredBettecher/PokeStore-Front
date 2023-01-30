import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  CartContainer,
  Button,
  ButtonDiv,
  ImgBox,
  ImgPrice,
  ItemDesc,
  ItemImg,
  ItemName,
  ItemPrice,
  Price,
  Product,
  Products,
  StyledLink,
  TxtBox,
} from "./styled";
import pdollar from "../../assets/images/pokedollar.png";

export default function Cart() {
  const { cartItens, setCartItens } = useContext(AuthContext);

  return (
    <>
      <Header />
      <SideMenu />
      <CartContainer>
        <ButtonDiv>
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </ButtonDiv>
        <Products>
          {cartItens.map((item) => (
            <Product>
              <StyledLink to="">
                <ImgBox>
                  <ItemImg src={item.image} />
                </ImgBox>
                <TxtBox>
                  <ItemName>{item.name}</ItemName>
                  <ItemDesc>{item.description}</ItemDesc>
                  <Price>
                    <ImgPrice src={pdollar} />
                    {item.price}
                  </Price>
                  <ItemPrice>
                    <ImgPrice src={pdollar} />
                    {item.price}
                  </ItemPrice>
                </TxtBox>
              </StyledLink>
            </Product>
          ))}
        </Products>
      </CartContainer>
    </>
  );
}
