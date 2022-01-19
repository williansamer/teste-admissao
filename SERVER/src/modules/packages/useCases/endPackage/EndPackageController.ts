import { Request, Response } from "express";
import { EndPackageService } from "./EndPackageService";


export class EndPackageController{
  async handle(request: Request, response: Response){
    const { id} = request.params;

    const endPackageService = new EndPackageService();
    const result = await endPackageService.execute(id);

    return response.json(result)
  }
}