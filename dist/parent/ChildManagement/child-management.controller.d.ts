import { ChildManagementService } from './child-management.service';
import { CreateChildManagementDto } from './child-management.dto';
import { Request } from 'express';
import session from 'express-session';
export declare class ChildManagementController {
    private readonly childManagementService;
    constructor(childManagementService: ChildManagementService);
    getAllChildren(req: Request & {
        session: session.SessionData;
    }): Promise<any>;
    addChild(createChildManagementDto: CreateChildManagementDto, req: Request): Promise<any>;
    removeChildById(cid: number, req: Request): Promise<{
        message: string;
    }>;
}
