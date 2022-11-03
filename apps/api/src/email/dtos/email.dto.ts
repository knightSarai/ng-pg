import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator'

export class CreateEmailDto {
  @IsString()
  subject: string;

  @IsString()
  text: string;

  @IsEmail()
  to: string;
}

export class EmailsDto {
  @Expose()
  id: number;

  @Expose()
  subject: string;

  @Expose()
  from: string;

}
