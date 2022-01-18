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
      if(getOperation.value > 5000){
        const limitedValue = 5000
        const rest = (getOperation.value - limitedValue);

        const resultPackage = await prisma.package.create({
          data:{
            id_client,
            id_operation,
            value: limitedValue,
            preference: getOperation.preference,
            rest: rest
          },
          include: {
            operation: true
          }
        })

        return resultPackage
      } else{
        const resultPackage = await prisma.package.create({
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

      return resultPackage
      }
    } else{
      throw new Error("Operation does not have a value and/or any preference of money!!!")
    }
  }
}