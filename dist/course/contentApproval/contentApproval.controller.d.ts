import { ContentApprovalService } from './contentApproval.service';
import { CreateContentApprovalDto } from './contentApproval.dto';
export declare class ContentApprovalController {
    private readonly contentService;
    constructor(contentService: ContentApprovalService);
    create(createContentDto: CreateContentApprovalDto, session: Record<string, any>): Promise<import("./contentApproval.entity").ContentApproval>;
    delete(id: number, session: Record<string, any>): Promise<void>;
}
