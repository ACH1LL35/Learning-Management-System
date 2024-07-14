import { Controller, Post, Patch, Body, Param, Session, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createInstructorDto: CreateInstructorDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as an instructor ');
    }

    const createdInstructor = await this.instructorService.create(createInstructorDto, session.UserId);
    return { message: 'Instructor created successfully', instructor: createdInstructor };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateInstructorDto: UpdateInstructorDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as instructor to update instructor details');
    }

    const updatedInstructor = await this.instructorService.update(id, updateInstructorDto, session.UserId);
    return { message: 'Instructor updated successfully', instructor: updatedInstructor };
  }
}
