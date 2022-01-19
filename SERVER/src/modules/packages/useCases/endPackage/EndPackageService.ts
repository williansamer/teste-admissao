import prisma from "../../../../database/prisma";

export class EndPackageService {
  async execute(id: string) {
    const resultPackage = [];
    const resultSubPackage = [];
    const resultOperation = [];

    const findPackage = await prisma.package.findFirst({
      where: {
        id,
      },
    });

    const findSubPackage = await prisma.subPackage.findFirst({
      where: {
        id_package: id,
      },
    });

    const findOperation = await prisma.operation.findFirst({
      where: {
        id: findPackage?.id_operation,
      },
    });

    if (findPackage?.closed_at === null) {
      const updatePackage = await prisma.package.update({
        where: {
          id,
        },
        data: {
          closed_at: new Date(),
        },
      });
      resultPackage.push(updatePackage.closed_at);

      if (findSubPackage) {
        if (findSubPackage.closed_at === null) {
          const updateSubPackage = await prisma.subPackage.update({
            where: {
              id: findSubPackage.id,
            },
            data: {
              closed_at: new Date(),
            },
          });

          resultSubPackage.push(updateSubPackage);
        }
      }
    }

    if (findOperation?.done) {
      throw new Error("The operation has already done");
    } else if (findOperation?.opened && findOperation?.reserved) {
      const updateOperation = await prisma.operation.update({
        where: {
          id: findPackage?.id_operation,
        },
        data: {
          done: true,
        },
      });
      resultOperation.push(updateOperation.done);
    } else {
      throw new Error(
        "The operation must be opened and reserved for any package"
      );
    }

    return {
      Package_closing_day: resultPackage,
      Full_operation: resultOperation,
    };
  }
}
