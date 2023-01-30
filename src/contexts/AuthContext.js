import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState({});
  const [cartItens, setCartItens] = useState([])

  return (
    <AuthContext.Provider value={{ jwt, setJwt, user, setUser, cartItens, setCartItens }}>
      {children}
    </AuthContext.Provider>
  );
}
