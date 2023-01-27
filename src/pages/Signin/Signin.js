import { SignInContainer } from "./styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/Auth";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import pokestore from "../../assets/images/pokestore.png";

export default function SignIn() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { setJwt, setUser } = useContext(AuthContext);

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  function handleSendForm(e) {
    e.preventDefault();
    signin(form).then((res) => {
      if (res.data.message) {
        return swal({
          title: "Error",
          text: res.data.message,
          icon: "error",
          timer: "7000",
        });
      }
      setJwt(res.data.token);
      setUser({name: res.data.name, email: res.data.email});
      navigate("/");
    });
  }
  return (
    <SignInContainer>
      <img src={pokestore} alt="Logo PokéStore" />
      <form autoComplete="off">
        <input
          placeholder="Digite seu e-mail"
          name="email"
          type="email"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></input>
        <input
          placeholder="Digite sua senha"
          name="password"
          type="password"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></input>

        <button onClick={handleSendForm}>Entrar</button>

        <span>
          Não tem uma conta?{" "}
          <Link className="link" to="/sign-up">
            Cadastre-se
          </Link>
        </span>
      </form>
    </SignInContainer>
  );
}
