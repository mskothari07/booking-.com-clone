import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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

//Handelling DB disconnection
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from DB");
});

//middlwares

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

// Calling port
const port = process.env.PORT || 8001;

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
