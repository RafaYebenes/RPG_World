import { createContext, ReactElement, useState } from "react";
import { createUser, logIn } from "../db/Controllers/AuthController";

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: "",
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
    const user = await createUser(email, password);
    if (user) setToken(await user.getIdToken());
  }

  async function signIn(email: string, password: string) {
    const user = await logIn(email, password);

    if (user) setToken(await user.getIdToken());
  }

  function signOut() {
    setToken(null);
    console.log(token);
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
