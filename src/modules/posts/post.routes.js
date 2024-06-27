import { Router } from "express";
import * as PC from "./post.controller.js";

const router = Router();

router.get("/:id",PC.getPost)
router.post("/",PC.addPost)
router.put("/:id",PC.updatePost)
router.delete("/:id",PC.deletePost)
router.put("/softDelete/:id", PC.softDeletePost)
router.get("/specificPost/:id",PC.specificPost)

export default router