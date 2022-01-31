import { Request, Response } from "express";
import { ShowAllClientsService } from "./ShowAllClientsService";

export class ShowAllClientsController{
  async handle(request: Request, response: Response){
    const showAllClientsService = new ShowAllClientsService();
    const result = await showAllClientsService.execute();

    return response.json(result)
  }
}