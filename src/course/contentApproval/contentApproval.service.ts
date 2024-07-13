import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentApproval } from './contentApproval.entity';
import { CreateContentApprovalDto, UpdateContentApprovalDto } from './contentApproval.dto';

@Injectable()
export class ContentApprovalService {
  constructor(
    @InjectRepository(ContentApproval)
    private readonly contentApprovalRepository: Repository<ContentApproval>,
  ) {}

  async create(createDto: CreateContentApprovalDto): Promise<ContentApproval> {
    const { CourseID, ...rest } = createDto;
    const contentApproval = new ContentApproval();
    contentApproval.Course = { CourseID } as any; 
    Object.assign(contentApproval, rest);
    return this.contentApprovalRepository.save(contentApproval);
  }

  async delete(contentID: number): Promise<void> {
    const contentApproval = await this.contentApprovalRepository.findOne(contentID as any);
    if (!contentApproval) {
      throw new NotFoundException(`Content Approval with ID ${contentID} not found`);
    }
    await this.contentApprovalRepository.delete(contentID);
  }
}
