import { Router } from "express";
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
  res.render("conferenciaQuantitativa", { users: users });
});

router.use("/recusar/entradaMateriais",declineRoutes );

export default router;
