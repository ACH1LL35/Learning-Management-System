import { StudentService } from "./student.service";
import { CreateStudentDto, UpdateStudentDto } from "./student.dto";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto, session: Record<string, any>): Promise<{
        message: string;
        student: import("./student.entity").studentProfile;
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto, session: Record<string, any>): Promise<{
        message: string;
        student: import("./student.entity").studentProfile;
    }>;
}
