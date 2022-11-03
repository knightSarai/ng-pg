import { 
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Param,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthGuard } from '../app/guards/auth.guard';
import { EmailingService } from './emailing/emailing.service';
import { CurrentUser } from '../user/decorators/user.decorator';
import { CreateEmailDto,  EmailsDto } from './dtos/email.dto';
import { EmailService } from './email.service';
import { Serialize } from '../app/interceptors/serialize.interceptor';

@UseGuards(AuthGuard)
@Controller('email')
export class EmailController {
  constructor(
    private  emailingService: EmailingService,
    private emailService: EmailService
  ) {}

  @Post('/')
  async sendEmail(
    @Body() email: CreateEmailDto,
    @CurrentUser() user: User
  ) {
    return await this.emailingService.sendEmail(email, user)
  }

  @Get('/')
  @Serialize(EmailsDto)
  async recievedEmails(@CurrentUser() user: User) {
    return await this.emailService.recievedEmails(user.email)
  }

  @Get('/sent')
  @Serialize(EmailsDto)
  async sentEmails(@CurrentUser() user: User) {
    return await this.emailService.sentEmails(user.id)
  }

  @Get('/:id')
  async email(@CurrentUser() user: User, @Param('id') id: string) {
    const email =  await this.emailService.email({id})

    if (!email) {
      throw new NotFoundException('No logged in user');
    }

    if (email.to !== user.email && email.from !== user.email) {
      throw new UnauthorizedException('You are not authorized to view this email');
    }

    return email
  }
}
