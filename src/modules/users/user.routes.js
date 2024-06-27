// ==========================Q.4======================


import { Router } from "express";
import * as UC from "./user.controller.js";

const router = Router()
router.get("/", UC.userLogin)
router.get("/logout", UC.userLogout)
router.post("/", UC.addUser)


export default router