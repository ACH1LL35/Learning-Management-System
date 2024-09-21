import { ReportingService } from './report.service';
import { ReportDto } from './report.dto';
import { Reporting } from './report.entity';
import { Response } from 'express';
export declare class ReportingController {
    private readonly reportingService;
    constructor(reportingService: ReportingService);
    create(reportDto: ReportDto, file: Express.Multer.File): Promise<Reporting>;
    delete(reportID: number): Promise<void>;
    view(reportID: number, res: Response): Promise<void>;
}
