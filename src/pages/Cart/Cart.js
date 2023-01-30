import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Button, ButtonDiv } from "../Home/styled";
import { CartContainer } from "./styled";
import { Link } from "react-router-dom";

export default function Cart() {
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
      </CartContainer>
    </>
  );
}
