import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { PrismaModule } from '@ng-pg/prisma';
import { UserModule } from '../user/user.module';
import { EmailModule } from '../email/email.module';

const  cookieSession = require('cookie-session');

@Module({
  imports: [PrismaModule, UserModule, EmailModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true
      })
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      cookieSession({
        keys: ['knight']
      })
    ).forRoutes('*');
  }
}
