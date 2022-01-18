import prisma from "../../../../database/prisma"

interface ICreateSubPackage{
  id_client: string;
  id_operation: string;
  id_package: string;
  rest: number;
  preference: number
}

export class CreateSubPackageService{
  async execute({id_client, id_operation, id_package, rest, preference}: ICreateSubPackage){
    const getPackage = await prisma.package.findFirst({
      where: {
        id: id_package
      }
    })

    if(getPackage){
      if(getPackage.value > 5000){
        const limitedValue = 5000

        const result = await prisma.package.create({
          data:{
            id_client,
            id_operation,
            value: limitedValue,
            preference: getPackage.preference
          },
          include: {
            operation: true
          }
        })  

        return result
      } else{
        const resultSubPackage = await prisma.subPackage.create({
          data:{
            id_client,
            id_operation,
            id_package,
            value: rest,
            preference: preference
          }
        })

      return resultSubPackage
      }
    } else{
      throw new Error("Operation does not have a value and/or any preference of money!!!")
    }
  }
}