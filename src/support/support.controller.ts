// support.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { SupportService } from './support.service';
import { CreateSupportDto, UpdateSupportDto } from './support.dto';

@Controller('supports')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post()
  async create(@Body() createSupportDto: CreateSupportDto) {
    return this.supportService.create(createSupportDto);
  }

  @Get()
  async findAll() {
    return this.supportService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.supportService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSupportDto: UpdateSupportDto) {
    return this.supportService.update(+id, updateSupportDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.supportService.delete(+id);
    return { message: `Support ticket with ID ${id} deleted successfully` };
  }
}
