import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
export declare class InstructorService {
    private readonly instructorRepository;
    constructor(instructorRepository: Repository<Instructor>);
    create(createInstructorDto: CreateInstructorDto, userId: number): Promise<Instructor>;
    update(instructorId: number, updateInstructorDto: UpdateInstructorDto, sessionUserId: number): Promise<Instructor>;
}
