import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import * as dotenv from "dotenv"
import prisma from "../../../database/prisma"

dotenv.config();
interface IAuthClient{
  username: string,
  password: string;
}

export class AuthenticateClientService{
  async execute({username, password}: IAuthClient){
    const userExist = await prisma.client.findFirst({
      where: {
        username
      }
    })

    if(!userExist){
      throw new Error("User does not exist")
    }

    const comparePassword = compare(password, userExist.password)

    if(!comparePassword){
      throw new Error("Password incorrect")
    }

    const token = sign({username}, "dsad951fsr9a514r491sr951fsd9sd1f841sd8f1", { //Arrumar isto posteriormente
      expiresIn: "1d",
      subject: userExist.id
    })

    return token
  }
}