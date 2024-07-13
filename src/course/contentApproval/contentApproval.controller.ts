import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { ContentApprovalService } from './contentApproval.service';
import { CreateContentApprovalDto } from './contentApproval.dto';
import { ContentApproval } from './contentApproval.entity'; 

@Controller('content-approvals')
export class ContentApprovalController {
  constructor(private readonly contentApprovalService: ContentApprovalService) {}

  @Post()
  async create(@Body() createDto: CreateContentApprovalDto): Promise<ContentApproval> {
    return this.contentApprovalService.create(createDto);
  }

  @Delete(':id')
  async delete(@Param('id') contentID: number): Promise<void> {
    await this.contentApprovalService.delete(contentID);
  }
}
