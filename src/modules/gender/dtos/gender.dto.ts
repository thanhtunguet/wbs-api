import { Gender } from 'src/entities';

export class GenderDto implements Pick<Gender, 'id' | 'code' | 'name'> {
  id: string;

  code: string;

  name: string;
}
