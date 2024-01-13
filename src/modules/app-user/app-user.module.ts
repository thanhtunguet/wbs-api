import { Module } from '@nestjs/common';
import { AppUserController } from './app-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from 'src/entities';

@Module({
  controllers: [AppUserController],
  imports: [TypeOrmModule.forFeature([AppUser])],
})
export class AppUserModule {}
