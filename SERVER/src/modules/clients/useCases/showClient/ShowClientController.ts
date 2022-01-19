import { Request, Response } from "express";
import { ShowClientService } from "./ShowClientService";

export class ShowClientController{
  async handle(request: Request, response: Response){
    const showClientService = new ShowClientService();
    const result = await showClientService.execute();

    return response.json(result)
  }
}