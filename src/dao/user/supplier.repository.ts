import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierEntity } from '../../domain/user';

@Injectable()
export class SupplierRepository {
  constructor(
    @InjectRepository(SupplierEntity)
    private readonly supplierRepository: Repository<SupplierEntity>,
  ) {}

  public async create(user: SupplierEntity): Promise<SupplierEntity> {
    return this.supplierRepository.save(user);
  }

  /*public async findById(id) {
    return this.supplierRepository.findOne({ id: id });
  }*/

  public async findAll() {
    return this.supplierRepository.find();
  }
}
