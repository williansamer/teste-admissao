import { Request, Response } from "express";
import { CreateOperationService } from "./CreateOperationService";


export class CreateOperationController{
  async handle(request: Request, response: Response){
    const { id_client } = request;
    const { name_operation, value, preference, qtt_notes, qtt_packages } = request.body;

    const createOperationService = new CreateOperationService();
    const result = await createOperationService.execute({
      id_client, name_operation, value, preference, qtt_notes, qtt_packages
    })

    return response.json(result);
  }
}