import prisma from "../../../../database/prisma"

export class ShowAllPackagesFromOperationService{
  async execute(id_operation: string){
    const resultPackage = await prisma.package.findMany({
      where: {
        id_operation
      }
    })

    const resultSubPackage = await prisma.subPackage.findMany({
      where: {
        id_operation
      }
    })

    return {resultPackage, resultSubPackage}
  }
}