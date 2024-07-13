import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { CourseMaterialService } from './courseMaterials.service';
import { CourseMaterialDto } from './courseMaterials.dto';
import { CourseMaterial } from './courseMaterials.entity';

@Controller('materials')
export class CourseMaterialController {
  constructor(private readonly courseMaterialService: CourseMaterialService) {}

  @Post()
  async create(@Body() createDto: CourseMaterialDto): Promise<CourseMaterial> {
    return this.courseMaterialService.create(createDto);
  }

  @Delete(':id')
  async delete(@Param('id') materialID: number): Promise<void> {
    await this.courseMaterialService.delete(materialID);
  }
}
