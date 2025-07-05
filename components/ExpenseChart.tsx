"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Transaction {
  date: string;
  amount: number;
}

export default function ExpenseChart() {
  const [data, setData] = useState<{ month: string; amount: number }[]>([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((transactions: Transaction[]) => {
        const grouped: { [month: string]: number } = {};

        transactions.forEach((txn) => {
          const month = new Date(txn.date).toLocaleString("default", {
            month: "short",
            year: "numeric",
          });
          grouped[month] = (grouped[month] || 0) + txn.amount;
        });

        const chartData = Object.keys(grouped).map((month) => ({
          month,
          amount: grouped[month],
        }));

        setData(chartData);
      })
      .catch((error) => console.error("Failed to fetch transactions:", error));
  }, []);

  return (
    <div className="bg-white p-4 mt-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
