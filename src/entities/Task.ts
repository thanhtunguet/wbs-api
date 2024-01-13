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
import { Phase } from './Phase';
import { TaskProgress } from './TaskProgress';

@Index('Task_pk', ['id'], { unique: true })
@Entity('Task', { schema: 'dbo' })
export class Task {
  @Column('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 500 })
  name: string | null;

  @Column('nvarchar', { name: 'Document', nullable: true, length: 2048 })
  document: string | null;

  @Column('nvarchar', { name: 'Notes', nullable: true, length: 2048 })
  notes: string | null;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate: Date | null;

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

  @Column('decimal', {
    name: 'RealEffort',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  realEffort: number | null;

  @Column('decimal', {
    name: 'BeEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  beEstimate: number | null;

  @Column('decimal', {
    name: 'BaEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  baEstimate: number | null;

  @Column('decimal', {
    name: 'TesterEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  testerEstimate: number | null;

  @Column('decimal', {
    name: 'FeEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  feEstimate: number | null;

  @Column('decimal', {
    name: 'MobileEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mobileEstimate: number | null;

  @Column('decimal', {
    name: 'DevopsEstimate',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  devopsEstimate: number | null;

  @ManyToOne(() => AppUser, (appUser) => appUser.tasks)
  @JoinColumn([{ name: 'AssignedTo', referencedColumnName: 'id' }])
  assignedTo: AppUser;

  @ManyToOne(() => Status, (status) => status.tasks)
  @JoinColumn([{ name: 'StatusId', referencedColumnName: 'id' }])
  status: Status;

  @ManyToOne(() => Phase, (phase) => phase.tasks)
  @JoinColumn([{ name: 'PhaseId', referencedColumnName: 'id' }])
  phase: Phase;

  @ManyToOne(() => TaskProgress, (taskProgress) => taskProgress.tasks)
  @JoinColumn([{ name: 'TaskProgressId', referencedColumnName: 'id' }])
  taskProgress: TaskProgress;

  @ManyToOne(() => Task, (task) => task.tasks)
  @JoinColumn([{ name: 'ParentId', referencedColumnName: 'id' }])
  parent: Task;

  @OneToMany(() => Task, (task) => task.parent)
  tasks: Task[];
}
