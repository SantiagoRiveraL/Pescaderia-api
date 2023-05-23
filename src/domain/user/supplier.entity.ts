import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DeliveryNoteEntity } from '../deliveryNote';

@Entity('suppliers')
export class SupplierEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    unique: true,
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public email: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public employeeName: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public companyName: string;

  /*@OneToMany(
    () => DeliveryNoteEntity,
    (deliveryNote) => deliveryNote.supplier,
    { cascade: true },
  )
  public deliveryNotes: DeliveryNoteEntity;*/
}
