import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { createPost } from "../controllers/post.controllers.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.post("/like:id", protectRoute, linkeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/", protectRoute, deletePost);

export default router;
