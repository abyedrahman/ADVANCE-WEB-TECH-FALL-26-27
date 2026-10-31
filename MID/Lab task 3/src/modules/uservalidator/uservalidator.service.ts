import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserValidator } from "./entities/uservalidator.entity";
import { CreateUserValidatorDto, UpdateUserValidatorDto } from "./dto/uservalidator.dto";

@Injectable()
export class UserValidatorService {
    constructor(
        @InjectRepository(UserValidator)
        private readonly userValidatorRepository: Repository<UserValidator>,
    ) {}

    async getUserValidators() {
        return await this.userValidatorRepository.find();
    }

    async getUserValidator(userid: number) {
        const user = await this.userValidatorRepository.findOne({ where: { userid } });
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return user;
    }

    async createUserValidator(dto: CreateUserValidatorDto) {
        const exists = await this.userValidatorRepository.findOne({ where: { userid: dto.userid } });
        if (exists) {
            throw new ConflictException("A user with this userid already exists");
        }
        const user = this.userValidatorRepository.create({
            ...dto,
            created_at: new Date(),
            updated_at: new Date(),
        });
        return await this.userValidatorRepository.save(user);
    }

    async updateUserValidator(userid: number, dto: UpdateUserValidatorDto) {
        if (!dto.username && !dto.hashedpassword) {
            throw new BadRequestException("Nothing to update");
        }
        const user = await this.getUserValidator(userid);
        Object.assign(user, dto, { updated_at: new Date() });
        return await this.userValidatorRepository.save(user);
    }

    async deleteUserValidator(userid: number) {
        await this.getUserValidator(userid);
        await this.userValidatorRepository.delete({ userid });
        return { message: `User ${userid} deleted` };
    }
}
