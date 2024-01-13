import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AppUser } from './AppUser';
import { Gender } from './Gender';
import { Phase } from './Phase';
import { Project } from './Project';
import { Task } from './Task';
import { TaskProgress } from './TaskProgress';

@Index('Status_pk', ['id'], { unique: true })
@Index('Status_pk_2', ['code'], { unique: true })
@Entity('Status', { schema: 'dbo' })
export class Status {
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

  @OneToMany(() => AppUser, (appUser) => appUser.status)
  appUsers: AppUser[];

  @OneToMany(() => Gender, (gender) => gender.status)
  genders: Gender[];

  @OneToMany(() => Phase, (phase) => phase.status)
  phases: Phase[];

  @OneToMany(() => Project, (project) => project.status)
  projects: Project[];

  @OneToMany(() => Task, (task) => task.status)
  tasks: Task[];

  @OneToMany(() => TaskProgress, (taskProgress) => taskProgress.status)
  taskProgresses: TaskProgress[];
}
