// support.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Support } from './support.entity';
import { CreateSupportDto, UpdateSupportDto } from './support.dto';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>,
  ) {}

  async create(createSupportDto: CreateSupportDto): Promise<Support> {
    const support = this.supportRepository.create(createSupportDto);
    return this.supportRepository.save(support);
  }

  async findAll(): Promise<Support[]> {
    return this.supportRepository.find({ relations: ['User'] });
  }

  async findOne(SupportID: number): Promise<Support> {
    const support = await this.supportRepository.findOne({where:{SupportID:SupportID}});
    if (!support) {
      throw new NotFoundException(`Support ticket with ID ${SupportID} not found`);
    }
    return support;
  }

  async update(SupportID: number, updateSupportDto: UpdateSupportDto): Promise<Support> {
    const support = await this.findOne(SupportID);
    Object.assign(support, updateSupportDto);
    return this.supportRepository.save(support);
  }

  async delete(SupportID: number): Promise<void> {
    const support = await this.findOne(SupportID);
    await this.supportRepository.remove(support);
  }
}
