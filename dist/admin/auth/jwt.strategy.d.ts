import { AuthService } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<any>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
        adminId: any;
        username: any;
    }>;
}
export {};
