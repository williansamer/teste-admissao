//import "dotenv/config"
import { verify } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

type IPayLoad = {
  sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction){
  const header = request.headers.authorization;

  if(!header){
    throw new Error("Token Missing")
  }

  const [, token] = header.split(" ");

  try {
    const { sub } = verify(token, "dsad951fsr9a514r491sr951fsd9sd1f841sd8f1") as IPayLoad //Arrumar depois
    request.id_client = sub;
    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Token Invalid"
  })
  }

}