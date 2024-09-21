import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentApproval } from './contentApproval.entity';
import { CreateContentApprovalDto, DeleteContentApprovalDto } from './contentApproval.dto';

@Injectable()
export class ContentApprovalService {
  constructor(
    @InjectRepository(ContentApproval)
    private readonly contentRepository: Repository<ContentApproval>,
  ) {}

  async create(createContentApprovalDto: CreateContentApprovalDto, userType: string): Promise<ContentApproval> {
    
    if (userType !== 'Admin' && userType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as an admin or instructor to create content approval');
    }

    const content = this.contentRepository.create(createContentApprovalDto);
    return this.contentRepository.save(content);
  }

  async delete(deleteContentApprovalDto: DeleteContentApprovalDto, userType: string): Promise<void> {
    if (userType !== 'Admin' && userType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as an admin or instructor to delete content approval');
    }

    const { ContentID } = deleteContentApprovalDto;
    const content = await this.contentRepository.findOne({where:{ContentID:ContentID}});

    if (!content) {
      throw new BadRequestException(`Content with ID ${ContentID} not found`);
    }

    await this.contentRepository.remove(content);
  }
}
