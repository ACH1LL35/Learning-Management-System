import { Controller, Post, Body, Patch, Param, Delete, Session, Logger, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, LoginDto } from './user.dto';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: UserDto) {
    const existingUser = await this.userService.findByUsername(createUserDto.Username);
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }

    const createdUser = await this.userService.create(createUserDto);
    return { message: 'User created successfully', user: createdUser };
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(
    @Body() credentials: LoginDto,
    @Session() session: Record<string, any>,
  ) {
    const { username, password } = credentials;
    this.logger.log(`Attempting to log in user: ${username}`);

    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }

    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new BadRequestException('Invalid username or password');
    }

    const isPasswordValid = await this.userService.comparePasswords(password, user.Password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid username or password');
    }

    session.UserId = user.UserID;
    session.UserType = user.UserType;

    this.logger.log(`User logged in: ${user.UserID} - ${user.UserType}`);
    console.log('Session data set:', session);

    return { message: 'Login successful', user };
  }

  @Delete('logout')
  logout(@Session() session: Record<string, any>) {
    session.destroy();
    return { message: 'Logged out successfully' };
  }
}
