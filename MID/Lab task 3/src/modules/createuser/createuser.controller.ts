import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateuserService } from "./createuser.service";
import { CreateUserDto } from "./dto/createuser.dto";

@Controller("users")
export class CreateuserController {
  constructor(private readonly createuserService: CreateuserService) {}

  // POST /users/register
  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: CreateUserDto) {
    return await this.createuserService.register(dto);
  }
}
