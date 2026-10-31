import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { UserValidatorService } from "./uservalidator.service";
import { CreateUserValidatorDto, UpdateUserValidatorDto } from "./dto/uservalidator.dto";

@Controller("uservalidators")
export class UserValidatorController {
    constructor(private readonly userValidatorService: UserValidatorService) {}

    @Get()
    async getUserValidators() {
        return await this.userValidatorService.getUserValidators();
    }

    // ParseIntPipe turns "5" from the URL into the number 5 (and rejects "abc")
    @Get(":userid")
    async getUserValidator(@Param("userid", ParseIntPipe) userid: number) {
        return await this.userValidatorService.getUserValidator(userid);
    }

    @Post()
    async createUserValidator(@Body(ValidationPipe) dto: CreateUserValidatorDto) {
        return await this.userValidatorService.createUserValidator(dto);
    }

    @Patch(":userid")
    async updateUserValidator(
        @Param("userid", ParseIntPipe) userid: number,
        @Body(ValidationPipe) dto: UpdateUserValidatorDto,
    ) {
        return await this.userValidatorService.updateUserValidator(userid, dto);
    }

    @Delete(":userid")
    async deleteUserValidator(@Param("userid", ParseIntPipe) userid: number) {
        return await this.userValidatorService.deleteUserValidator(userid);
    }
}
