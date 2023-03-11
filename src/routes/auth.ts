import { Router } from "express";
import { singUp, singIn, profile } from "../controllers/auth.controller";

/**
 * @module router
 */
const router: Router = Router();

/**
 * @description auth
 */
router.post("/singin", singIn);
router.post("/singup", singUp);
router.get("/profile", profile);

export { router };
