import React, { createContext, useState, ReactNode } from "react";

interface User {
  id?: string;
  name: string;
  password: string;
  Organization: string;
  zone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (name: string, password: string): Promise<boolean> => {
    try {
      
      const response = await fetch("http://localhost:5555/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();
    setUser(data);
    return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:5555/user/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };


    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }

