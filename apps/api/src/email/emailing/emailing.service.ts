import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateEmailDto, CreateEmailReplyDto } from '../dtos/email.dto';
import { User } from '@prisma/client';
import { EmailService } from '../email.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class EmailingService {
  constructor(
    private emailService: EmailService,
    private userService: UserService
  ) {}

  async sendEmail(email: CreateEmailDto, user: User) {
    const userExists = await this.userService.user({ email: email.to });
    if (!userExists) {
      throw new BadRequestException('Email does not exist');
    }
    return await this.emailService.create(email, user);
  }

  async replyEmail(
    emailId: string,
    reply: CreateEmailReplyDto,
    user: User
  ) {
    const emailToReply =  await this.emailService.email({id: emailId})

    if (!emailToReply) {
      throw new NotFoundException('Email Not Found');
    }

    if (emailToReply.to !== user.email && emailToReply.from !== user.email) {
      throw new UnauthorizedException('You are not authorized to view this email');
    }

    return await this.emailService.createReply({id: emailId}, user, reply)

  }
}
