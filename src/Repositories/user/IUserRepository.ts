/**
 * Interface dos metodos e atributos usados no repository
 */
import { Users } from "../../entities/User";

interface IUserRepositoryDTO {}

interface IUserRepository {
    list(): Promise<Users[]>;
}

export { IUserRepository, IUserRepositoryDTO };
