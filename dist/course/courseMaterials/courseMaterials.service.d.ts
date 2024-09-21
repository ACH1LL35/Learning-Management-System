import { Repository } from 'typeorm';
import { CourseMaterial } from './courseMaterials.entity';
import { CreateCourseMaterialDto, DeleteCourseMaterialDto } from './courseMaterials.dto';
export declare class CourseMaterialService {
    private readonly materialRepository;
    constructor(materialRepository: Repository<CourseMaterial>);
    create(createCourseMaterialDto: CreateCourseMaterialDto): Promise<CourseMaterial>;
    delete(deleteCourseMaterialDto: DeleteCourseMaterialDto, userType: string): Promise<void>;
    getAllCourseMaterials(): Promise<CourseMaterial[]>;
}
