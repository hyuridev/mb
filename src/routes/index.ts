import { Router } from "express";

import { appRoutes } from "./app.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/", appRoutes);
router.use("/users", userRoutes);

export { router };
