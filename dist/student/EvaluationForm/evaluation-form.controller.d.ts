import { EvaluationFormService } from './evaluation-form.service';
import { EvaluationFormDto } from './evaluation-form.dto';
import { EvaluationForm } from './evaluation-form.entity';
import { Response } from 'express';
export declare class EvaluationFormController {
    private readonly evaluationFormService;
    constructor(evaluationFormService: EvaluationFormService);
    create(evaluationFormDto: EvaluationFormDto, file: Express.Multer.File): Promise<EvaluationForm>;
    delete(evaluationFormID: number): Promise<void>;
    view(evaluationFormID: number, res: Response): Promise<void>;
}
