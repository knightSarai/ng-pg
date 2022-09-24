import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ng-pg/prisma'
import { User , Prisma} from '@prisma/client'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  user(
    UserWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({where: UserWhereUniqueInput});
  }

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({data});
  }
}

