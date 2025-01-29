import express from "express";
import { signup } from "../controllers/auth.controller.js";


const router = express.Router();
const authController = require("../../controllers/auth.controller");
const { signup } = require("../../controllers/auth.controller");

router.post("/signup", signup);

export default router;
