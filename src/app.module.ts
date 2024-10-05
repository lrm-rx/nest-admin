import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookController } from './modules/book/book.controller';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '756131502',
      database: 'book-dev',
      entities: [],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController, UserController, BookController],
  providers: [AppService],
})
export class AppModule {}
