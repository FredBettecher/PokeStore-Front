import { SignUpPageContainer } from "./styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/Auth";

export default function SignUpPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    signup(form).then((res) => {
      navigate("/sign-in");
    });
  }


  return (
    <SignUpPageContainer>
      <img src="./images/logo.png" alt="Logo PokéStore" />

      <form autoComplete="off">
      <input
          placeholder="Digite seu nome"
          name="name"
          type="text"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></input>
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

        <button onClick={handleSendForm}>Cadastrar</button>
      </form>
    </SignUpPageContainer>
  );
}