import prisma from "../../../../database/prisma";

export class DeleteClientService {
  async execute(id: string) {
    const clientExist = await prisma.client.findFirst({
      where: {
        id,
      },
    });

    if (!clientExist) {
      throw new Error("Client does not exist");
    }

    const result = await prisma.client.delete({
      where: {
        id,
      },
    });

    return result
  }
}
