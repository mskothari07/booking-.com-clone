import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();


// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

// Get Specific User
router.get("/:id", getUser);

// Get all the User
router.get("/", getAllUser);

export default router;



