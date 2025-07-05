import mongoose, { Schema, models, model, Document } from "mongoose";

export interface ITransaction extends Document {
  description: string;
  amount: number;
  date: string;
}

const TransactionSchema = new Schema<ITransaction>({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
});

const Transaction = models.Transaction || model<ITransaction>("Transaction", TransactionSchema);
export default Transaction;
