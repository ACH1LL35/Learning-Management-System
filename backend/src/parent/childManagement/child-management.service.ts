import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildManagement } from './child-management.entity';
import { CreateChildManagementDto, UpdateChildManagementDto } from './child-management.dto';
import { User } from 'src/user/user.entity';
import { studentProfile } from 'src/student/student.entity'; // Ensure correct import

@Injectable()
export class ChildManagementService {
  constructor(
    @InjectRepository(ChildManagement)
    private readonly childManagementRepository: Repository<ChildManagement>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(studentProfile) // Inject studentProfile repository
    private readonly studentRepository: Repository<studentProfile>,
  ) {}

  async getAllChildren(ParentsID: number): Promise<any[]> {
    const user = await this.userRepository.findOne({ where: { UserID: ParentsID, UserType: 'Parents' } });
    if (!user) {
      throw new UnauthorizedException('User not authorized');
    }

    const children = await this.childManagementRepository.find({ where: { Parent: user } });

    // Map over children to include student details
    const result = await Promise.all(children.map(async (child) => {
      const student = await this.studentRepository.findOne({ where: { StudentID: child.StudentID } });
      return {
        cid: child.cid,
        date_added: child.date_added,
        StudentID: child.StudentID,
        Fname: student?.Fname || 'N/A',
        Lname: student?.Lname || 'N/A',
      };
    }));

    return result;
  }

  async addChild(createChildManagementDto: CreateChildManagementDto, parentId: number): Promise<ChildManagement> {
    const parent = await this.userRepository.findOne({ where: { UserID: parentId, UserType: 'Parents' } });
    if (!parent) {
      throw new UnauthorizedException('User not authorized');
    }

    const student = await this.studentRepository.findOne({ where: { StudentID: createChildManagementDto.StudentID } });
    if (!student) {
      throw new BadRequestException('Student not found');
    }

    const existingChild = await this.childManagementRepository.findOne({ where: { StudentID: createChildManagementDto.StudentID } });
    if (existingChild) {
      throw new BadRequestException('The specific student is already under someone\'s supervision');
    }

    const newChild = this.childManagementRepository.create({
      ...createChildManagementDto,
      Parent: parent,
      StudentID: student.StudentID, // Ensure correct mapping
    });

    return this.childManagementRepository.save(newChild);
  }

  async removeChildById(cid: number, parentId: number): Promise<{ message: string }> {
    const parent = await this.userRepository.findOne({ where: { UserID: parentId, UserType: 'Parents' } });
    if (!parent) {
      throw new UnauthorizedException('User not authorized');
    }

    const child = await this.childManagementRepository.findOne({ where: { cid, Parent: parent } });
    if (!child) {
      throw new BadRequestException('Child not found or not managed by this parent');
    }

    await this.childManagementRepository.delete(cid);
    return { message: 'Student removed successfully' };
  }
}