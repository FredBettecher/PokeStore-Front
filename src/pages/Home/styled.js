import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
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
  width: 4rem;
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

export const SalesOff = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  width: 40rem;
  position: relative;
  left: 24%;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #ffde00 0%, #cc0000 100%);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

  button {
    width: 6.5rem;
  height: 3rem;
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
    }
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

export const Price = styled.p`
  font-family: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: line-through;
`;

export const ItemPrice = styled.p`
  font-family: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgPrice = styled.img`
  width: 1rem;
`;

export const SaleIcon = styled.span`
  position: relative;
  display: inline-block;
  background: orange;
  font-size: 1.2rem;
  color: white;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 2.5rem;
  left: 15%;
  transform: rotate(-20deg);
  animation: beat 1s ease infinite alternate;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: inherit;
    height: inherit;
    width: inherit;
    top: 0;
    left: 0;
    z-index: -1;
    transform: rotate(30deg);
  }
  &:after {
    transform: rotate(60deg);
  }

  @keyframes beat {
    from {
      transform: rotate(-20deg) scale(1);
    }
    to {
      transform: rotate(-20deg) scale(1.1);
    }
  }
`;
export const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  color: #000;
`;
