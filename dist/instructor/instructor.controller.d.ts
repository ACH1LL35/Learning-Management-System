import { InstructorService } from './instructor.service';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
export declare class InstructorController {
    private readonly instructorService;
    constructor(instructorService: InstructorService);
    create(createInstructorDto: CreateInstructorDto, session: Record<string, any>): Promise<{
        message: string;
        instructor: import("./instructor.entity").Instructor;
    }>;
    update(id: number, updateInstructorDto: UpdateInstructorDto, session: Record<string, any>): Promise<{
        message: string;
        instructor: import("./instructor.entity").Instructor;
    }>;
}
