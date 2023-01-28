import { SignUpPageContainer, PerfilImg } from "./styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/Auth";
import pokestore from "../../assets/images/pokestore.png";
import squirtle from "../../assets/images/squirtle.png";
import bulbasaur from "../../assets/images/bulbasaur.png";
import charmander from "../../assets/images/charmander.png";
import pikachu from "../../assets/images/pikachu.png";

export default function SignUpPage() {
  const [form, setForm] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();

    if (form.password !== confirmPassword) {
      console.log(form + " " + confirmPassword);

      return alert("Senhas diferentes!");
    }

    signup(form).then((res) => {
      navigate("/sign-in");
    });
  }

  return (
    <SignUpPageContainer>
      <img src={pokestore} alt="Logo PokéStore" />

      <PerfilImg>
        <img src={squirtle} alt="Logo PokéStore" />
        <img src={bulbasaur} alt="Logo PokéStore" />
        <img src={charmander} alt="Logo PokéStore" />
        <img src={pikachu} alt="Logo PokéStore" />
      </PerfilImg>

      <form onSubmit={handleSendForm}>
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
          required
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
          required
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
          required
        ></input>
        <input
          placeholder="Confirme sua senha"
          name="confirmPassword"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>

        <button type="submit">Cadastrar</button>
      </form>

      <span>
        Já tem uma conta? <Link to="/sign-in">Entre agora!</Link>
      </span>
    </SignUpPageContainer>
  );
}
