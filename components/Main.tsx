"use client";

import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import ExpenseChart from "./ExpenseChart";

interface Transaction {
  _id: string;
  title: string;
  amount: number;
  date: string;
}

export default function Main() {
  const [reload, setReload] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleReload = () => setReload(!reload);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data: Transaction[]) => setTransactions(data))
      .catch((err) => console.error("Error loading transactions:", err));
  }, [reload]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        💰 Personal Finance Visualizer
      </h1>

      <TransactionForm onAdd={handleReload} />
      <TransactionList transactions={transactions} />
      <ExpenseChart />
    </div>
  );
}
