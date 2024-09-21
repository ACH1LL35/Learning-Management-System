import { Repository } from 'typeorm';
import { ContentApproval } from './contentApproval.entity';
import { CreateContentApprovalDto, DeleteContentApprovalDto } from './contentApproval.dto';
export declare class ContentApprovalService {
    private readonly contentRepository;
    constructor(contentRepository: Repository<ContentApproval>);
    create(createContentApprovalDto: CreateContentApprovalDto, userType: string): Promise<ContentApproval>;
    delete(deleteContentApprovalDto: DeleteContentApprovalDto, userType: string): Promise<void>;
}
