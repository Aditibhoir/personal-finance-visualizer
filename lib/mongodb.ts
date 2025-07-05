// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI in .env.local");
}

let isConnected = false;

export default async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI!); // Non-null assertion
    isConnected = true;
    console.log("✅ MongoDB connected!");
  } catch (err: any) {
    console.error("❌ MongoDB connection failed:", err.message);
    throw err;
  }
}
