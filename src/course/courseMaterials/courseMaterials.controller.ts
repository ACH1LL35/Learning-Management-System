import { Controller, Post, Delete, Body, Param, Session, UsePipes, ValidationPipe, UnauthorizedException } from '@nestjs/common';
import { CourseMaterialService } from './courseMaterials.service';
import { CreateCourseMaterialDto, DeleteCourseMaterialDto } from './courseMaterials.dto';

@Controller('course-material')
export class CourseMaterialController {
  constructor(private readonly materialService: CourseMaterialService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createMaterialDto: CreateCourseMaterialDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.materialService.create(createMaterialDto);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.materialService.delete({ MaterialID: id }, UserType);
  }
}
