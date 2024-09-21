import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(session: Record<string, any>, createFeedbackDto: CreateFeedbackDto): Promise<import("./feedback.entity").Feedback>;
    getAll(): Promise<import("./feedback.entity").Feedback[]>;
}
