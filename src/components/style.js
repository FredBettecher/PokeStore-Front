import styled from "styled-components";
import { IoCart } from "react-icons/io5";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.625rem;
    padding-bottom: 0.625rem;
`

export const Logo = styled.img`
    width: 14rem;
`

export const Input = styled.input`
    width: 20rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    outline: none;
    border: 0.0625rem solid #3B4CCA;
    font-size: 1.3rem;
    padding-left: 0.3125rem;
`

export const UserArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 12rem;
`

export const Cart = styled(IoCart)`
    font-size: 3.5rem;
    color: #3B4CCA;
    cursor: pointer;
`

export const UserPerfil = styled.img`
    border-radius: 50%;
    width: 3.5rem;
    border: 0.0625rem solid #3B4CCA;
    cursor: pointer;
`