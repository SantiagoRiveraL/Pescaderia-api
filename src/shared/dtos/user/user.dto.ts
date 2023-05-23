import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';

export class UserDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  role: string;

  @IsString()
  employeeArea: string;

  @IsDate()
  createdDate: Date;
}
