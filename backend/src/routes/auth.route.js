import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);   //done
router.post("/login", login);     //done 
router.post("/logout", logout);   //done

router.put("/update-profile", protectRoute, updateProfile);

// whenever we refresh application
router.get("/check", protectRoute, checkAuth);

export default router;