import { Controller, Post, Delete, Body, Session, UsePipes, ValidationPipe, Param, UnauthorizedException } from '@nestjs/common';
import { ContentApprovalService } from './contentApproval.service';
import { CreateContentApprovalDto, DeleteContentApprovalDto } from './contentApproval.dto';

@Controller('content-approval')
export class ContentApprovalController {
  constructor(private readonly contentService: ContentApprovalService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createContentDto: CreateContentApprovalDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.contentService.create(createContentDto, UserType);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.contentService.delete({ ContentID: id }, UserType);
  }
}
