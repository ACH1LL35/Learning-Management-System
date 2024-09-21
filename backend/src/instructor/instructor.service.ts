import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
import { User } from '../user/user.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  async create(createInstructorDto: CreateInstructorDto, userId: number): Promise<Instructor> {
    const instructor = this.instructorRepository.create({
      ...createInstructorDto,
      User: { UserID: userId } as User,
    });
    return this.instructorRepository.save(instructor);
  }

  async update(instructorId: number, updateInstructorDto: UpdateInstructorDto, sessionUserId: number): Promise<Instructor> {
    const instructor = await this.instructorRepository.findOne({ where: { InstructorID: instructorId }, relations: ['User'] });

    if (!instructor) {
      throw new BadRequestException(`Instructor with ID ${instructorId} not found`);
    }

    if (instructor.User.UserID !== sessionUserId) {
      throw new UnauthorizedException('You are not authorized to perform this action');
    }

    Object.assign(instructor, updateInstructorDto);
    return this.instructorRepository.save(instructor);
  }
}
