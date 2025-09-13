'use client';
// app/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Import the useRouter hook
// Context Type Definition
type AuthContextType = {
  role: string | null;  // role will be stored here, can be 'admin', 'developer', etc.
  setRole: React.Dispatch<React.SetStateAction<string | null>>;  // Function to set role
  login: (email: string, password: string) => void;  // Login function
  logout: () => void;  // Logout function
};

type AuthProviderProps = {
  children: React.ReactNode;  // Correctly define the type for children
};

// Creating the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Context provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);  // State to hold role
  const [loading,setLoading]=useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter hook for redirection

  // Load role from localStorage on initial render
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      setRole(savedRole);  // Set the role from localStorage
    }
  }, []);

  // Login function
  const login = (email: string, password: string) => {
    let newRole: string | null = null;
    setLoading(true);  
    // Checking demo credentials for 4 roles
    if (email === 'admin@example.com' && password === 'manager123') newRole = 'manager';
    else if (email === 'developer@example.com' && password === 'dev123') newRole = 'developer';
    else if (email === 'designer@example.com' && password === 'designer123') newRole = 'designer';
    else if (email === 'investor@example.com' && password === 'investor123') newRole = 'investor';
    else {
      alert('Invalid credentials');
      return;
    }

    setRole(newRole);
    localStorage.setItem('role', newRole);  // Save the role to localStorage
    setLoading(false);
  };

  // Logout function with redirection
  const logout = () => {
    setRole(null);  // Reset role to null on logout
    localStorage.removeItem('role');  // Remove role from localStorage
    router.push('/');  // Redirect to the login page after logging out
  };

  return (

    <>

    {
      loading ? <h1>Loading....</h1>
      :
    <AuthContext.Provider value={{ role, setRole, login, logout }}>
      {children}
    </AuthContext.Provider>
    }
    </>
  );
};

// Custom hook to access the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
