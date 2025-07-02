import { useContext } from "react";
import ExpensesContextProvider from "../contexts/ExpensesContext";
import ExpensesNavigator from "./Expenses/ExpensesNavigator";
import { AuthContext } from "../contexts/AuthContext";
import AuthNavigator from "./Auth/AuthNavigator";

export default function MainNavigator() {
  const AuthCtx = useContext(AuthContext);

  return (
    <>
      {AuthCtx.isAuthenticated ? (
        <ExpensesContextProvider>
          <ExpensesNavigator></ExpensesNavigator>
        </ExpensesContextProvider>
      ) : (
        <AuthNavigator></AuthNavigator>
      )}
    </>
  );
}
