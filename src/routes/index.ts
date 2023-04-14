import { Router } from "express";
import { default as cadastroProdutoRoutes } from "./cadastroProduto";

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

router.use("/cadastrar/produto",cadastroProdutoRoutes );

export default router;
