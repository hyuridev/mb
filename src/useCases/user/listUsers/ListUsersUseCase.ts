import { IUserRepository } from "../../../Repositories/user/IUserRepository";

class ListUsersUseCase {
    // eslint-disable-next-line no-useless-constructor
    constructor(private userRepository: IUserRepository) {}

    async execute(): Promise<any> {
        const users = await this.userRepository.list();

        return users;
    }
}
export { ListUsersUseCase };
