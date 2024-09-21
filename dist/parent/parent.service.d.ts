import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Parent } from './parent.entity';
import { ParentDto, UpdateParentDto } from './parent.dto';
export declare class ParentService {
    private readonly parentRepository;
    private readonly mailerService;
    constructor(parentRepository: Repository<Parent>, mailerService: MailerService);
    create(parentDto: ParentDto): Promise<Parent>;
    update(id: number, updateParentDto: UpdateParentDto, sessionParentId: number): Promise<Parent>;
    findByEmailAndPassword(email: string, password: string): Promise<Parent | null>;
    private sendRegistrationEmail;
}
