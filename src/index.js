import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import AuthProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);