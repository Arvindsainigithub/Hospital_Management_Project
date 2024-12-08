import express from "express";
import { getAllMessage, sendMessage } from "../controler/messageControler.js";
import {isAdminAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

router.post("/send",sendMessage);
router.get("/getall",isAdminAuthenticated,getAllMessage)
export default router;