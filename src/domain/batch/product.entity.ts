import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BatchEntity } from './batch.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public status: string;

  /*@ManyToOne(() => BatchEntity, (batch) => batch.product)
  @JoinColumn({
    name: 'batchId',
  })
  public batch: BatchEntity;*/
}
