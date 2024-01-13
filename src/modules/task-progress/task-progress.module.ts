import { Module } from '@nestjs/common';
import { TaskProgressController } from './task-progress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskProgress } from 'src/entities';

@Module({
  controllers: [TaskProgressController],
  imports: [TypeOrmModule.forFeature([TaskProgress])],
})
export class TaskProgressModule {}
