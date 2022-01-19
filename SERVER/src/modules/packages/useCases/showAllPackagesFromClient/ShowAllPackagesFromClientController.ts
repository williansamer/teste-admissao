import { Request, Response } from "express";
import { ShowAllPackagesFromClientService } from "./ShowAllPackagesFromClientService";

export class ShowAllPackagesFromClientController{
  async handle(request: Request, response: Response){
    const { id_client } = request

    const showallPackagesFromClientService = new ShowAllPackagesFromClientService();
    const result = await showallPackagesFromClientService.execute( id_client )

    return response.json(result)
  }
}