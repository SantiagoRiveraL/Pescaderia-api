import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BatchEntity } from '../batch';
import { UserEntity } from '../user';

@Entity('reports')
export class ReportsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'timestamp',
  })
  public createdDate: Date;

  /*@ManyToOne(() => BatchEntity, (batch) => batch.report)
  public batch: BatchEntity;*/

  /*@ManyToOne(() => UserEntity, (user) => user.report, {
    nullable: false,
  })
  @JoinColumn({
    name: 'userId',
  })
  public user: UserEntity;*/
}
