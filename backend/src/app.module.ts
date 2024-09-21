import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentModule } from './parent/parent.module';
import { AdminModule } from './admin/admin.module';
import { CourseModule } from './course/course.module';
import { ContentApprovalModule } from './course/contentApproval/contentApproval.module';
import { CourseMaterialModule } from './course/courseMaterials/courseMaterials.module';
import { UserModule } from './user/user.module';
import { ReportingModule } from './admin/report/report.module';
import { InstructorModule } from './instructor/instructor.module';
import { EventModule } from './event/event.module';
import { FAQModule } from './faq/faq.module';
import { StudentModule } from './student/student.module';
import { ConsentFormModule } from './parent/ConsentForm/consent-form.module';
import { EvaluationFormModule } from './student/EvaluationForm/evaluation-form.module';
import { ChildManagementModule } from './parent/ChildManagement/child-management.module';
import { DiscussionModule } from './parent/discussion/discussion.module';
import { DiscussionCommentModule } from './parent/discussion-comment/discussion-comment.module';
import { ActivityModule } from './parent/activity/activity.module';

@Module({
  imports: [
    ParentModule,AdminModule,CourseModule,InstructorModule,ActivityModule,DiscussionModule,UserModule,
    ContentApprovalModule,ReportingModule,EventModule,CourseMaterialModule,DiscussionCommentModule,
    FAQModule,ConsentFormModule,StudentModule,ChildManagementModule,EvaluationFormModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'labtest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use STARTTLS
        auth: {
          user: 'zobayeralam1025@gmail.com', // Your Gmail email address
          pass: 'xzna ppoy uqop wcki', // Your Gmail password or app-specific password
        },
        tls: {
          // Optional TLS settings if needed
        }
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>', // Default sender address
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
