import { Module } from '@nestjs/common';
import { PhaseController } from './phase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phase } from 'src/entities';

@Module({
  controllers: [PhaseController],
  imports: [TypeOrmModule.forFeature([Phase])],
})
export class PhaseModule {}
