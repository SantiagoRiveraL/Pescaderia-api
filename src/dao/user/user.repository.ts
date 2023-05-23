import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  /*public async findByEmail(email: string) {
    return await this.userRepository.findOne({
      email: email,
    });
  }*/

  public async findAll() {
    return this.userRepository.find();
  }
}
