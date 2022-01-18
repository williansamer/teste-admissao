import { Request, Response } from "express";
import { CreatePackageService } from "./CreatePackageService";

export class CreatePackageController{
  async handle(request: Request, response: Response){
    const { id_client } = request;
    const { id: id_operation } = request.params;

    const createPackageService = new CreatePackageService();
    const result = await createPackageService.execute({
      id_client, id_operation
    })

    return response.json(result)
  }
}