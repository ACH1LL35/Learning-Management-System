import { User } from '../../user/user.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';
export declare class Discussion {
    dID: number;
    dtopic: string;
    dDesc: string;
    date_posted: Date;
    edited: boolean;
    last_edited: Date;
    posted_By: User;
    comments: DiscussionComment[];
}
