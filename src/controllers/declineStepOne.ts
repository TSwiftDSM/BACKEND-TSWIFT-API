import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

class  DeclineDeliveryStepOneController{
  
 

  async get (req: Request, res: Response) {
    res.render("declineStepOne")
  };

    async post (req: Request, res: Response) {
      let inconsistencia = req.body.inconsistencia
      if (inconsistencia == "Fornecedor"){
        inconsistencia = 1
      }
      else if (inconsistencia == "Transportadora"){
        inconsistencia = 2
      }
      else if (inconsistencia == "Tipo de frete"){
        inconsistencia = 3
      }
      else if (inconsistencia == "Condição de pagamento"){
        inconsistencia = 4
      }
      console.log(inconsistencia)
      const motivo = req.body.motivo
      const declineDelivery = await prisma.disapprovalDelivery.create({
        data: {
          motivo: motivo ,
          qualityTestId: parseInt(inconsistencia),
          deliveryId:1
        },
      })
      res.render("test")
  };
        
        
}
 

export default new DeclineDeliveryStepOneController();