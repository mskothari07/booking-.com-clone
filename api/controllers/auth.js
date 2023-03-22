import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        //Password Hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        //finding the username
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found"));

        // Checking the password
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Inccorrect password"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
        );

        //Retruning other details expect password
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ ...otherDetails });
    } catch (error) {
        next(error);
    }
};
