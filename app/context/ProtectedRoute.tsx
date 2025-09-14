// components/ProtectedRoute.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // Optional: specific roles that can access this route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { role } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if role exists in localStorage
    const savedRole = localStorage.getItem('role');
    
    if (!savedRole) {
      // No role found, redirect to login
      router.push('/');
      return;
    }

    // If specific roles are required, check if current role is allowed
    if (allowedRoles && !allowedRoles.includes(savedRole)) {
      // Role not allowed for this route, redirect to appropriate dashboard
      redirectToRoleDashboard(savedRole);
      return;
    }

    setIsLoading(false);
  }, [role, router, allowedRoles]);

  const redirectToRoleDashboard = (userRole: string) => {
    switch(userRole) {
      case 'manager':
        router.push('/dashboard');
        break;
      case 'developer':
        router.push('/dashboard/developer');
        break;
      case 'designer':
        router.push('/dashboard/designer');
        break;
      case 'investor':
        router.push('/dashboard/investor');
        break;
      default:
        router.push('/');
    }
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="main_bg min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If no role found, don't render children (will redirect)
  if (!role) {
    return null;
  }

  // If specific roles required and current role not allowed, don't render
  if (allowedRoles && !allowedRoles.includes(role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;