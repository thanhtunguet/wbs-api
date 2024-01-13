import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender } from 'src/entities';
import { Repository } from 'typeorm';
import { GenderDto } from './dtos/gender.dto';

@ApiTags('Gender')
@Controller('gender')
export class GenderController {
  constructor(
    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>,
  ) {
    //
  }

  @Get('/list')
  public async list(): Promise<GenderDto[]> {
    return this.genderRepository.find();
  }

  @Get('/count')
  public async count(): Promise<number> {
    return this.genderRepository.count();
  }
}
