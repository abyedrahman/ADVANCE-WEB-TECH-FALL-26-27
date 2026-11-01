import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Createuser } from "./entities/createuser.entity";
import { CreateuserController } from "./createuser.controller";
import { CreateuserService } from "./createuser.service";

@Module({
  imports: [TypeOrmModule.forFeature([Createuser])],
  controllers: [CreateuserController],
  providers: [CreateuserService],
  exports: [CreateuserService],
})
export class CreateuserModule {}
