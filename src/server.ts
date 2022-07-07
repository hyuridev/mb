import "express-async-errors";
import "dotenv/config";
import express, { NextFunction, Response, Request } from "express";
import { router } from "./routes";
import cors from "cors";
import { AppError } from "./config/helpers/errors";

import "./config/database/connection";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                code: err.code,
                message: err.message,
            });
        }

        response.status(500).json({
            status: "error",
            msg: `internal server error - ${err.message}`,
        });
    }
);

app.listen(process.env.PORT, async () => {
    console.log(`Funcionando PORT:${process.env.PORT}`);
});
