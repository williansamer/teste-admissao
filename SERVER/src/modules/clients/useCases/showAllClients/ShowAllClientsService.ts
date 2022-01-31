import prisma from "../../../../database/prisma"

export class ShowAllClientsService{
  async execute(){
    const result = await prisma.client.findMany()

    return result
  }
}