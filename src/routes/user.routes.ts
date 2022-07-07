import { Router } from "express";

import listUsersController from "../useCases/user/listUsers";
const userRoutes = Router();

userRoutes.get("/", (request, response) => {
    return listUsersController().handle(request, response);
});

export { userRoutes };
