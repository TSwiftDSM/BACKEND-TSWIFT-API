import { Request, Response } from "express";

class ProductController {
	async get(req: Request, res: Response) {
		res.send("Hello world");
	}
}

export default new ProductController()