import { Repository } from 'typeorm';
import { ConsentForm } from './consent-form.entity';
import { ConsentFormDto } from './consent-form.dto';
export declare class ConsentFormService {
    private readonly consentFormRepository;
    constructor(consentFormRepository: Repository<ConsentForm>);
    create(consentFormDto: ConsentFormDto, file: Express.Multer.File, userID: number): Promise<ConsentForm>;
    delete(consentFormID: number): Promise<void>;
    findOne(consentFormID: number): Promise<ConsentForm>;
}
