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
  const [changeInput, setChangeInput] = useState(true);
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
      console.log(form);
      return alert("Senhas diferentes!");
    }

    signup(form).then((res) => {
      navigate("/sign-in");
    });
  }

  return (
    <SignUpPageContainer color={changeInput}>
      <img src={pokestore} alt="Logo PokéStore" />

      <span>Escolhe seu iniciante para foto de perfil</span>
      <PerfilImg>
        <img
          src={squirtle}
          alt="Logo PokéStore"
          onClick={(e) => {
            setForm({ ...form, img: "squirtle" });
            setChangeInput(false);
          }}
        />
        <img
          src={bulbasaur}
          alt="Logo PokéStore"
          onClick={(e) => {
            setForm({ ...form, img: "bulbasaur" });
            setChangeInput(false);
          }}
        />
        <img
          src={charmander}
          alt="Logo PokéStore"
          onClick={(e) => {
            setForm({ ...form, img: "charmander" });
            setChangeInput(false);
          }}
        />
        <img
          src={pikachu}
          alt="Logo PokéStore"
          onClick={(e) => {
            setForm({ ...form, img: "pikachu" });
            setChangeInput(false);
          }}
        />
      </PerfilImg>

      <form onSubmit={handleSendForm}>
        <input
          placeholder="Digite seu nome"
          name="name"
          type="text"
          disabled={changeInput}
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
          disabled={changeInput}
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
          disabled={changeInput}
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
          disabled={changeInput}
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
