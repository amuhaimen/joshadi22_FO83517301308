"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

// Context Type Definition
type AuthContextType = {
  role: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean; // New property to check if user is authenticated
  checkAuth: () => boolean; // Function to check authentication status
};

type AuthProviderProps = {
  children: React.ReactNode;
};

// Creating the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Context provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  // Load role from localStorage on initial render
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  // Function to check if user is authenticated
  const checkAuth = (): boolean => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
      setIsAuthenticated(true);
      return true;
    } else {
      setRole(null);
      setIsAuthenticated(false);
      return false;
    }
  };

  // Login function
  const login = (email: string, password: string) => {
    let newRole: string | null = null;
    setLoading(true);

    // Checking demo credentials for 4 roles
    if (email === "admin@example.com" && password === "manager123")
      newRole = "manager";
    else if (email === "developer@example.com" && password === "dev123")
      newRole = "developer";
    else if (email === "designer@example.com" && password === "designer123")
      newRole = "designer";
    else if (email === "investor@example.com" && password === "investor123")
      newRole = "investor";
    else if(email==='contracts@gmail.com' && password==='contracts123')
      newRole ="contracts"
    else {
      alert("Invalid credentials");
      setLoading(false);
      return;
    }

    setRole(newRole);
    localStorage.setItem("role", newRole);
    setIsAuthenticated(true);
    setLoading(false);
  };

  // Logout function with redirection
  const logout = () => {
    setRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem("role");
    localStorage.removeItem("roleAnswers"); // Also clear role answers
    router.push("/");
  };

  return (
    <>
      {loading ? (
        <div className="main_bg min-h-screen flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      ) : (
        <AuthContext.Provider
          value={{ role, setRole, login, logout, isAuthenticated, checkAuth }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

// Custom hook to access the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
