import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { Worker } from './worker/entities/worker.entity';
import { WorkerModule } from './worker/worker.module';
import { UsersList } from './users-list/entities/users-list.entity';
import { UsersListModule } from './users-list/users-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ItsAbout@MySal8',
      database: 'tailor',
      entities: [User, Worker, UsersList],
      synchronize: true,
    }),
    UserModule,
    UsersListModule,
    WorkerModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
