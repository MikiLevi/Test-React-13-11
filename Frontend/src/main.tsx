import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
// const LoginRedirect = () => {
//   const authContext = useContext(AuthContext);
//   return authContext?.user ? <Navigate to="/" /> : <HomePage />;
// };
