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
      let resultSubPackage = []

      //console.log("oi")

      for(let getRest = rest; getRest >= 0; getRest){
        const limitedValue = 5000;
        
        if(getRest > 5000){
          const getSubPackage = await prisma.subPackage.create({
            data:{
              id_client,
              id_operation,
              id_package,
              value: limitedValue,
              preference: getPackage.preference
            },
            include: {
              operation: true
            }
          })  

          resultSubPackage.push([getSubPackage])
        } else{
          const getSubPackage = await prisma.subPackage.create({
            data:{
              id_client,
              id_operation,
              id_package,
              value: getRest,
              preference: getPackage.preference
            },
            include: {
              operation: true
            }
          })  

          resultSubPackage.push([getSubPackage])
        }

        getRest = getRest - limitedValue;
      }

      return resultSubPackage
    } else{
      throw new Error("Operation does not have a value and/or any preference of money!!!")
    }
  }
}