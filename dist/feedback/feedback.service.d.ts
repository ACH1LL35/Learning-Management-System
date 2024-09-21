import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { User } from '../user/user.entity';
import { CreateFeedbackDto } from './feedback.dto';
export declare class FeedbackService {
    private readonly feedbackRepository;
    private readonly userRepository;
    constructor(feedbackRepository: Repository<Feedback>, userRepository: Repository<User>);
    create(userId: number, createFeedbackDto: CreateFeedbackDto, userType: string): Promise<Feedback>;
    getAll(): Promise<Feedback[]>;
}
