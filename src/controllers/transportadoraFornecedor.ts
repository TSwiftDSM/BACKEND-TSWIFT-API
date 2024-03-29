import { Request, Response } from "express";
import TransportadoraFornecedorServices from "../services/transportadoraFornecedor";

class TrasportadoraFornecedorController {
  async get(req: Request, res: Response) {
    //GET para pegar todos transportadoraFornecedor
    try {
      const transportadoraFornecedor =
        await TransportadoraFornecedorServices.get();
      return res.status(200).json(transportadoraFornecedor);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async post(req: Request, res: Response) {
    // POST para cadastrar TransportadoraFornecedor
    try {
      const data = req.body;
      await TransportadoraFornecedorServices.post(data);
      return res
        .send("TransportadoraFornecedor cadastrado com sucesso")
        .status(200);
    } catch {
      res.send("Erro ao cadastrar TransportadoraFornecedor");
    }
  }

  async delete(req: Request, res: Response) {
    // DELETE para deletar TransportadoraFornecedor pelo ID
    try {
      const { idTransportadoraFornecedor } = req.params;
      await TransportadoraFornecedorServices.delete(
        parseInt(idTransportadoraFornecedor)
      );
      return res
        .send("TransportadoraFornecedor apagado com sucesso")
        .status(200);
    } catch {
      res.send("Erro ao apagar TransportadoraFornecedor");
    }
  }
}

export default new TrasportadoraFornecedorController();
