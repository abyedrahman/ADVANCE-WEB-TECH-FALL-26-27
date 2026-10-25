
import { IsNotEmpty, IsOptional, Min} from "class-validator";

export class CreateTeacherDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  designation: string = "";

  @IsNotEmpty()
  phone: string ="";

}
