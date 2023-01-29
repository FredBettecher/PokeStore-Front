import styled from "styled-components";

const UserPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 5.35rem;
  left: 6.1rem;
  right: 0.3rem;
  bottom: 0.3rem;
  padding: 1rem auto;

  text-align: center;
  background-color: rgba(59, 76, 202, 0.5);
  border: 0.0625rem solid rgba(59, 76, 202, 0.8);
  border-radius: 5px;
`;

const UserPerfil = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-color: rgb(59, 76, 202);
  border: 0.0625rem solid rgb(179, 161, 37);
`;

const UserPerfilData = styled.div`
  width: 40%;
  margin: 5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #000;
    text-shadow: 0.2rem 0.2rem #333333;

    &:hover {
      font-weight: 400;
      text-shadow: 0.3rem 0.2rem #333333;
    }
  }

  p {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #000;
  }
`;

const PerfilButtons = styled.div`
  width: 8.25rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 3.5rem;
    border-radius: 50%;
    background-color: #ee433c;
    border: 0.08rem solid #cc0000;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { UserPageContainer, UserPerfil, UserPerfilData, PerfilButtons };
