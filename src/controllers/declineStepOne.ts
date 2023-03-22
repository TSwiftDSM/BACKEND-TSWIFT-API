import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

class  DeclineDeliveryStepOneController{
  
 

  async get (req: Request, res: Response) {
    res.render("declineStepOne")
  };

    // async declineStepOne(motivo:string)  {
    //     const declineDelivery = await prisma.disapprovalDelivery.create({
    //         data: {
    //           motivo: motivo ,
    //           qualityTestId: 2,
    //           deliveryId:1


    //         },
    //       })
    // };
    


    async post (req: Request, res: Response) {
      const motivo = req.body.motivo
      const declineDelivery = await prisma.disapprovalDelivery.create({
        data: {
          motivo: motivo ,
          qualityTestId: 1,
          deliveryId:1
        },
      })
      res.render("test")
  };
        
        
}
 

export default new DeclineDeliveryStepOneController();