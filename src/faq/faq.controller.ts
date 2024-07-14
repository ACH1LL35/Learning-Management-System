import { Controller, Post, Delete, Patch, Body, Param, Session, UsePipes, ValidationPipe, Get, UnauthorizedException } from '@nestjs/common';
import { FAQService } from './faq.service';
import { CreateFAQDto, UpdateFAQDto } from './faq.dto';

@Controller('faq')
export class FAQController {
  constructor(private readonly faqService: FAQService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createFAQDto: CreateFAQDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.faqService.create(createFAQDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateFAQDto: UpdateFAQDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.faqService.update(id, updateFAQDto, UserType);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.faqService.delete(id, UserType);
  }

  @Get()
  async getAll() {
    return this.faqService.getAllFAQs();
  }
}
