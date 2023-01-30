import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  position: fixed;
  top: 5.35rem;
  left: 6.1rem;
  right: 0.3rem;
  bottom: 0.3rem;
  padding-top: 1rem;
  text-align: center;
  background-color: rgba(59, 76, 202, 0.5);
  border: 0.0625rem solid rgba(59, 76, 202, 0.8);
  border-radius: 5px;
  overflow-y: scroll;
  // scroll bar css
  ::-webkit-scrollbar {
    width: 0.3125rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.3125rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(255, 222, 0);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 222, 0, 0.5);
  }
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

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1rem;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;


export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TxtBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5rem;
`;

export const ItemImg = styled.img`
  width: 6.5rem;
  border: 0.125rem solid rgb(255, 0, 0);
  border-radius: 0.3125rem;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.3125rem 0.3125rem;
  margin-bottom: 5px;
`;

export const ItemName = styled.h1`
  font-family: "Pokemon Solid", sans-serif;
  font-size: 1.4rem;
  border-bottom: 0.125rem solid #ff0000;
  padding-bottom: 0.3125rem;
`;

export const ItemDesc = styled.p`
  font-size: 1rem;
  text-align: start;
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const ImgPrice = styled.img`
  width: 1rem;
`;

export const ItemPrice = styled.p`
  font-family: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.p`
  font-family: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: line-through;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  color: #000;
`;
