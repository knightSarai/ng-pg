import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../dtos/email.dto';
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
}
