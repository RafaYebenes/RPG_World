import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import WelcomeScreen from "../Screens/WelcomeScreen";

export default function MainNavigator() {
  const AuthCtx = useContext(AuthContext);

  return (
    <>
      {AuthCtx.isAuthenticated ? (
       <WelcomeScreen/>
      ) : (
        <AuthNavigator/>
      )}
    </>
  );
}