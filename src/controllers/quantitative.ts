import { Request, Response } from "express";

class QuantitativeController {
    // private listProducts(){
    //     console.log("Pesquisa no banco quais produtos e atribui em produtos");
        
    //     const products = {
    //         4234: {
    //             name: 'Arroz Vermelho'
    //         },
    //         5678: {
    //             name: 'Arroz Branco'
    //         }
    //     };

    //     return products;
    // }

    async get (req: Request, res: Response) {
        const product: object = {
                     4234: {
                         name: 'Arroz Vermelho'
                     },
                     5678: {
                         name: 'Arroz Branco'
                     }
                 };
        res.render("quantitative", { products_object: product })
    }
    
    async post (req: Request, res: Response) {
        res.send(req.body)
    }
}
export default new QuantitativeController();
