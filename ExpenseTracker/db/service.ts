import { IExpense } from "../Interfaces/IExpense";
import { fetchExpenses } from "./Controllers/ExpensesController";

export async function getExpenses(
  setter: (value: React.SetStateAction<IExpense[]>) => void
) {
  const expensesRaw = await fetchExpenses();
  const expensesProcessed = [];

  for (const expenseRaw of expensesRaw) {
    const id: string = expenseRaw.id;
    const name: string = expenseRaw.name;
    const date: Date = new Date(expenseRaw.date.seconds * 1000);
    const cost: number = expenseRaw.cost;

    expensesProcessed.push({
      id: id,
      name: name,
      date: date,
      cost: cost,
    });
  }

  setter(expensesProcessed);
}


