import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Createuser } from "./entities/createuser.entity";
import { CreateUserDto } from "./dto/createuser.dto";

@Injectable()
export class CreateuserService {
  constructor(
    @InjectRepository(Createuser)
    private readonly createuserRepository: Repository<Createuser>,
  ) {}

  async register(dto: CreateUserDto) {
    try {
      // dto is already validated by the global ValidationPipe
      const user = this.createuserRepository.create(dto);
      const saved = await this.createuserRepository.save(user);

      // The password is never sent back in the response
      return {
        message: "User registered successfully",
        data: {
          fullName: saved.fullName,
          email: saved.email,
          age: saved.age,
          accountType: saved.accountType,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
