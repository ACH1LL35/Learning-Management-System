import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildManagementService } from './child-management.service';
import { ChildManagementController } from './child-management.controller';
import { ChildManagement } from './child-management.entity';
import { User } from 'src/user/user.entity';
import { StudentModule } from 'src/student/student.module'; // Import StudentModule
import { studentProfile } from 'src/student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChildManagement, User,studentProfile]), 
    StudentModule
  ],
  providers: [ChildManagementService],
  controllers: [ChildManagementController],
})
export class ChildManagementModule {}
