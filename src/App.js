import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./pages/Signin/Signin";
import SignUpPage from "./pages/SignUp/SignUp";
import RefreshProvider from "./contexts/RefreshContext";

export default function App() {
  return (
    <>
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}