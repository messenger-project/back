import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mahan',
      password: 'mahan',
      database: 'mydb02',
      entities: ['src/**/*.entity.ts'],
      migrations: ['src/migrations/*.ts'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, ChatGateway, UserService],
})
export class AppModule {}
