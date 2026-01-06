import mongoose from "mongoose"
import { DB_URL } from "../configs/env.js"

if (!DB_URL) {
  throw new Error("Database URL is not defined in environment variables")
}

export async function connectDatabase() {
  try {
    await mongoose.connect(DB_URL!)
    console.log("Database connected successfully")
  } catch (error) {
    throw new Error(`Database connection failed: ${error}`)
  }
}


mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected")
})