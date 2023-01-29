import { SignUpPageContainer, PerfilImg, PokemonImg } from "./styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/Auth";
import pokestore from "../../assets/images/pokestore.png";
import { pokemonImgList, pokemonList } from "../../constants/PokemonList";

export default function SignUpPage() {
  const [form, setForm] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changeInput, setChangeInput] = useState(true);
  const [changeButton, setChangeButton] = useState("");

  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleImage({ pokemon }) {
    for (let i = 0; i < pokemonImgList.length; i++) {
      if (pokemon === `http://localhost:3000${pokemonImgList[i]}`) {
        setForm({ ...form, image: pokemonList[i] });
      }
    }

    setChangeInput(false);
    setChangeButton(pokemon);
  }

  function handleSendForm(e) {
    e.preventDefault();

    if (form.password !== confirmPassword) {
      return alert("Senhas diferentes!");
    }

    signup(form).then((res) => {
      navigate("/sign-in");
    });
  }

  return (
    <SignUpPageContainer color={changeInput}>
      <img src={pokestore} alt="Logo PokéStore" />

      <PerfilImg color={changeButton}>
        <p>Escolha seu iniciante e preencha os dados abaixo</p>

        <span>
          {pokemonImgList.map((pokemon) => (
            <PokemonImg
              pokemonClicked={changeButton}
              src={pokemon}
              onClick={(e) => {
                handleImage({ pokemon: e.target.src });
              }}
            ></PokemonImg>
          ))}
        </span>
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
