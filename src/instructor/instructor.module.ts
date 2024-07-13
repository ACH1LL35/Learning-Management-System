import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  providers: [],
  controllers: [],
})
export class CourseModule {}
