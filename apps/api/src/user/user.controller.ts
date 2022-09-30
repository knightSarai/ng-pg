import { Body, Session, Controller, Post, Get, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UsernameDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { Serialize } from '../app/interceptors/serialize.interceptor';

import { AuthService } from './auth/auth.service';
import { User} from '@prisma/client'
import { CurrentUser } from './decorators/user.decorator';


@Controller('auth')
export class UserController {
  constructor(private authService: AuthService) {}

  @Serialize<UserDto>(UserDto)
  @Post('/signup')
  async signUp(@Body() user: CreateUserDto, @Session() session: any) {
    const newUser =  await this.authService.signUp(user.username, user.password, user.email);
    session.userId = newUser.id;
    return newUser;
  }


  @Serialize<UserDto>(UserDto)
  @Post('/signin')
  async signIn(@Body() body: CreateUserDto, @Session() session: any) {
    const user =  await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Serialize<UserDto>(UserDto)
  @Post('/signout')
  async signOut(@Session() session: any) {
    session.userId = null;
  }

  @Serialize<UserDto>(UserDto)
  @Get('/me')
  async me(@CurrentUser() user: User) {
    if (!user) {
      throw new NotFoundException('No logged in user');
    }
    return user
  }

  @Post('/username')
  async username(@Body() body: UsernameDto) {
    return await this.authService.username(body.username);
  }
}

