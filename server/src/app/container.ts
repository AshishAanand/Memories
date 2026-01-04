/**
 * Central place to wire dependencies.
 * Can later be replaced by a DI container (Inversify, TSyringe, etc.)
 */

import { UserService } from '../modules/user/user.service.js'
import { UserRepository } from '../repositories/user.repositories.js'

export const container = {
  userRepository: new UserRepository(),
  userService: null as any
}

container.userService = new UserService(container.userRepository)
