import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

interface Teste {
    nomeTeste: string;
    esperado: boolean;
    obtido: boolean;
  }

class  DeclineDeliveryStepTwoController{
    
    async post (req: Request, res: Response){
        const nomeTeste = req.body;
        nomeTeste.forEach((objeto: Teste) => {
            console.log(JSON.stringify(objeto, null, 2));
          });
        res.send(nomeTeste);
    }
}



export default new DeclineDeliveryStepTwoController();