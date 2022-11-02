import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ng-pg/prisma';
import { CreateEmailDto, CreateEmailReplyDto } from './dtos/email.dto';
import { Prisma, User, Email, EmailReply } from '@prisma/client';

@Injectable()
export class EmailService {
  constructor(private prisma: PrismaService){}

  create(email: CreateEmailDto, user: User) {
    return this.prisma.email.create({
      data: {
        to: email.to,
        from: user.email,
        subject: email.subject,
        text: email.text,
        html: email.text,
        createdBy: {
          connect: {
            id: user.id
          }
        }
      }
    })
  }

  email(id: Prisma.EmailWhereUniqueInput) : Promise<Email | null>{
    return this.prisma.email.findUnique({
      where: id
    })
  }

  recievedEmails(email: string) : Promise<Email[]>{
    return this.prisma.email.findMany({
      where: {
        to: email
      }
    })
  }

  sentEmails(userId: number) : Promise<Email[]>{
    return this.prisma.email.findMany({
      where: {
        createdBy: {
          id: userId
        }
      }
    })
  }

  createReply(
    email: Prisma.EmailWhereUniqueInput,
    user: User,
    data: CreateEmailReplyDto
  ) : Promise<EmailReply> {
    return this.prisma.emailReply.create({
      data: {
        text: data.text,
        html: data.text,
        createdBy: {
          connect: {
            id: user.id
          }
        },
        email: {
          connect: {
            id: email.id
          }
        }
      }
    })
  }

  replies(emailId: string) {
    return this.prisma.emailReply.findMany({
      where: {
        email: {
          id: emailId
        }
      },
      orderBy: {
        created: 'asc'
      },
      select: {
        id: true,
        text: true,
        createdBy: {
          select: {
            id: true,
            username: true
          }
        }
      }
    })
  }

}
