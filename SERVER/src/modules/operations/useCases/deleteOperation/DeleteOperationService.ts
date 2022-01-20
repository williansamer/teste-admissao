import prisma from "../../../../database/prisma"

export class DeleteOperationService{
  async execute(id: string){
    const findOperation = await prisma.operation.findFirst({
      where: {
        id
      }
    })
    // console.log(findOperation)

    if(findOperation && !findOperation.done){
      // console.log(findOperation)
      const result = await prisma.operation.delete({
        where: {
          id
        }
      })

      console.log(result)

      return result
    } else{
      throw new Error("The operation has already done. Impossible to delete")
    }
  }
}