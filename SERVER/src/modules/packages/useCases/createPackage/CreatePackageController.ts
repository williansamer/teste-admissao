import { Request, Response } from "express";
import { CreateSubPackageService } from "../../../subPackages/useCases/createSubPackage/CreateSubPackageService";
import { CreatePackageService } from "./CreatePackageService";
export class CreatePackageController{
  async handle(request: Request, response: Response){
    const { id_client } = request;
    const { id: id_operation } = request.params;

    const createPackageService = new CreatePackageService();
    const resultPackage = await createPackageService.execute({
      id_client, id_operation
    })

    if(resultPackage.rest !== null){
      const createSubPackageService = new CreateSubPackageService();
      const resultSubPackage = await createSubPackageService.execute({
        id_client, 
        id_operation, 
        id_package: resultPackage.id, 
        rest: resultPackage.rest, 
        preference: resultPackage.preference
      })

      return response.json({resultPackage, resultSubPackage})
    }

    return response.json(resultPackage)
  }
}