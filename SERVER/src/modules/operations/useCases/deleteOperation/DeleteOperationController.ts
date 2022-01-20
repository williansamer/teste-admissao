import { Request, Response } from "express";
import { DeleteOperationService } from "./DeleteOperationService";


export class DeleteOperationController{
  async handle(request: Request, response: Response){
    const { id } = request.params;

    const deleteOperationService = new DeleteOperationService();
    const result = await deleteOperationService.execute(id)

    return response.send(`Operation ${result.name_operation} deleted`)
  }
}