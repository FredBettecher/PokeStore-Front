import { SignUpPageContainer } from "./styled";

export default function SignUpPage() {
  return (
    <SignUpPageContainer>
      <img src="./images/logo.png" alt="Logo PokéStore" />

      <form>
        <input type="text" name="name" value="" placeholder="Nome" required />
        <input
          type="email"
          name="email"
          value=""
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="password"
          value=""
          placeholder="Senha"
          required
        />
        <input
          type="password"
          name="password"
          value=""
          placeholder="Confirme a senha"
          required
        />
        <button>Cadastre-se</button>
      </form>
    </SignUpPageContainer>
  );
}
