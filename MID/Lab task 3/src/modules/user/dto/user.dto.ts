import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  fullname: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  age: number = 0;

  @IsNotEmpty()
  phone: number = 0;

  @IsNotEmpty()
  accounttype:string = "";

  @IsNotEmpty()
  address: string = "";


  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateUserDto {
  


  @IsOptional()
  address: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

