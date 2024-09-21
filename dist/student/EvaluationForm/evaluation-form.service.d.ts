import { Repository } from 'typeorm';
import { EvaluationForm } from './evaluation-form.entity';
import { EvaluationFormDto } from './evaluation-form.dto';
export declare class EvaluationFormService {
    private readonly evaluationFormRepository;
    constructor(evaluationFormRepository: Repository<EvaluationForm>);
    create(evaluationFormDto: EvaluationFormDto, file: Express.Multer.File): Promise<EvaluationForm>;
    delete(evaluationFormID: number): Promise<void>;
    findOne(evaluationFormID: number): Promise<EvaluationForm>;
}
