import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FAQ } from './faq.entity';
import { CreateFAQDto, UpdateFAQDto } from './faq.dto';

@Injectable()
export class FAQService {
  constructor(
    @InjectRepository(FAQ)
    private readonly faqRepository: Repository<FAQ>,
  ) {}

  async create(createFAQDto: CreateFAQDto): Promise<FAQ> {
    const faq = this.faqRepository.create(createFAQDto);
    return this.faqRepository.save(faq);
  }

  async update(faqId: number, updateFAQDto: UpdateFAQDto, userType: string): Promise<FAQ> {
    const faq = await this.faqRepository.findOne({where:{FAQID:faqId}});

    if (!faq) {
      throw new BadRequestException(`FAQ with ID ${faqId} not found`);
    }

    if (userType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to update FAQ details');
    }

    Object.assign(faq, updateFAQDto);
    return this.faqRepository.save(faq);
  }

  async delete(faqId: number, userType: string): Promise<void> {
    const faq = await this.faqRepository.findOne({where:{FAQID:faqId}});

    if (!faq) {
      throw new BadRequestException(`FAQ with ID ${faqId} not found`);
    }

    if (userType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to delete FAQs');
    }

    await this.faqRepository.remove(faq);
  }

  async getAllFAQs(): Promise<FAQ[]> {
    return this.faqRepository.find();
  }
}
