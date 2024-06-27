import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";
const router = Router()

// router.get("/:id", getUsersForSideBar) 
router.get("/", protectRoute, getUsersForSideBar)

export default router