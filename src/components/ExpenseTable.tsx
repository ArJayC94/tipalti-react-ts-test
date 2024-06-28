import { useEffect, useState } from "react";
import { Expense } from "../interfaces/Expense";
import { ExpenseContent } from "./ExpenseContent";

export const ExpenseTable = () => {
  const [expenses, SetExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getExpense();
  }, []);

  const getExpense = () => {
    try {
      fetch("https://expenses-backend-mu.vercel.app/expenses", {
        headers: {
          "Content-Type": "application/json",
          Username: "Xuezhi.chen",
        },
      })
        .then((response) => response.json())
        .then((data) => SetExpenses(data));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Expenses</h1>
      <hr />
      <table>
        <thead>
          <th>Date</th>
          <th>Merchant</th>
          <th>Amount</th>
          <th>Catergory</th>
          <th>Description</th>
          <th>Status</th>
        </thead>
        <tbody>{expenses.map((e) => ExpenseContent(e))}</tbody>
      </table>
    </>
  );
};
