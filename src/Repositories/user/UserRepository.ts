import { IUserRepository } from "./IUserRepository";
import { Users } from "../../../src/entities/User";
import { getRepository, Repository } from "typeorm";

/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class UserRepository implements IUserRepository {
    private users: Repository<Users>;

    constructor() {
        this.users = getRepository(Users);
    }

    async list(): Promise<Users[]> {
        const db = await this.users.createQueryBuilder();
        return db.getMany();
    }
}

export { UserRepository };
