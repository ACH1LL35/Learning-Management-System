import { Repository } from 'typeorm';
import { DiscussionComment } from './discussion-comment.entity';
import { User } from '../../user/user.entity';
import { CreateDiscussionCommentDto, UpdateDiscussionCommentDto } from './discussion-comment.dto';
import { Discussion } from '../discussion/discussion.entity';
export declare class DiscussionCommentService {
    private discussionCommentRepository;
    private discussionRepository;
    private userRepository;
    constructor(discussionCommentRepository: Repository<DiscussionComment>, discussionRepository: Repository<Discussion>, userRepository: Repository<User>);
    getUserById(UserID: number): Promise<User>;
    createDiscussionComment(createDiscussionCommentDto: CreateDiscussionCommentDto, UserID: number): Promise<DiscussionComment>;
    findAll(): Promise<DiscussionComment[]>;
    findOne(dcID: number): Promise<DiscussionComment>;
    updateDiscussionComment(dcID: number, updateDiscussionCommentDto: UpdateDiscussionCommentDto, userID: number): Promise<DiscussionComment>;
    deleteDiscussionComment(dcID: number, userID: number): Promise<void>;
}
