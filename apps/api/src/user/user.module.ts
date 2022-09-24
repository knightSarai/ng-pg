import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { PrismaModule, PrismaService } from '@ng-pg/prisma';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, AuthService],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
