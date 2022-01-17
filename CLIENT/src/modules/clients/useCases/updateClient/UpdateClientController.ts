import { Request, Response } from "express";
import { UpdateClientService } from "./UpdateClientService";

export class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const { username, password, name, address, birthday, cpf } = request.body;

    const updateClientService = new UpdateClientService();

    try {
      const result = await updateClientService.execute({
        id: id_client,
        username,
        password,
        name,
        address,
        birthday,
        cpf,
      });
      return response.json(result);
    } catch (error) {
      return response.status(404).json({
        error: "Error while update client. Client does not exist or invalid ID"
      })
    }
  }
}
