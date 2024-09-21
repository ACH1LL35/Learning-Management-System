import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseMaterial } from './courseMaterials.entity';
import { CreateCourseMaterialDto, DeleteCourseMaterialDto } from './courseMaterials.dto';

@Injectable()
export class CourseMaterialService {
  constructor(
    @InjectRepository(CourseMaterial)
    private readonly materialRepository: Repository<CourseMaterial>,
  ) {}

  async create(createCourseMaterialDto: CreateCourseMaterialDto): Promise<CourseMaterial> {
    const material = this.materialRepository.create(createCourseMaterialDto);
    return this.materialRepository.save(material);
  }

  async delete(deleteCourseMaterialDto: DeleteCourseMaterialDto, userType: string): Promise<void> {
    if (userType !== 'Admin' && userType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as an admin or instructor to delete course material');
    }

    const { MaterialID } = deleteCourseMaterialDto;
    const material = await this.materialRepository.findOne({where:{MaterialID:MaterialID}});

    if (!material) {
      throw new BadRequestException(`Course material with ID ${MaterialID} not found`);
    }

    await this.materialRepository.remove(material);
  }

  async getAllCourseMaterials(): Promise<CourseMaterial[]> {
    return this.materialRepository.find();
  }
}