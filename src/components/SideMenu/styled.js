import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 5.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 5.16125rem;
  left: 0.3rem;
  padding-top: 1rem;
  text-align: center;
  background-color: rgba(59, 76, 202, 0.5);
  border: 0.0625rem solid rgba(59, 76, 202, 0.8);
  border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 3.3rem;
`;

export const Txt = styled.p`
  font-family: "Pokemon Solid", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #000;
`;
