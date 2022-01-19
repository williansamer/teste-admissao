import { Request, Response } from "express";
import { ShowAllPackagesFromOperationService } from "./ShowAllPackagesFromOperationService";

export class ShowAllPackagesFromOperationController{
  async handle(request: Request, response: Response){
    const { id: id_operation } = request.params

    const showallPackagesFromOperationService = new ShowAllPackagesFromOperationService();
    const result = await showallPackagesFromOperationService.execute( id_operation )

    return response.json(result)
  }
}