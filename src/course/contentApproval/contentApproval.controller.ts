import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { ContentApprovalService } from './contentApproval.service';
import { CreateContentApprovalDto } from './contentApproval.dto';
import { Content } from './contentApproval.entity'; 

@Controller('contentApproval')
export class ContentApprovalController {
  constructor(private readonly contentApprovalService: ContentApprovalService) {}

  @Post()
  async create(@Body() createDto: CreateContentApprovalDto): Promise<Content> {
    return this.contentApprovalService.create(createDto);
  }

  @Delete(':id')
  async delete(@Param('id') contentID: number): Promise<void> {
    await this.contentApprovalService.delete(contentID);
  }
}
