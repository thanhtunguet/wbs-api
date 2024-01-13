import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Task } from "./Task";
import { Status } from "./Status";

@Index("TaskProgress_pk", ["id"], { unique: true })
@Index("TaskProgress_pk_2", ["code"], { unique: true })
@Entity("TaskProgress", { schema: "dbo" })
export class TaskProgress {
  @Column("bigint", { primary: true, name: "Id" })
  id: string;

  @Column("nvarchar", {
    name: "Code",
    nullable: true,
    unique: true,
    length: 500,
  })
  code: string | null;

  @Column("nvarchar", { name: "Color", nullable: true, length: 500 })
  color: string | null;

  @Column("nvarchar", { name: "Name", nullable: true, length: 500 })
  name: string | null;

  @Column("datetime", {
    name: "CreatedAt",
    nullable: true,
    default: () => "getdate()",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "UpdatedAt",
    nullable: true,
    default: () => "getdate()",
  })
  updatedAt: Date | null;

  @Column("datetime", { name: "DeletedAt", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Task, (task) => task.taskProgress)
  tasks: Task[];

  @ManyToOne(() => Status, (status) => status.taskProgresses)
  @JoinColumn([{ name: "StatusId", referencedColumnName: "id" }])
  status: Status;
}
