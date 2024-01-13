import { Phase } from 'src/entities';

export class PhaseDto implements Pick<Phase, 'id' | 'code' | 'name'> {
  id: string;

  code: string;

  name: string;
}
