import prisma from "../../../../database/prisma"

interface ICreateOperation{
  id_client: string;
  name_operation: string;
  value: number;
  preference:number
}

export class CreateOperationService{
  async execute({id_client, name_operation, value, preference}: ICreateOperation){

    const creatingOperation = await prisma.operation.create({
      data:{
        id_client,
        name_operation,
        value,
        preference
      }
    })

    return creatingOperation
  }
}