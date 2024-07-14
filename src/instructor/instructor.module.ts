import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  providers: [InstructorService],
  controllers: [InstructorController],
})
export class InstructorModule {}
