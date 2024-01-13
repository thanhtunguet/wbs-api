import { TaskProgress } from 'src/entities';

export class TaskProgressDto
  implements Pick<TaskProgress, 'id' | 'code' | 'name'>
{
  id: string;

  code: string;

  name: string;
}
