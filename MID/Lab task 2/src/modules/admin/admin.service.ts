import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private readonly adminRepository : Repository<Admin>,
) {}

async getAdmin(){
    const admin = await this.adminRepository.find();
    return admin;
}
async createAdmin(dto: CreateAdminDto){
 const responce = await this.adminRepository.create(dto);
  return await this.adminRepository.save(responce);}


}
