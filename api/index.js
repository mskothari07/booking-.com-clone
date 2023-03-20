import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

// Initial configuration
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from DB");
});
mongoose.connection.on("connected", () => {
  console.log("DB connection established");
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Calling port
const port = process.env.PORT || 8001;

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
