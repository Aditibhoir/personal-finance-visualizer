"use client";

import React from "react";

interface Transaction {
  _id: string;
  title: string;
  amount: number;
  date: string;
}

export default function TransactionList({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="bg-white p-4 mt-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((txn) => (
          <li key={txn._id} className="flex justify-between">
            <span>{txn.title}</span>
            <span>₹{txn.amount}</span>
            <span>{new Date(txn.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
