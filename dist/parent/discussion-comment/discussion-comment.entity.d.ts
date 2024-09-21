import { User } from '../../user/user.entity';
import { Discussion } from '../discussion/discussion.entity';
export declare class DiscussionComment {
    dcID: number;
    discussion: Discussion;
    dcComment: string;
    date_posted: Date;
    edited: boolean;
    last_edited: Date;
    posted_By: User;
}
