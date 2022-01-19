import { Request, Response } from "express";
import { CreateClientService } from "./CreateClientService";



export class CreateClientController{
  async handle(request: Request, response: Response){
    const { username, password, name, address, birthday, cpf } = request.body;

    const createClientService = new CreateClientService();
    const result = await createClientService.execute({
      username,
      password, 
      name,
      address, 
      birthday, 
      cpf
    })

    return response.json(result)
  }
}