import { Request, Response } from "express";
import { AllPackagesFromClientService } from "./AllPackagesFromClientService";

export class AllPackagesFromClientController{
  async handle(request: Request, response: Response){
    const { id_client } = request

    const allPackagesFromClientService = new AllPackagesFromClientService();
    const result = await allPackagesFromClientService.execute( id_client )

    return response.json(result)
  }
}