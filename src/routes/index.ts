import { Router } from "express";

import { default as productRoutes } from "./product";
import { default as declineRoutes } from "./declineStepOne";

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
router.use("/declineDelivery",declineRoutes );

export default router;
