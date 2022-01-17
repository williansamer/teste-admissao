import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/client/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "./modules/clients/useCases/deleteClient/DeleteClientController";
import { ShowClientController } from "./modules/clients/useCases/showClient/ShowClientController";
import { UpdateClientController } from "./modules/clients/useCases/updateClient/UpdateClientController";
import { CreateOperationController } from "./modules/operations/useCases/createOperation/CreateOperationController";

const routes = Router();

routes.get("/showClients", new ShowClientController().handle)

routes.post("/createClient", new CreateClientController().handle)
routes.post("/authClient", new AuthenticateClientController().handle);

routes.post("/createOperation", ensureAuthenticateClient, new CreateOperationController().handle);

routes.put("/updateClient/", ensureAuthenticateClient , new UpdateClientController().handle);

routes.delete("/deleteClient/", ensureAuthenticateClient , new DeleteClientController().handle)

export default routes;