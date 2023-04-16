import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);
// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Get Specific Hotel
router.get("/find/:id", getHotel);

// Get all the Hotel
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);


export default router;
