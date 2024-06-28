export interface Expense {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: string;
  category: "travel" | "training" | "meal";
  status: string;
}
