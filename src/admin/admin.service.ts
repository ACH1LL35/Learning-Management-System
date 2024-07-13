import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly mailerService: MailerService,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminRepository.create(createAdminDto);
    const savedAdmin = await this.adminRepository.save(admin);

    // Send registration email
    await this.sendRegistrationEmail(savedAdmin.Email);

    return savedAdmin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { AdminID: id } });
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    Object.assign(admin, updateAdminDto);
    return this.adminRepository.save(admin);
  }

  async delete(id: number): Promise<void> {
    const admin = await this.adminRepository.findOne({ where: { AdminID: id } });
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    await this.adminRepository.remove(admin);
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async findOne(id: number): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { AdminID: id } });
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return admin;
  }

  private async sendRegistrationEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Registration Confirmation',
      text: 'Thank you for registering with us!',
      html: '<b>Thank you for registering with us!</b>',
    });
  }
  
}
