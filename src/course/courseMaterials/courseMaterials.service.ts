import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseMaterial } from './courseMaterials.entity';
import { CourseMaterialDto } from './courseMaterials.dto';

@Injectable()
export class CourseMaterialService {
  constructor(
    @InjectRepository(CourseMaterial)
    private readonly courseMaterialRepository: Repository<CourseMaterial>,
  ) {}

  async create(courseMaterialDto: CourseMaterialDto): Promise<CourseMaterial> {
    const { CourseID, ContentID, ...rest } = courseMaterialDto;
    
    const courseMaterial = new CourseMaterial();
    courseMaterial.course = { CourseID } as any; 
    courseMaterial.contentApproval = { ContentID } as any; 
    Object.assign(courseMaterial, rest);

    return this.courseMaterialRepository.save(courseMaterial);
  }

  async delete(materialID: number): Promise<void> {
    const courseMaterial = await this.courseMaterialRepository.findOne(materialID as any);
    if (!courseMaterial) {
      throw new NotFoundException(`Course material with ID ${materialID} not found`);
    }
    await this.courseMaterialRepository.delete(materialID);
  }
}
