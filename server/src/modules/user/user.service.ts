import { UserRepository } from "../../repositories/user.repositories.js";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getAllUsers() {
        return this.userRepository.findAll();
    }

    async getUserById(id: string) {
        return this.userRepository.findById(id);
    }

    async createUser(data: any) {
        return this.userRepository.create(data);
    }

    async updateUser(id: string, data: any) {
        return this.userRepository.update(id, data);
    }
}