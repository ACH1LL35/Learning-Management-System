import { ActivityService } from './activity.service';
import { Request } from 'express';
import session from 'express-session';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    getAllActivities(req: Request & {
        session: session.SessionData;
    }): Promise<any[]>;
}
