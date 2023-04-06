import { Router } from "express";
import { default as declineRoutes } from "./declineStepOne";
import { default as declineTwoRoutes } from "./declineStepTwo";
import { default as declineThreeRoutes } from "./declineStepThree";
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
router.use("/recusar/qualitativa",declineTwoRoutes );
router.use("/recusar/quantitativa",declineThreeRoutes );


export default router;
