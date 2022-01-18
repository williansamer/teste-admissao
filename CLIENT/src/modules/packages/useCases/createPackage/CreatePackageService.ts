import prisma from "../../../../database/prisma"

interface ICreatePackage{
  id_client: string;
  id_operation: string;
}

export class CreatePackageService{
  async execute({id_client, id_operation}: ICreatePackage){
    const getOperation = await prisma.operation.findFirst({
      where: {
        id: id_operation
      }
    })

    if(getOperation){
      const result = await prisma.package.create({
        data:{
          id_client,
          id_operation,
          value: getOperation.value,
          preference: getOperation.preference
        },
        include: {
          operation: true
        }
      })

      
    return result
    } else{
      throw new Error("Operation does not have a value and/or any preference of money!!!")
    }
  }
}