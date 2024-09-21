import { Repository } from 'typeorm';
import { Reporting } from './report.entity';
import { ReportDto } from './report.dto';
export declare class ReportingService {
    private readonly reportingRepository;
    constructor(reportingRepository: Repository<Reporting>);
    create(reportDto: ReportDto, file: Express.Multer.File): Promise<Reporting>;
    delete(reportID: number): Promise<void>;
    findOne(reportID: number): Promise<Reporting>;
}
