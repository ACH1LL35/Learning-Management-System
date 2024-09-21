import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { SubmissionsService } from "./student.service";
import { Submissions } from "./student.entity";

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get()
  async getAllSubmissions(): Promise<Submissions[]> {
    return await this.submissionsService.getAllSubmissions();
  }

  @Post()
  async createSubmission(@Body() submission: Submissions): Promise<Submissions> {
    return await this.submissionsService.createSubmission(submission);
  }

  @Put(':id')
  async updateSubmission(@Param('id', ParseIntPipe) id: number, @Body() submission: Submissions): Promise<Submissions> {
    return await this.submissionsService.updateSubmission(id, submission);
  }

  @Delete(':id')
  async deleteSubmission(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.submissionsService.deleteSubmission(id);
  }
}
