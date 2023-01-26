import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./pages/Signin/Signin";
import SignUpPage from "./pages/SignUp/SignUp";
import RefreshProvider from "./contexts/RefreshContext";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <>
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}