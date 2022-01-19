import { Request, Response } from "express";
import { AuthenticateClientService } from "./AuthenticateClientService";


export class AuthenticateClientController{
  async handle(request: Request, response:Response){
    const {username, password} = request.body;

    const authenticateClientService = new AuthenticateClientService();
    const result = await authenticateClientService.execute({
      username, password
    })

    return response.json(result)
  }
}