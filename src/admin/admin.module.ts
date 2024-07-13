import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { User } from '../user/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { CourseController } from 'src/course/course.controller';
import { Course } from 'src/course/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin, User,Course]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
          user: 'zobayeralam1025@gmail.com', 
          pass: 'axpa nfuj wirs fgbl', 
        },
        tls: {
          
        }
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>', 
      },
    }),
  ],
  providers: [AdminService],
  controllers: [AdminController,CourseController],
})
export class AdminModule {}
