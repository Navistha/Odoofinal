import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      id: '1',
      name: 'John Doe',
      email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150&h=150&fit=crop&crop=face'
    });
    setIsLoading(false);
  };

  const signup = async (name, email, password) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      id: '1',
      name,
      email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150&h=150&fit=crop&crop=face'
    });
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
