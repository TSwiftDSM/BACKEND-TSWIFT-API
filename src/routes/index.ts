import { Router } from "express";

import { default as productRoutes } from "./product";
import { default as quantitativeRoutes } from "./quantitative";

const router = Router();

router.get("/", (req, res) => {
  const users = [
    "Daniel",
    "Elaine",
    "Gabriel",
    "Jackles",
    "Miguel",
    "Otávio",
    "Vitor",
    "Yasmin",
  ];
  res.render("test", { users: users });
});

router.use("/produto", productRoutes);
router.use("/conferencia/quantitativa", quantitativeRoutes);

export default router;
