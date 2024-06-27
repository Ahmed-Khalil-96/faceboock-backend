import { Router } from "express";
import * as CC from "./comment.controller.js";

const router = Router()

router.get("/:id",CC.getComment)
router.post("/", CC.addComment)
router.put("/:id", CC.updateComment)
router.delete("/:id", CC.deleteComment)

export default router