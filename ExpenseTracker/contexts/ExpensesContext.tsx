import { createContext, ReactElement, useState } from "react";
import { IExpense } from "../Interfaces/IExpense";
import EXPENSES from "../data/expenses.json";

type ExpensesContextType = {
  expenses: Array<IExpense>;
  addExpense: (exp: IExpense) => void;
  deleteExpense: (id: number) => void;
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
  const expensesRaw: IExpense[] = [];

  EXPENSES.forEach((e) => {
    expensesRaw.push({
      id: e.id,
      name: e.name,
      date: new Date(e.date),
      cost: e.cost,
    });
  });

  const [expenses, setExpenses] = useState<IExpense[]>(expensesRaw);

  function addExpense(expense: IExpense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(idExpense: number) {
    setExpenses(expenses.filter((e) => e.id != idExpense));
  }

  function updateExpense(expense: IExpense) {
    const expensesHelper = expenses;
    expensesHelper.map((e) => {
      if (e.id === expense.id) e = expense;
    });
    setExpenses(expensesHelper);
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
