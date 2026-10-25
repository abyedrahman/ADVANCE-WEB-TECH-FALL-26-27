import { TeacherService } from './teacher.service';
import { Controller,Get ,Post ,Body } from '@nestjs/common';
import { CreateTeacherDto } from './dto/teacher.dto';


@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    async getTeacher(){
        return await this.teacherService.getTeacher();
    }
    @Post()
    async createTeacher(@Body() dto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(dto);
  }
}
