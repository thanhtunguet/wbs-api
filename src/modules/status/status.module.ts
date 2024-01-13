import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entities';

@Module({
  controllers: [StatusController],
  imports: [TypeOrmModule.forFeature([Status])],
})
export class StatusModule {}
