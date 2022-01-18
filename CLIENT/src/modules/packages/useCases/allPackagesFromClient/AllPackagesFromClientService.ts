import prisma from "../../../../database/prisma"

export class AllPackagesFromClientService{
  async execute(id_client: string){
    const result = await prisma.package.findMany({
      where: {
        id_client
      },
      include: {
        operation: true
      }
    })

    return result
  }
}