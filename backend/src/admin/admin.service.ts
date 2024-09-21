import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
import { User } from '../user/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto, userId: number): Promise<Admin> {
    const admin = this.adminRepository.create({
      ...createAdminDto,
      User: { UserID: userId } as User,
    });
    return this.adminRepository.save(admin);
  }

  async update(adminId: number, updateAdminDto: UpdateAdminDto, sessionUserId: number): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { AdminID: adminId }, relations: ['User'] });

    if (!admin) {
      throw new BadRequestException(`Admin with ID ${adminId} not found`);
    }

    if (admin.User.UserID !== sessionUserId) {
      throw new UnauthorizedException('You are not authorized to perform this action');
    }

    Object.assign(admin, updateAdminDto);
    return this.adminRepository.save(admin);
  }
}
