import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/client/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "./modules/clients/useCases/deleteClient/DeleteClientController";
import { ShowClientController } from "./modules/clients/useCases/showClient/ShowClientController";
import { UpdateClientController } from "./modules/clients/useCases/updateClient/UpdateClientController";

const routes = Router();

routes.get("/showClients", new ShowClientController().handle)

routes.post("/createClient", new CreateClientController().handle)
routes.post("/authClient", new AuthenticateClientController().handle);

routes.put("/updateClient/:id", new UpdateClientController().handle);

routes.delete("/deleteClient/:id", new DeleteClientController().handle)

export default routes;