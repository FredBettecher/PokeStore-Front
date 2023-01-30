import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import { CheckoutContainer } from "./styled";

export default function Checkout() {
  return (
    <>
      <SideMenu />
      <Header />
      <CheckoutContainer></CheckoutContainer>
    </>
  );
}
