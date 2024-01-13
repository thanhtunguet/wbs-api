import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { AppUser } from 'src/entities';
import { Repository } from 'typeorm';
import { AppUserDto } from './dtos/app-user.dto';

@ApiTags('AppUser')
@Controller('app-user')
export class AppUserController {
  constructor(
    @InjectRepository(AppUser)
    private statusRepository: Repository<AppUser>,
  ) {
    //
  }

  @Get('/list')
  public async list(): Promise<AppUserDto[]> {
    return this.statusRepository.find();
  }

  @Get('/count')
  public async count(): Promise<number> {
    return this.statusRepository.count();
  }

  @Get('/:id')
  public async get(@Param('id') id: string): Promise<AppUserDto> {
    return this.statusRepository.findOne({
      where: {
        id,
      },
    });
  }
}
