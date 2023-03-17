import { Router } from "express";

import { default as productRoutes } from "./product";

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

export default router;
