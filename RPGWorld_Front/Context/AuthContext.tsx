import { createContext, ReactElement, useState } from 'react';
import {
  signInWithEmail,
  signUpWithEmail,
} from '../Supabase/Controllers/AuthController';

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

  async function signUp(email: string, password: string) {
    const newToken = await signUpWithEmail(email, password);
  if (newToken) setToken(newToken);
   
  }

  async function signIn(email: string, password: string) {
    const newToken = await signInWithEmail(email, password);
    if (newToken) setToken(newToken);

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
