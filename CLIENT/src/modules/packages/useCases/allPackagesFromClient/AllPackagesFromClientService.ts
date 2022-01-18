import prisma from "../../../../database/prisma"

export class AllPackagesFromClientService{
  async execute(id_client: string){
    const resultPackage = await prisma.package.findMany({
      where: {
        id_client
      },
      include: {
        operation: true
      }
    })

    const resultSubPackage = await prisma.subPackage.findMany({
      where: {
        id_client
      }
    })

    return {resultPackage, resultSubPackage}
  }
}