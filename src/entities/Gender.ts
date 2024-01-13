import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AppUser } from './AppUser';
import { Status } from './Status';

@Index('Gender_pk', ['id'], { unique: true })
@Index('Gender_pk_2', ['code'], { unique: true })
@Entity('Gender', { schema: 'dbo' })
export class Gender {
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

  @OneToMany(() => AppUser, (appUser) => appUser.gender)
  appUsers: AppUser[];

  @ManyToOne(() => Status, (status) => status.genders)
  @JoinColumn([{ name: 'StatusId', referencedColumnName: 'id' }])
  status: Status;
}
