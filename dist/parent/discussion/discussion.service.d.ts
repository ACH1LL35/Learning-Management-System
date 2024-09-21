import { Repository } from 'typeorm';
import { Discussion } from './discussion.entity';
import { User } from '../../user/user.entity';
import { CreateDiscussionDto, UpdateDiscussionDto } from './discussion.dto';
export declare class DiscussionService {
    private discussionRepository;
    private userRepository;
    constructor(discussionRepository: Repository<Discussion>, userRepository: Repository<User>);
    getUserById(UserID: number): Promise<User>;
    createDiscussion(createDiscussionDto: CreateDiscussionDto, UserID: number): Promise<Discussion>;
    findAll(): Promise<Discussion[]>;
    findOne(dID: number): Promise<Discussion>;
    updateDiscussion(dID: number, updateDiscussionDto: UpdateDiscussionDto, userID: number): Promise<Discussion>;
    deleteDiscussion(dID: number, userID: number): Promise<void>;
}
