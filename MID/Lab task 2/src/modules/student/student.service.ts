import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/student.dto';


@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository : Repository<Student>,
) {}

async getStudent(){
    const student = await this.studentRepository.find();
    return student;
}
async createStudent(dto: CreateStudentDto){
 const responce = await this.studentRepository.create(dto);
  return await this.studentRepository.save(responce);}


}
