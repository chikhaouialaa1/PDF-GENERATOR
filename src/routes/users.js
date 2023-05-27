import * as mw from "../controllers/users.js";
import express from "express";
const router = express.Router();

const basePath = "/";

router.post(`${basePath}pdf`, ...mw.pdf);
export default router;
