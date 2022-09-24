import { Body, Session, Controller, Post, Get, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { Serialize } from '../app/interceptors/serialize.interceptor';

import { AuthService } from './auth/auth.service';
import { User} from '@prisma/client'
import { CurrentUser } from './decorators/user.decorator';


@Controller('auth')
@Serialize<UserDto>(UserDto)
export class UserController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  async signUp(@Body() user: CreateUserDto, @Session() session: any) {
    const newUser =  await this.authService.signUp(user.username, user.password, user.email);
    session.userId = newUser.id;
    return newUser;
  }


  @Post('/signin')
  async signIn(@Body() body: CreateUserDto, @Session() session: any) {
    const user =  await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post('/signout')
  async signOut(@Session() session: any) {
    session.userId = null;
  }

  @Get('/me')
  async me(@CurrentUser() user: User) {
    if (!user) {
      throw new NotFoundException('No logged in user');
    }
    return user
  }
}

