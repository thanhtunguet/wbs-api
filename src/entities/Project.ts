import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Status } from './Status';
import { AppUser } from './AppUser';

@Index('Project_pk', ['id'], { unique: true })
@Index('Project_pk_2', ['code'], { unique: true })
@Entity('Project', { schema: 'dbo' })
export class Project {
  @Column('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('nvarchar', { name: 'Name', length: 500 })
  name: string;

  @Column('nvarchar', {
    name: 'Code',
    nullable: true,
    unique: true,
    length: 500,
  })
  code: string | null;

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

  @ManyToOne(() => Status, (status) => status.projects)
  @JoinColumn([{ name: 'StatusId', referencedColumnName: 'id' }])
  status: Status;

  @ManyToOne(() => AppUser, (appUser) => appUser.projects)
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  user: AppUser;
}
