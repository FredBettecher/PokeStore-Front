import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1.5rem 0.45rem 1.5rem;
  border-bottom: 0.0625rem solid rgba(59, 76, 202, 0.8);
  background-color: rgba(59, 76, 202, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const Logo = styled.img`
  width: 14rem;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  outline: none;
  border: 0.0625rem solid #b3a125;
  font-size: 1.3rem;
  padding-left: 0.3125rem;
  background-color: #ffde00;
`;

export const UserArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
`;

export const Bag = styled.img`
  width: 3.5rem;
  cursor: pointer;
`;

export const UserPerfil = styled.img`
  border-radius: 50%;
  width: 3.5rem;
  border: 0.0625rem solid #3b4cca;
  cursor: pointer;
`;
