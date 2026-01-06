import { createContext, ReactElement, useState } from "react";
import { IExpense } from "../Interfaces/IExpense";
import { dropExpense, patchExpense, uploadExpense } from "../db/Controllers/ExpensesController";
import { getExpenses } from "../db/service";

type ExpensesContextType = {
  expenses: Array<IExpense>;
  addExpense: (exp: IExpense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (exp: IExpense) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

export default function ExpensesContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const expensesInit: IExpense[] = [];
  const [expenses, setExpenses] = useState<IExpense[]>(expensesInit);
  getExpenses(setExpenses);

  async function addExpense(expense: IExpense) {
    uploadExpense(expense.name, expense.cost, expense.date);
    await getExpenses(setExpenses);
  }

  async function deleteExpense(idExpense: string) {
    dropExpense(idExpense);
    await getExpenses(setExpenses);
  }

  async function updateExpense(expense: IExpense) {
    patchExpense(expense);
    await getExpenses(setExpenses);
  }

  const value: ExpensesContextType = {
    expenses: expenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
