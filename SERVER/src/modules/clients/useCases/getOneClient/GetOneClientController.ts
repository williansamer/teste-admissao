import { Request, Response } from "express";
import { GetOneClientService } from "./GetOneClientService";

export class GetOneClientController{
  async handle(request: Request, response: Response){
    const { username, password } = request.body;

    const getOneClientService = new GetOneClientService();
    const result = await getOneClientService.execute(
      username, password
    );

    return response.json(result)
  }
}