import { CourseMaterialService } from './courseMaterials.service';
import { CreateCourseMaterialDto } from './courseMaterials.dto';
export declare class CourseMaterialController {
    private readonly materialService;
    constructor(materialService: CourseMaterialService);
    create(createMaterialDto: CreateCourseMaterialDto, session: Record<string, any>): Promise<import("./courseMaterials.entity").CourseMaterial>;
    delete(id: number, session: Record<string, any>): Promise<void>;
    getAll(session: Record<string, any>): Promise<import("./courseMaterials.entity").CourseMaterial[]>;
}
