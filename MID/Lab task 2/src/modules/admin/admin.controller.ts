import { AdminService } from './admin.service';
import { Controller,Get ,Post ,Body } from '@nestjs/common';
import { CreateAdminDto } from './dto/admin.dto';


@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    async GetAdmin(){
        return await this.adminService.getAdmin();
    }
    @Post()
    async createAdmin(@Body() dto: CreateAdminDto) {
    return await this.adminService.createAdmin(dto);
  }
}
