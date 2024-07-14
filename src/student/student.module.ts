import { Module } from "@nestjs/common";
import { StudentService } from "./student.service"
import { StudentController } from "./student.controller";
import { studentProfile } from "./student.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [StudentModule, TypeOrmModule.forFeature([studentProfile])],
    controllers: [StudentController],
    providers: [StudentService],
}) 

export class StudentModule {}