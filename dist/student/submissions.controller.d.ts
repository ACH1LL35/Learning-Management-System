import { SubmissionsService } from "./student.service";
import { Submissions } from "./student.entity";
export declare class SubmissionsController {
    private readonly submissionsService;
    constructor(submissionsService: SubmissionsService);
    getAllSubmissions(): Promise<Submissions[]>;
    createSubmission(submission: Submissions): Promise<Submissions>;
    updateSubmission(id: number, submission: Submissions): Promise<Submissions>;
    deleteSubmission(id: number): Promise<void>;
}
