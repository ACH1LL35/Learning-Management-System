// faq.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<FAQ[]> {
    return this.faqRepository.find();
  }

  async findOne(FAQID: number): Promise<FAQ> {
    const faq = await this.faqRepository.findOne({where:{FAQID:FAQID}});
    if (!faq) {
      throw new NotFoundException(`FAQ with ID ${FAQID} not found`);
    }
    return faq;
  }

  async update(FAQID: number, updateFAQDto: UpdateFAQDto): Promise<FAQ> {
    const faq = await this.findOne(FAQID);
    Object.assign(faq, updateFAQDto);
    return this.faqRepository.save(faq);
  }

  async delete(FAQID: number): Promise<void> {
    const faq = await this.findOne(FAQID);
    await this.faqRepository.remove(faq);
  }
}
