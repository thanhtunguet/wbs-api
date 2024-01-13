import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskProgress } from 'src/entities';
import { Repository } from 'typeorm';
import { TaskProgressDto } from './dtos/task-progress.dto';

@ApiTags('TaskProgress')
@Controller('task-progress')
export class TaskProgressController {
  constructor(
    @InjectRepository(TaskProgress)
    private statusRepository: Repository<TaskProgress>,
  ) {
    //
  }

  @Get('/list')
  public async list(): Promise<TaskProgressDto[]> {
    return this.statusRepository.find();
  }

  @Get('/count')
  public async count(): Promise<number> {
    return this.statusRepository.count();
  }
}
