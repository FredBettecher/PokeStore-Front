import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
