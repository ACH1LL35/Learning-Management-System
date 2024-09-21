import { Repository } from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';
import { Request } from 'express';
export declare class ActivityService {
    private readonly discussionRepository;
    private readonly discussionCommentRepository;
    constructor(discussionRepository: Repository<Discussion>, discussionCommentRepository: Repository<DiscussionComment>);
    getAllActivities(req: Request): Promise<any[]>;
}
