import { User } from 'src/user/user.entity';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';
export declare class Activity {
    id: number;
    discussion: Discussion;
    comment: DiscussionComment;
    postedBy: User;
    type: string;
    datePosted: Date;
}
