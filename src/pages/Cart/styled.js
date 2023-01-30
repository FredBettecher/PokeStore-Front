import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;

  position: fixed;
  top: 5.35rem;
  left: 6.1rem;
  right: 0.3rem;
  bottom: 0.3rem;
  padding: 1rem;

  text-align: center;
  background-color: rgba(59, 76, 202, 0.5);
  border: 0.0625rem solid rgba(59, 76, 202, 0.8);
  border-radius: 5px;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: rgba(255, 0, 0, 1);
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.46875rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
