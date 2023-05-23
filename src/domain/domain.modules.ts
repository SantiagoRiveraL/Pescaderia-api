import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as usersEntities from './user';
import * as batchesEntities from './batch';
import * as deliveryNotesEntities from './deliveryNote';
import * as reportsEntities from './reports';
@Module({
  exports: [
    TypeOrmModule.forFeature([
      ...Object.values(usersEntities),
      ...Object.values(batchesEntities),
      ...Object.values(deliveryNotesEntities),
      ...Object.values(reportsEntities),
    ]),
  ],
  imports: [
    TypeOrmModule.forFeature([
      ...Object.values(usersEntities),
      ...Object.values(batchesEntities),
      ...Object.values(deliveryNotesEntities),
      ...Object.values(reportsEntities),
    ]),
  ],
})
export class DomainModule {}
