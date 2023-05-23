import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../dao/user';
import { UserEntity } from '../../domain/user';
import { UserDto } from '../../shared/dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(user: UserDto): Promise<UserEntity> {
    return this.userRepository.create(<UserEntity>user);
  }

  /*public async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }*/

  public async findAll() {
    return this.userRepository.findAll();
  }
}
