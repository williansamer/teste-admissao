import prisma from "../../../../database/prisma";

export class ShowOperationService{
  async execute(id_client: string){
    const showOperations = await prisma.operation.findMany({
      where: {
        id_client
      },
      include: {
        client: true
      },
      orderBy: {
        created_at: "desc"
      }
    });

    return showOperations;
  }
}