import React, { createContext, useState } from 'react';
import { firebase } from '../config/Firebase'



export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (error) {
              alert(error)
            }
          },
          register: async (email, password) => {
            try {
              await firebase.auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
              alert(error)
            }
          },
          logout: async () => {
            try {
              await firebase.auth().signOut();
            } catch (error) {
              alert(error)
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };