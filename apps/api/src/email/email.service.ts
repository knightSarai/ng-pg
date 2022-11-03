import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ng-pg/prisma';
import { CreateEmailDto } from './dtos/email.dto';
import { Prisma, User, Email } from '@prisma/client';

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
      },
      orderBy: {
        created: 'desc'
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
}
