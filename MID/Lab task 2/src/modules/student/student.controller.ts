import { StudentService } from './student.service';
import { Controller,Get ,Post ,Body } from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';


@Controller('student')
export class StudentController {
    constructor(private readonly adminService: StudentService) {}

    @Get()
    async GetStudent(){
        return await this.adminService.getStudent();
    }
    @Post()
    async createAdmin(@Body() dto: CreateStudentDto) {
    return await this.adminService.createStudent(dto);
  }
}
