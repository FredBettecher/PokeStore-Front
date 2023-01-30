import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin/Signin";
import SignUpPage from "./pages/SignUp/SignUp";
import UserPage from "./pages/UserPage/UserPage";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import RefreshProvider from "./contexts/RefreshContext";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

export default function App() {
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}
