import prisma from "../../../../database/prisma"

export class DeleteOperationService{
  async execute(id: string){
    const findOperation = await prisma.operation.findFirst({
      where: {
        id
      }
    })

    if(findOperation && !findOperation.done){
      const result = await prisma.operation.delete({
        where: {
          id
        }
      })

      return result
    } else{
      throw new Error("The operation has already done. Impossible to delete")
    }
  }
}