import { Request, Response } from "express";
import { ShowOperationService } from "./ShowOperationService";


export class ShowOperationController{
  async handle(request: Request, response: Response){
    const { id_client } = request;

    const showOperationService = new ShowOperationService();
    const result = await showOperationService.execute(id_client)

    return response.json({result});
  }
}