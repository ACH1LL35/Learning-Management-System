import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Parent } from './parent.entity';
import { ParentDto, UpdateParentDto } from './parent.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
    private readonly mailerService: MailerService,
  ) {}

  async create(parentDto: ParentDto): Promise<Parent> {
    const parent = this.parentRepository.create(parentDto);
    const savedParent = await this.parentRepository.save(parent);

    // Send registration email
    await this.sendRegistrationEmail(savedParent.Email);

    return savedParent;
  }

  async update(id: number, updateParentDto: UpdateParentDto, sessionParentId: number): Promise<Parent> {
    const parent = await this.parentRepository.findOne({ where: { ParentsID: id } });

    if (!parent) {
      throw new BadRequestException(`Parent with ID ${id} not found`);
    }

    if (parent.ParentsID !== sessionParentId) {
      throw new UnauthorizedException('You are not authorized to perform this action');
    }

    Object.assign(parent, updateParentDto);
    return this.parentRepository.save(parent);
  }

  async findByEmailAndPassword(email: string, password: string): Promise<Parent | null> {
    return this.parentRepository.findOne({ where: { Email: email, Password: password } });
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
