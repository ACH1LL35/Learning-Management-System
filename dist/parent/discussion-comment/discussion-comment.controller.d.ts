import { DiscussionCommentService } from './discussion-comment.service';
import { Request } from 'express';
import session from 'express-session';
import { CreateDiscussionCommentDto, UpdateDiscussionCommentDto } from './discussion-comment.dto';
export declare class DiscussionCommentController {
    private readonly discussionCommentService;
    constructor(discussionCommentService: DiscussionCommentService);
    createDiscussionComment(createDiscussionCommentDto: CreateDiscussionCommentDto, req: Request & {
        session: session.SessionData;
    }): Promise<import("./discussion-comment.entity").DiscussionComment>;
    getAllComments(): Promise<import("./discussion-comment.entity").DiscussionComment[]>;
    getCommentById(dcID: number): Promise<import("./discussion-comment.entity").DiscussionComment>;
    updateDiscussionComment(dcID: number, updateDiscussionCommentDto: UpdateDiscussionCommentDto, req: Request & {
        session: session.SessionData;
    }): Promise<any>;
    deleteDiscussionComment(dcID: number, req: Request & {
        session: session.SessionData;
    }): Promise<void>;
}
