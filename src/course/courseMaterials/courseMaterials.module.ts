import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseMaterial } from './courseMaterials.entity';
import { CourseMaterialService } from './courseMaterials.service';
import { CourseMaterialController } from './courseMaterials.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CourseMaterial])],
  providers: [CourseMaterialService],
  controllers: [CourseMaterialController],
})
export class CourseMaterialModule {}
