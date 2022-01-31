import prisma from "../../../../database/prisma"

export class GetOneClientService{
  async execute(username: string, password: string){
    const result = await prisma.client.findUnique({
      where: {
        username
      }
    })

    return result
  }
}