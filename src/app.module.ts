import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from './config/dotenv';
import { StatusModule } from './modules/status/status.module';
import * as entities from './entities';
import { PhaseModule } from './modules/phase/phase.module';
import { TaskProgressModule } from './modules/task-progress/task-progress.module';
import { GenderModule } from './modules/gender/gender.module';
import { AppUserModule } from './modules/app-user/app-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: Object.values(entities),
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        encrypt: false, //
      },
    }),
    AppUserModule,
    GenderModule,
    PhaseModule,
    StatusModule,
    TaskProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
