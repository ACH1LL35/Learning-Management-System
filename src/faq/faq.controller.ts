import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { FAQService } from './faq.service';
import { CreateFAQDto, UpdateFAQDto } from './faq.dto';

@Controller('faqs')
export class FAQController {
  constructor(private readonly faqService: FAQService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Apply validation pipe here
  async create(@Body() createFAQDto: CreateFAQDto) {
    return this.faqService.create(createFAQDto);
  }

  @Get()
  async findAll() {
    return this.faqService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true })) // Apply validation pipe here
  async update(@Param('id') id: string, @Body() updateFAQDto: UpdateFAQDto) {
    return this.faqService.update(+id, updateFAQDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.faqService.delete(+id);
    return { message: `FAQ with ID ${id} deleted successfully` };
  }
}