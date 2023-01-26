import styled from "styled-components";

const SignUpPageContainer = styled.div`
  width: auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 21.5rem;
    align-self: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
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
      background-color: rgba(255, 222, 0, 0.7);
      border: 0.0625rem solid rgb(179, 161, 37);
      border-radius: 5px;

      /* font-family: "Raleway", sans-serif; */
      font-weight: 400;
      font-size: 20px;
      line-height: 23.5px;

      &:hover {
        /* cursor: pointer; */
        background-color: rgba(255, 222, 0, 0.5);

      }
    }
    button {
      width: 330px;
      height: 50px;
      align-items: center;
      margin-bottom: 35px;
      display: flex;
      justify-content: center;
      align-items: center;

      color: #ffffff;
      background-color: rgba(255, 0, 0, 0.7);
      border: none;
      border-radius: 5px;

      /* font-family: "Raleway", sans-serif; */
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

export { SignUpPageContainer };
