import { ConsentFormService } from './consent-form.service';
import { ConsentFormDto } from './consent-form.dto';
import { ConsentForm } from './consent-form.entity';
import { Response, Request } from 'express';
import session from 'express-session';
declare module 'express-session' {
    interface SessionData {
        UserId: number;
        UserType: string;
    }
}
export declare class ConsentFormController {
    private readonly consentFormService;
    constructor(consentFormService: ConsentFormService);
    create(consentFormDto: ConsentFormDto, file: Express.Multer.File, req: Request & {
        session: session.SessionData;
    }): Promise<ConsentForm>;
    delete(consentFormID: number, req: Request & {
        session: session.SessionData;
    }): Promise<void>;
    view(consentFormID: number, res: Response, req: Request & {
        session: session.SessionData;
    }): Promise<void>;
}
