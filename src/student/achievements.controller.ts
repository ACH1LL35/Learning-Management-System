import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AchievementsService } from "./student.service";
import { Achievements } from "./student.entity";

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  async getAllAchievements(): Promise<Achievements[]> {
    return await this.achievementsService.getAllAchievements();
  }

  @Post()
  async createAchievement(@Body() achievement: Achievements): Promise<Achievements> {
    return await this.achievementsService.createAchievement(achievement);
  }

  @Put(':id')
  async updateAchievement(@Param('id', ParseIntPipe) id: number, @Body() achievement: Achievements): Promise<Achievements> {
    return await this.achievementsService.updateAchievement(id, achievement);
  }

  @Delete(':id')
  async deleteAchievement(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.achievementsService.deleteAchievement(id);
  }
}
