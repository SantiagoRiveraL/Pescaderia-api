import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import { ReportsEntity } from '../reports';
import { ProductEntity } from './product.entity';

@Entity('batches')
export class BatchEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'datetime',
  })
  public createdDate: Date;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public status: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public type: string;

  /*@OneToMany(() => ReportsEntity, (report) => report.batch)
  @JoinColumn({
    name: 'reportId',
  })
  public report: ReportsEntity;

  @OneToMany(() => ProductEntity, (product) => product.batch)
  public product: ProductEntity;*/
}
