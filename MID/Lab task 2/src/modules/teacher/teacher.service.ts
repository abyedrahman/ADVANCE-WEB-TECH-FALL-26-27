import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/teacher.dto';


@Injectable()
export class TeacherService {
    constructor(@InjectRepository(Teacher) private readonly teacherRepository : Repository<Teacher>,
) {}

async getTeacher(){
    const teacher = await this.teacherRepository.find();
    return teacher;
}
async createTeacher(dto: CreateTeacherDto){
 const responce = await this.teacherRepository.create(dto);
  return await this.teacherRepository.save(responce);}


}
