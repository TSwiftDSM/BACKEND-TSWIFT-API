import { Router } from "express";

import { default as productRoutes } from "./product";

const router = Router();

router.use("/produto", productRoutes);

export default router;
