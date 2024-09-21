import { DiscussionService } from './discussion.service';
import { Request } from 'express';
import session from 'express-session';
import { CreateDiscussionDto, UpdateDiscussionDto } from './discussion.dto';
export declare class DiscussionController {
    private readonly discussionService;
    constructor(discussionService: DiscussionService);
    createDiscussion(createDiscussionDto: CreateDiscussionDto, req: Request & {
        session: session.SessionData;
    }): Promise<import("./discussion.entity").Discussion>;
    getAllDiscussions(): Promise<import("./discussion.entity").Discussion[]>;
    getDiscussionById(dID: number): Promise<import("./discussion.entity").Discussion>;
    updateDiscussion(dID: number, updateDiscussionDto: UpdateDiscussionDto, req: Request & {
        session: session.SessionData;
    }): Promise<any>;
    deleteDiscussion(dID: number, req: Request & {
        session: session.SessionData;
    }): Promise<void>;
}
