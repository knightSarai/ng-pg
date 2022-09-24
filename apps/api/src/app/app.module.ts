import { MiddlewareConsumer, Module } from '@nestjs/common';

import { PrismaModule } from '@ng-pg/prisma';
import { UserModule } from '../user/user.module';

const  cookieSession = require('cookie-session');

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [],
  providers: [],
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
