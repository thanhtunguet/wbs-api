import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Status } from './Status';
import { Task } from './Task';

@Index('Phase_pk', ['id'], { unique: true })
@Index('Phase_pk_2', ['code'], { unique: true })
@Entity('Phase', { schema: 'dbo' })
export class Phase {
  @Column('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('nvarchar', {
    name: 'Code',
    nullable: true,
    unique: true,
    length: 500,
  })
  code: string | null;

  @Column('nvarchar', { name: 'Color', nullable: true, length: 500 })
  color: string | null;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 500 })
  name: string | null;

  @Column('datetime', {
    name: 'CreatedAt',
    nullable: true,
    default: () => 'getdate()',
  })
  createdAt: Date | null;

  @Column('datetime', {
    name: 'UpdatedAt',
    nullable: true,
    default: () => 'getdate()',
  })
  updatedAt: Date | null;

  @Column('datetime', { name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Status, (status) => status.phases)
  @JoinColumn([{ name: 'StatusId', referencedColumnName: 'id' }])
  status: Status;

  @OneToMany(() => Task, (task) => task.phase)
  tasks: Task[];
}
