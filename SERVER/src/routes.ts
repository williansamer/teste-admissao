import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/client/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "./modules/clients/useCases/deleteClient/DeleteClientController";
import { ShowClientController } from "./modules/clients/useCases/showClient/ShowClientController";
import { UpdateClientController } from "./modules/clients/useCases/updateClient/UpdateClientController";
import { CreateOperationController } from "./modules/operations/useCases/createOperation/CreateOperationController";
import { ShowOperationController } from "./modules/operations/useCases/showOperation/ShowOperationController";
import { ShowAllPackagesFromClientController } from "./modules/packages/useCases/showAllPackagesFromClient/ShowAllPackagesFromClientController";
import { CreatePackageController } from "./modules/packages/useCases/createPackage/CreatePackageController";
import { ShowAllPackagesFromOperationController } from "./modules/packages/useCases/showAllPackagesFromOperation/ShowAllPackagesFromOperationController";
import { EndPackageController } from "./modules/packages/useCases/endPackage/EndPackageController";

const routes = Router();

routes.get("/showClients", new ShowClientController().handle)
routes.get("/showOperations", ensureAuthenticateClient , new ShowOperationController().handle)
routes.get("/showAllPackagesClient", ensureAuthenticateClient , new ShowAllPackagesFromClientController().handle)
routes.get("/showAllPackagesOperation/:id", ensureAuthenticateClient , new ShowAllPackagesFromOperationController().handle)

routes.post("/authClient", new AuthenticateClientController().handle);
routes.post("/createClient", new CreateClientController().handle)
routes.post("/createOperation", ensureAuthenticateClient, new CreateOperationController().handle);
routes.post("/createPackage/:id", ensureAuthenticateClient , new CreatePackageController().handle)

routes.put("/updateClient", ensureAuthenticateClient , new UpdateClientController().handle);
routes.put("/updateEndPackage/:id", ensureAuthenticateClient , new EndPackageController().handle);

routes.delete("/deleteClient", ensureAuthenticateClient , new DeleteClientController().handle)

export default routes;