import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SupplierEntity } from '../user';

@Entity('deliveryNotes')
export class DeliveryNoteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public supplierBatchId: string;

  @Column({
    type: 'float',
  })
  public weigth: number;

  @Column({
    nullable: false,
  })
  public hasInvimaRegister: boolean;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public invimaRegister: string;

  /*@ManyToOne(() => SupplierEntity, (supplier) => supplier.deliveryNotes)
  @JoinColumn({
    name: 'supplierId',
  })
  public supplier: SupplierEntity;*/
}
