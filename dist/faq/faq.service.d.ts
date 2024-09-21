import { Repository } from 'typeorm';
import { FAQ } from './faq.entity';
import { CreateFAQDto, UpdateFAQDto } from './faq.dto';
export declare class FAQService {
    private readonly faqRepository;
    constructor(faqRepository: Repository<FAQ>);
    create(createFAQDto: CreateFAQDto): Promise<FAQ>;
    update(faqId: number, updateFAQDto: UpdateFAQDto, userType: string): Promise<FAQ>;
    delete(faqId: number, userType: string): Promise<void>;
    getAllFAQs(): Promise<FAQ[]>;
}
