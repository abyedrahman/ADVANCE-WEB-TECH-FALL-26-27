import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserValidator } from "./entities/uservalidator.entity";
import { UserValidatorController } from "./uservalidator.controller";
import { UserValidatorService } from "./uservalidator.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserValidator])],
    controllers: [UserValidatorController],
    providers: [UserValidatorService],
    exports: [UserValidatorService],
})
export class UserValidatorModule {}
