import { Injectable } from "@nestjs/common";
import { studentProfile,CourseEnrollments,Wishlist,Payments,Submissions,Achievements} from './student.entity';
import {User} from '../user/user.entity'
import {Course} from '../course/course.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { StudentDTO, StudentUpdateDTO,CreateCourseEnrollmentDto,CreateWishlistDto} from './student.dto';

@Injectable()
export class StudentService{

  constructor(
    @InjectRepository(studentProfile)
    private readonly studentRepository: Repository<studentProfile>,
    private readonly mailerService: MailerService,
  ) {}
 /*     
    //Sgn Up 
    async create(studentDto: StudentDTO): Promise<studentProfile> {
      const student= this.studentRepository.create(studentDto);
      const savedStudent = await this.studentRepository.save(student);
  
      // Send registration email
      //await this.sendRegistrationEmail(savedParent.Email);
  
      return savedStudent;
    }
    */    
       
}

@Injectable()
export class CourseEnrollmentsService {
  constructor(
    @InjectRepository(CourseEnrollments)
    private courseEnrollmentsRepository: Repository<CourseEnrollments>,
  ) {}

  async getAllCourseEnrollments(): Promise<CourseEnrollments[]> {
    return await this.courseEnrollmentsRepository.find();
  }

  async createCourseEnrollment(
    courseEnrollment: CourseEnrollments,
  ): Promise<CourseEnrollments> {
    return await this.courseEnrollmentsRepository.save(courseEnrollment);
  }

 
  async deleteCourseEnrollment(id: number): Promise<void> {
    const courseEnrollment = await this.courseEnrollmentsRepository.findOne({ where: { EnrollmentID: id } });
    await this.courseEnrollmentsRepository.remove(courseEnrollment);
  }
  
  
}

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
  ) {}

  async getAllWishlist(): Promise<Wishlist[]> {
    return await this.wishlistRepository.find();
  }

  async createWishlist(wishlist: Wishlist): Promise<Wishlist> {
    return await this.wishlistRepository.save(wishlist);
  }

  async updateWishlist(id: number, wishlist: Wishlist): Promise<Wishlist> {
    await this.wishlistRepository.update(id, wishlist);
    return await this.wishlistRepository.findOne({ where: { WishlistID: id } });
  }

  async deleteWishlist(id: number): Promise<void> {
    const wishlist = await this.wishlistRepository.findOne({ where: { WishlistID: id } });
    await this.wishlistRepository.remove(wishlist);
  }
}

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
  ) {}

  async getAllPayments(): Promise<Payments[]> {
    return await this.paymentsRepository.find();
  }

  async createPayment(payment: Payments): Promise<Payments> {
    return await this.paymentsRepository.save(payment);
  }

  async updatePayment(id: number, payment: Payments): Promise<Payments> {
    await this.paymentsRepository.update(id, payment);
    return await this.paymentsRepository.findOne({ where: { PaymentID: id } });
  }

  async deletePayment(id: number): Promise<void> {
    const payment = await this.paymentsRepository.findOne({ where: { PaymentID: id } });
    await this.paymentsRepository.remove(payment);
  }
}
@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submissions)
    private submissionsRepository: Repository<Submissions>,
  ) {}

  async getAllSubmissions(): Promise<Submissions[]> {
    return await this.submissionsRepository.find();
  }

  async createSubmission(
    submission: Submissions,
  ): Promise<Submissions> {
    return await this.submissionsRepository.save(submission);
  }

  async updateSubmission(
    id: number,
    submission: Submissions,
  ): Promise<Submissions> {
    await this.submissionsRepository.update(id, submission);
    return await this.submissionsRepository.findOne({ where: { SubmissionID: id } });
  }

  async deleteSubmission(id: number): Promise<void> {
    const submission = await this.submissionsRepository.findOne({ where: { SubmissionID: id } });
    await this.submissionsRepository.remove(submission);
  }
}

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievements)
    private achievementsRepository: Repository<Achievements>,
  ) {}

  async getAllAchievements(): Promise<Achievements[]> {
    return await this.achievementsRepository.find();
  }

  async createAchievement(
    achievement: Achievements,
  ): Promise<Achievements> {
    return await this.achievementsRepository.save(achievement);
  }

  async updateAchievement(
    id: number,
    achievement: Achievements,
  ): Promise<Achievements> {
    await this.achievementsRepository.update(id, achievement);
    return await this.achievementsRepository.findOne({ where: { AchievementID: id } });
  }

  async deleteAchievement(id: number): Promise<void> {
    const achievement = await this.achievementsRepository.findOne({ where: { AchievementID: id } });
    await this.achievementsRepository.remove(achievement);
  }
}

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getAllComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async createComment(comment: Comment): Promise<Comment> {
    return await this.commentRepository.save(comment);
  }


}