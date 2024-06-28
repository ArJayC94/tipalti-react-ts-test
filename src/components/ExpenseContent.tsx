import { Expense } from "../interfaces/Expense";
import { formatDate } from "../utils/formatDate";

export const ExpenseContent = (expense: Expense) => {
  return (
    <>
      <tr key={expense.id}>
        <td>{formatDate(expense.date)}</td>
        <td>{expense.merchant}</td>
        <td>{expense.amount}</td>
        <td>{expense.category}</td>
        <td>{expense.description}</td>
        <td>{expense.status}</td>
      </tr>
    </>
  );
};
