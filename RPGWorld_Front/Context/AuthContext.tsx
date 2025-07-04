import { createContext, ReactElement, useState } from 'react';
import {
  loginController,
  signupController,
} from '../Controllers/AuthController';
/* import { createUser, logIn } from "../db/Controllers/AuthController"; */

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [token, setToken] = useState<string | null>(null);

  function signUp(email: string, password: string) {
    const user = signupController(email, password);
    if (user) setToken(user.token);
  }

  function signIn(email: string, password: string) {
    const user = loginController(email, password);
    console.log(email);

    if (user) setToken(user.token);
  }

  function signOut() {
    setToken(null);
  }

  const value: AuthContextType = {
    token: token,
    isAuthenticated: !!token,
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
