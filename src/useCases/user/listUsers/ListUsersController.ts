import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private listUsersUseCase: ListUsersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const dados = await this.listUsersUseCase.execute();

        return response.status(200).json(dados);
    }
}

export { ListUsersController };
