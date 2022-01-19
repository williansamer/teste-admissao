import prisma from "../../../../database/prisma"

export class ShowAllPackagesFromClientService{
  async execute(id_client: string){
    const resultPackage = await prisma.package.findMany({
      where: {
        id_client
      },
      orderBy:{
        created_at: "desc"
      }
    })

    const resultSubPackage = await prisma.subPackage.findMany({
      where: {
        id_client
      },
      orderBy:{
        created_at: "desc"
      }
    })

    return {resultPackage, resultSubPackage}
  }

    // async getPackage(id_client: string){ //VER DEPOIS
  //   const resultPackage = await prisma.package.findMany({
  //     where: {
  //       id_client
  //     },
  //     orderBy:{
  //       created_at: "desc"
  //     }
  //   })
    
  //   return resultPackage
  // }

  // async getSubPackage(id_client: string){
  //   const resultSubPackage = await prisma.subPackage.findMany({
  //     where: {
  //       id_client
  //     },
  //     orderBy:{
  //       created_at: "desc"
  //     }
  //   })

  //   return resultSubPackage
  // }

}