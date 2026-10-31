import { IsNotEmpty, IsOptional, IsString, Matches, IsNumber } from "class-validator";

export class CreateUserValidatorDto {
    @IsString()
    @IsNotEmpty({ message: "Username not found" })
    username!: string;

    @IsNumber({}, { message: "Userid must be a number" })
    @IsNotEmpty({ message: "Userid not found" })
    userid!: number;

    @IsString()
    @IsNotEmpty({ message: "Fatal error! Log in again" })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, { message: "Password must match the format" })
    hashedpassword!: string;
}

// userid is not here because it comes from the URL (PATCH /uservalidators/:userid)
export class UpdateUserValidatorDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: "How come no username?" })
    username?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, { message: "Password must match the format" })
    hashedpassword?: string;
}
