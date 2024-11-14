import HomePage from './pages/HomePage.tsx'
import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from './provider/UserProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider> 
    </BrowserRouter>
  </StrictMode>,
);
const LoginRedirect = () => {
  const authContext = useContext(AuthContext);
  return authContext?.user ? <Navigate to="/" /> : <HomePage />;
};
