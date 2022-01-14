import prisma from "../../../../database/prisma"

export class ShowClientService{
  async execute(){
    const result = await prisma.client.findMany()

    return result
  }
}