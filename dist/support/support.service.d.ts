import { Repository } from 'typeorm';
import { Support } from './support.entity';
import { CreateSupportDto, UpdateSupportDto } from './support.dto';
export declare class SupportService {
    private readonly supportRepository;
    constructor(supportRepository: Repository<Support>);
    create(createSupportDto: CreateSupportDto): Promise<Support>;
    findAll(): Promise<Support[]>;
    findOne(SupportID: number): Promise<Support>;
    update(SupportID: number, updateSupportDto: UpdateSupportDto): Promise<Support>;
    delete(SupportID: number): Promise<void>;
}
