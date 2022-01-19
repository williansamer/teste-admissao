import { hash } from "bcrypt"
import prisma from "../../../../database/prisma"

interface IUpdateClient{
  id: string,
  username?: string;
  password?: string;
  name?: string;
  address?: string;
  birthday?: string;
  cpf?: string
}

export class UpdateClientService{
  async execute({id, username, password, name, address, birthday, cpf}: IUpdateClient){
    const clientExist = await prisma.client.findFirst({
      where:{
        id
      }
    })

    if(!clientExist){
      throw new Error("Client does not exist")
    }

    if(password){
      const hashPassword = await hash(password, 10)
      password = hashPassword
    }

    const result = await prisma.client.update({
      where: {
        id
      },
      data:{
        username, 
        password, 
        name, 
        address, 
        birthday, 
        cpf
      }
    })

    return result;

  }
}