import { AchievementsService } from "./student.service";
import { Achievements } from "./student.entity";
export declare class AchievementsController {
    private readonly achievementsService;
    constructor(achievementsService: AchievementsService);
    getAllAchievements(): Promise<Achievements[]>;
    createAchievement(achievement: Achievements): Promise<Achievements>;
    updateAchievement(id: number, achievement: Achievements): Promise<Achievements>;
    deleteAchievement(id: number): Promise<void>;
}
