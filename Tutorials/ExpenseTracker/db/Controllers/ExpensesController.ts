import {
  collection,
  addDoc,
  getDocs,
  DocumentData,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../connection";
import { IExpense } from "../../Interfaces/IExpense";

export async function uploadExpense(name: string, cost: number, date: Date) {
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      name: name,
      cost: cost,
      date: date,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function fetchExpenses(): Promise<DocumentData[]> {
  const expensesCol = collection(db, "expenses");
  const expensesSnapshot = await getDocs(expensesCol);

  const expenseList = expensesSnapshot.docs.map((doc) => {
    return {
      id: JSON.parse(JSON.stringify(doc)).bundleName.split("/")[1],
      ...doc.data(),
    };
  });

  return expenseList;
}

export async function dropExpense(id: string) {
  await deleteDoc(doc(db, "expenses", id));
}

export async function patchExpense(expense: IExpense) {
  await setDoc(doc(db, "expenses", expense.id), {
    name: expense.name,
    cost: expense.cost,
    date: expense.date,
  });
}
