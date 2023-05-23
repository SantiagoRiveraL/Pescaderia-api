import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ReportsEntity } from '../reports';

@Entity('users')
export class UserEntity extends BaseEntity {
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
  public password: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public firstName: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public lastName: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public role: string;

  @Column({
    type: 'timestamp',
  })
  public createdDate: Date;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public employeeArea: string;

  /*@OneToMany(() => ReportsEntity, (reportGenerated) => reportGenerated.user)
  public report: ReportsEntity[];*/
}
