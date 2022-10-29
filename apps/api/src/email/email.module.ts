import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailingService } from './emailing/emailing.service';
import { PrismaModule } from '@ng-pg/prisma';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailingService],
})
export class EmailModule {}
