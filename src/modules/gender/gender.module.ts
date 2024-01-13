import { Module } from '@nestjs/common';
import { GenderController } from './gender.controller';
import { Gender } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GenderController],
  imports: [TypeOrmModule.forFeature([Gender])],
})
export class GenderModule {}
