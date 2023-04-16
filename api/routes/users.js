import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Checking middleware
// router.get('/checkauth', verifyToken, (req, res, next) => {
//     res.send("You are  authorized")
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send("You are  authorized and you have access to delete this account")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are authorized")
// })
// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get Specific User
router.get("/:id", verifyUser, getUser);

// Get all the User
router.get("/", verifyAdmin, getAllUser);

export default router;



