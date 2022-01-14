import { Request, Response } from "express";
import { DeleteClientService } from "./DeleteClientService";


export class DeleteClientController{
  async handle(request: Request, response: Response){
    const {id} = request.params;

    const deleteClientService = new DeleteClientService();
    
    try {
      await deleteClientService.execute(id);
      return response.status(200).send("Deletado")
    } catch (error) {
      return response.status(404).json({
        error: "Error while delete client. Client does not exist or invalid ID"
      })
    }

  }
}