
import { IsNotEmpty, IsOptional, Min} from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  password: string = "";

  @IsNotEmpty()
  Student_id: string = "";

  @IsNotEmpty()
  phone: string ="";

}
