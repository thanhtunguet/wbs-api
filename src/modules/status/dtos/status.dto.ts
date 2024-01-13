import { Status } from 'src/entities';

export class StatusDto implements Pick<Status, 'id' | 'code' | 'name'> {
  id: string;

  code: string;

  name: string;
}
