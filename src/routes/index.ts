import { Router } from "express";
import { default as quantitativeRoutes } from "./quantitative";

const router = Router();

router.use("/conferencia/quantitativa", quantitativeRoutes);

export default router;
