import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPageContainer = styled.div`
  width: auto;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 21.5rem;
    align-self: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 330px;
      height: 60px;
      padding: 18px 15px;
      margin-bottom: 13px;
      color: #000000;
      background-color: ${(props) =>
        props.color === true ? "lightgray" : "rgba(255, 222, 0, 0.7)"};
      border: 0.0625rem solid
        ${(props) => (props.color === true ? "lightgray" : "rgb(179, 161, 37)")};
      border-radius: 5px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23.5px;
      &:hover {
        background-color: ${(props) =>
          props.color === true ? "none" : "rgba(255, 222, 0, 0.5)"};
      }
    }

    button {
      width: 330px;
      height: 50px;
      align-items: center;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      background-color: rgba(255, 0, 0, 0.7);
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23.5px;
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 0, 0, 0.5);
      }
    }
  }
`;

const PerfilImg = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 0.9rem;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PokemonImg = styled.img`
  max-width: 4.25rem;
  border-radius: 50%;
  border: 0.0625rem solid rgb(179, 161, 37);
  background-color: ${(props) =>
    props.pokemonClicked.includes(props.src) === true
      ? "rgba(255, 222, 0, 0.6)"
      : "rgba(59, 76, 202, 0.8)"};
  margin-bottom: 0.5rem;
  opacity: ${(props) =>
    props.pokemonClicked.includes(props.src) === true ||
    props.pokemonClicked.length === 0
      ? "100%"
      : "60%"};

  &:hover {
    cursor: pointer;
    opacity: ${(props) =>
      props.pokemonClicked.includes(props.src) === true ? "100%" : "60%"};
    background-color: rgba(255, 222, 0, 0.7);
  }
`;

export { SignUpPageContainer, PerfilImg, PokemonImg };
