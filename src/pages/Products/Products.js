import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import {
  Button,
  ButtonDiv,
  Container,
  Product,
  Products,
} from "../Home/styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { type } = useParams();
  const singUpWidth = { width: "6.5rem" };
  const [userOnline, setUserOnline] = useState(false);
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5008/products:${type}`)
      .then((resp) => setProductlist(resp.data))
      .catch((err) =>
        console.log("Algo de errado não está certo. Erro " + err)
      );
  }, []);

  return (
    <>
      <Header />
      <SideMenu />
      <Container>
        <ButtonDiv style={userOnline === false ? {} : { display: "none" }}>
          <Link to="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link to="/sign-up">
            <Button style={singUpWidth}>Cadastre-se</Button>
          </Link>
        </ButtonDiv>
        <Products>
          <Product>
            {productlist.map((item) => (
                    <>
                        <button>{item.image}</button>
                        <button>{item.description}</button>
                        <button>{item.price}</button>
                    </>
                    ))}
          </Product>
        </Products>
      </Container>
    </>
  );
}
