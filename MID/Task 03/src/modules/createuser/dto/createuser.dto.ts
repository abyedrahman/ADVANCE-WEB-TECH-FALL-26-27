import { Type } from "class-transformer";
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Full name must be a string" })
  @IsNotEmpty({ message: "Full name is required" })
  @MinLength(3, { message: "Full name must be at least 3 characters" })
  fullName!: string;

  @IsNotEmpty({ message: "Email is required" })
  @IsEmail({}, { message: "Email must be a valid email address" })
  email!: string;

  @IsString({ message: "Password must be a string" })
  @IsNotEmpty({ message: "Password is required" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number and a special character",
  })
  password!: string;

  @IsNotEmpty({ message: "Age is required" })
  @Type(() => Number)
  @IsInt({ message: "Age must be an integer" })
  @Min(18, { message: "Age must be at least 18" })
  @Max(60, { message: "Age must not be greater than 60" })
  age!: number;

  @IsString({ message: "Phone must be a string" })
  @IsNotEmpty({ message: "Phone is required" })
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits and start with 01",
  })
  phone!: string;

  @IsNotEmpty({ message: "Account type is required" })
  @IsIn(["student", "teacher"], {
    message: 'Account type must be either "student" or "teacher"',
  })
  accountType!: string;

  @IsOptional()
  @IsString({ message: "Address must be a string" })
  @MinLength(10, { message: "Address must be at least 10 characters" })
  address?: string;
}
