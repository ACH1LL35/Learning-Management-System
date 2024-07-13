import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where:{Username: username} });
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async create(userDto: UserDto): Promise<User> {
     userDto.Password= await this.hashPassword(userDto.Password);
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto, sessionUserId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { UserID: id } });

    if (!user) {
      throw new BadRequestException(`User with ID ${id} not found`);
    }

    if (user.UserID !== sessionUserId) {
      throw new UnauthorizedException('You are not authorized to perform this action');
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { Username: username, Password: password } });
  }
}
