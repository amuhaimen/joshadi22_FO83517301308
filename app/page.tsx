'use client';
import React, { useState } from "react";
import {   useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the login function
    login(email, password);

    // Redirect based on the role
    // Assuming roles: manager, developer, designer, investor
    if (email === 'admin@example.com' && password === 'manager123') {
        router.push('/dashboard');
    } else if (email === 'developer@example.com' && password === 'dev123') {
      router.push('/dashboard/developer');
    } else if (email === 'designer@example.com' && password === 'designer123') {
      router.push('/dashboard/designer');
    } else if (email === 'investor@example.com' && password === 'investor123') {
      router.push('/dashboard/investor');
    }
  };

  return (
    
      <div className="flex items-center justify-center h-screen bg-gray-100 main_bg bg-contain ">
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-5">
          
          {/* Left Card with Role Credentials */}
          <div className="flex-1 bg-[#181818] text-white p-8 rounded-lg mr-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login Credentials</h2>
            <div className="space-y-4">
              <div className="bg-[#1f1f1f] p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Manager</h3>
                <p>Email: <strong>admin@example.com</strong></p>
                <p>Password: <strong>manager123</strong></p>
              </div>
              <div className="bg-[#1f1f1f] p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Developer</h3>
                <p>Email: <strong>developer@example.com</strong></p>
                <p>Password: <strong>dev123</strong></p>
              </div>
              <div className="bg-[#1f1f1f] p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Designer</h3>
                <p>Email: <strong>designer@example.com</strong></p>
                <p>Password: <strong>designer123</strong></p>
              </div>
              <div className="bg-[#1f1f1f] p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Investor</h3>
                <p>Email: <strong>investor@example.com</strong></p>
                <p>Password: <strong>investor123</strong></p>
              </div>
            </div>
          </div>

          {/* Right Side Login Form */}
          <div className="flex-1 bg-[#181818] p-8 rounded-lg mt-4 md:mt-0">
            <form 
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="login-form" className="text-center font-semibold text-xl text-white">
                Login
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Your Email here" 
                className="py-3 px-4 bg-white border border-gray-300 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Your Password here" 
                className="py-3 px-4 bg-white border border-gray-300 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input 
                type="submit" 
                value="Log in" 
                className="py-3 px-4 bg-[#21AF68] text-white rounded-xl cursor-pointer border border-transparent hover:border-gray-500 hover:bg-white hover:text-black font-medium transition-all duration-300 ease-in-out"
              />
            </form>
          </div>
        </div>
      </div>
  
  );
}
