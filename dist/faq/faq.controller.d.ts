import { FAQService } from './faq.service';
import { CreateFAQDto, UpdateFAQDto } from './faq.dto';
export declare class FAQController {
    private readonly faqService;
    constructor(faqService: FAQService);
    create(createFAQDto: CreateFAQDto, session: Record<string, any>): Promise<import("./faq.entity").FAQ>;
    update(id: number, updateFAQDto: UpdateFAQDto, session: Record<string, any>): Promise<import("./faq.entity").FAQ>;
    delete(id: number, session: Record<string, any>): Promise<void>;
    getAll(): Promise<import("./faq.entity").FAQ[]>;
}
