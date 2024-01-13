import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Phase } from 'src/entities';
import { Repository } from 'typeorm';
import { PhaseDto } from './dtos/phase.dto';

@ApiTags('Phases')
@Controller('/phase')
export class PhaseController {
  constructor(
    @InjectRepository(Phase) private phaseRepository: Repository<Phase>,
  ) {
    //
  }

  @Get('/list')
  public async list(): Promise<PhaseDto[]> {
    return this.phaseRepository.find();
  }

  @Get('/count')
  public async count(): Promise<number> {
    return this.phaseRepository.count();
  }
}
