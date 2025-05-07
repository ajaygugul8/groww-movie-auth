// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    // In a real app, you would call your API here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          // Simulate successful login
          const user = { id: '123', email, name: 'User', isVerified: true };
          localStorage.setItem('growwMovieUser', JSON.stringify(user));
          setCurrentUser(user);
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  function signup(name, email, password) {
    // In a real app, you would call your API here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          // Simulate successful signup
          const user = { id: '123', email, name, isVerified: false };
          localStorage.setItem('growwMovieUser', JSON.stringify(user));
          setCurrentUser(user);
          resolve(user);
        } else {
          reject(new Error('Invalid information'));
        }
      }, 1000);
    });
  }

  function logout() {
    // In a real app, you would call your API here
    localStorage.removeItem('growwMovieUser');
    setCurrentUser(null);
    return Promise.resolve();
  }

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('growwMovieUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}