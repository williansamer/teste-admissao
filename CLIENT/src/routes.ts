import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { ShowClientController } from "./modules/clients/useCases/showClient/ShowClientController";

const routes = Router();

routes.get("/showClients", new ShowClientController().handle)

routes.post("/createClient", new CreateClientController().handle)

routes.put("/updateClient/:id")

routes.delete("/deleteClient/:id")

export default routes;