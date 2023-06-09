import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelid", verifyAdmin, createRoom);
// Update
router.put("/:id", verifyAdmin, updateRoom);

// Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get Specific Room
router.get("/:id", getRoom);

// Get all the Room
router.get("/", getAllRoom);

export default router;
