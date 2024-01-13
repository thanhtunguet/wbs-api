import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Gender } from './Gender';
import { Status } from './Status';
import { Project } from './Project';
import { Task } from './Task';

@Index('AppUser_pk', ['id'], { unique: true })
@Index('AppUser_pk_2', ['username'], { unique: true })
@Index('AppUser_pk_3', ['email'], { unique: true })
@Entity('AppUser', { schema: 'dbo' })
export class AppUser {
  @Column('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('nvarchar', {
    name: 'Username',
    nullable: true,
    unique: true,
    length: 500,
  })
  username: string | null;

  @Column('nvarchar', {
    name: 'Email',
    nullable: true,
    unique: true,
    length: 500,
  })
  email: string | null;

  @Column('nvarchar', { name: 'PhoneNumber', nullable: true, length: 500 })
  phoneNumber: string | null;

  @Column('datetime', { name: 'DateOfBirth', nullable: true })
  dateOfBirth: Date | null;

  @Column('datetime', {
    name: 'CreatedAt',
    nullable: true,
    default: () => 'getdate()',
  })
  createdAt: Date | null;

  @Column('datetime', { name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;

  @Column('datetime', {
    name: 'UpdatedAt',
    nullable: true,
    default: () => 'getdate()',
  })
  updatedAt: Date | null;

  @ManyToOne(() => Gender, (gender) => gender.appUsers)
  @JoinColumn([{ name: 'GenderId', referencedColumnName: 'id' }])
  gender: Gender;

  @ManyToOne(() => Status, (status) => status.appUsers)
  @JoinColumn([{ name: 'StatusId', referencedColumnName: 'id' }])
  status: Status;

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];

  @OneToMany(() => Task, (task) => task.assignedTo)
  tasks: Task[];
}
