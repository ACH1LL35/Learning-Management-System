import { SupportService } from './support.service';
import { CreateSupportDto, UpdateSupportDto } from './support.dto';
export declare class SupportController {
    private readonly supportService;
    constructor(supportService: SupportService);
    create(createSupportDto: CreateSupportDto): Promise<import("./support.entity").Support>;
    findAll(): Promise<import("./support.entity").Support[]>;
    findOne(id: string): Promise<import("./support.entity").Support>;
    update(id: string, updateSupportDto: UpdateSupportDto): Promise<import("./support.entity").Support>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
