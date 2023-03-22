import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

// Create
router.post("/", createHotel);
// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

// Get Specific Hotel
router.get("/:id", getHotel);

// Get all the Hotel
router.get("/", getAllHotel);

export default router;
