import prisma from "../../../../database/prisma"
import {hash} from "bcrypt"

interface ICreateClient {
  username: string;
  password: string;
  name: string;
  address: string;
  birthday: string;
  cpf: string
}

export class CreateClientService{
  async execute({username, password, name, address, birthday, cpf}: ICreateClient){
    const clientExist = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if(clientExist){
      throw new Error("User already exists!")
    }

    const hashPassword = await hash(password, 10);

    const createClient = prisma.client.create({
      data: {
        username, 
        password: hashPassword, 
        name, 
        address, 
        birthday, 
        cpf
      }
    })

    return createClient
  }
}