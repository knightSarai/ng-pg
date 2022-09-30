import {IsEmail, IsString, IsOptional} from 'class-validator'

export class UsernameDto {
  @IsString()
  username: string
}


export class CreateUserDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

