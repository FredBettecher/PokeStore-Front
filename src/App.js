import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin/Signin";
import SignUpPage from "./pages/SignUp/SignUp";
import UserPage from "./pages/UserPage/UserPage";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import RefreshProvider from "./contexts/RefreshContext";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/Products";
import { useState } from "react";

export default function App() {
  const [successInfo, setSuccessInfo] = useState({})

  return (
    <>
      <GlobalStyle />
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/products:type" element={<ProductsPage setSuccessInfo={setSuccessInfo}/>} />
            {/* <Route path="/checkout" element={<Checkout successInfo={successInfo}/>} /> */}
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}
