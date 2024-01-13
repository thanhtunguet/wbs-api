import { AppUser, Gender, Project, Status, Task } from 'src/entities';
import { GenderDto } from 'src/modules/gender/dtos/gender.dto';
import { StatusDto } from 'src/modules/status/dtos/status.dto';

export class AppUserDto implements Omit<AppUser, 'gender' | 'status'> {
  id: string;

  username: string;

  email: string;

  phoneNumber: string;

  dateOfBirth: Date;

  createdAt: Date;

  deletedAt: Date;

  updatedAt: Date;

  gender: GenderDto;

  status: StatusDto;

  projects: Project[];

  tasks: Task[];
}
