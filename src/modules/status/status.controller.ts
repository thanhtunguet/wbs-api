import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entities';
import { Repository } from 'typeorm';
import { StatusDto } from './dtos/status.dto';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(
    @InjectRepository(Status) private statusRepository: Repository<Status>,
  ) {
    //
  }

  @Get('/list')
  public async list(): Promise<StatusDto[]> {
    return this.statusRepository.find();
  }

  @Get('/count')
  public async count(): Promise<number> {
    return this.statusRepository.count();
  }
}
