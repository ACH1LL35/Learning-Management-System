import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { studentProfile, CourseEnrollments, Wishlist, Payments, Submissions, Achievements } from "./student.entity";
import { CreateStudentDto, UpdateStudentDto, CreateCourseEnrollmentDto, CreateWishlistDto, CreatePaymentDto, CreateSubmissionDto, CreateAchievementDto } from "./student.dto";
import { User } from "../user/user.entity";
import * as session from "express-session";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(studentProfile)
    private readonly studentRepository: Repository<studentProfile>,
  ) {}

  async create(createStudentDto: CreateStudentDto, userId: number): Promise<studentProfile> {
    const student = this.studentRepository.create({
      ...createStudentDto,
      user: { UserID: userId } as User,
    });
    return await this.studentRepository.save(student);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto, userId: number): Promise<studentProfile> {
    const student = await this.studentRepository.findOne({ where: { StudentID: id, user: { UserID: userId } } });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    Object.assign(student, updateStudentDto);
    return await this.studentRepository.save(student);
  }
}

@Injectable()
export class CourseEnrollmentsService {
  constructor(
    @InjectRepository(CourseEnrollments)
    private readonly courseEnrollmentsRepository: Repository<CourseEnrollments>,
  ) {}

  async getAllCourseEnrollments(): Promise<CourseEnrollments[]> {
    return await this.courseEnrollmentsRepository.find({ relations: ['user', 'course'] });
  }

  async createCourseEnrollment(createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollments> {
    const courseEnrollment = this.courseEnrollmentsRepository.create({
      user: { UserID: createCourseEnrollmentDto.UserID } as User,
      course: { id: createCourseEnrollmentDto.CourseID } as any, // Assuming Course entity has 'id' field
    });
    return await this.courseEnrollmentsRepository.save(courseEnrollment);
  }

  async deleteCourseEnrollment(id: number): Promise<void> {
    await this.courseEnrollmentsRepository.delete(id);
  }
}

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
  ) {}

  async getAllWishlist(): Promise<Wishlist[]> {
    return await this.wishlistRepository.find({ relations: ['user', 'course'] });
  }

  async createWishlist(wishlist: Wishlist): Promise<Wishlist> {
    return await this.wishlistRepository.save(wishlist);
  }

  async updateWishlist(id: number, wishlist: Wishlist): Promise<Wishlist> {
    const existingWishlist = await this.wishlistRepository.findOne({ where: { id } });
    if (!existingWishlist) {
      throw new NotFoundException(`Wishlist item with ID ${id} not found`);
    }

    Object.assign(existingWishlist, wishlist);
    return await this.wishlistRepository.save(existingWishlist);
  }

  async deleteWishlist(id: number): Promise<void> {
    await this.wishlistRepository.delete(id);
  }
}

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private readonly paymentsRepository: Repository<Payments>,
  ) {}

  async getAllPayments(): Promise<Payments[]> {
    return await this.paymentsRepository.find({ relations: ['user'] });
  }

  async createPayment(payment: Payments): Promise<Payments> {
    return await this.paymentsRepository.save(payment);
  }

  async updatePayment(id: number, payment: Payments): Promise<Payments> {
    const existingPayment = await this.paymentsRepository.findOne({ where: { id } });
    if (!existingPayment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    Object.assign(existingPayment, payment);
    return await this.paymentsRepository.save(existingPayment);
  }

  async deletePayment(id: number): Promise<void> {
    await this.paymentsRepository.delete(id);
  }
}

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submissions)
    private readonly submissionsRepository: Repository<Submissions>,
  ) {}

  async getAllSubmissions(): Promise<Submissions[]> {
    return await this.submissionsRepository.find({ relations: ['user'] });
  }

  async createSubmission(submission: Submissions): Promise<Submissions> {
    return await this.submissionsRepository.save(submission);
  }

  async updateSubmission(id: number, submission: Submissions): Promise<Submissions> {
    const existingSubmission = await this.submissionsRepository.findOne({ where: { id } });
    if (!existingSubmission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }

    Object.assign(existingSubmission, submission);
    return await this.submissionsRepository.save(existingSubmission);
  }

  async deleteSubmission(id: number): Promise<void> {
    await this.submissionsRepository.delete(id);
  }
}

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievements)
    private readonly achievementsRepository: Repository<Achievements>,
  ) {}

  async getAllAchievements(): Promise<Achievements[]> {
    return await this.achievementsRepository.find({ relations: ['user'] });
  }

  async createAchievement(achievement: Achievements): Promise<Achievements> {
    return await this.achievementsRepository.save(achievement);
  }

  async updateAchievement(id: number, achievement: Achievements): Promise<Achievements> {
    const existingAchievement = await this.achievementsRepository.findOne({ where: { id } });
    if (!existingAchievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }

    Object.assign(existingAchievement, achievement);
    return await this.achievementsRepository.save(existingAchievement);
  }

  async deleteAchievement(id: number): Promise<void> {
    await this.achievementsRepository.delete(id);
  }
}
