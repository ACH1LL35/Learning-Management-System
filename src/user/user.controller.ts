import { Controller, Post, Body, Patch, Param, Delete, Session, Logger, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: UserDto) {
    const createdUser = await this.userService.create(createUserDto);
    return { message: 'User created successfully', user: createdUser };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto, @Session() session: Record<string, any>) {
    const sessionUserId = parseInt(session.userId);
    const updatedUser = await this.userService.update(id, updateUserDto, sessionUserId);
    return { message: 'User updated successfully', user: updatedUser };
  }

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }, @Session() session: Record<string, any>) {
    const { username, password } = credentials;
    const user = await this.userService.findByUsernameAndPassword(username, password);
    if (!user) {
      throw new BadRequestException('Invalid username or password');
    }
    session.userId = user.UserID.toString();
    session.userType = user.UserType;
    return { message: 'Login successful', user };
  }

  @Delete('logout')
  logout(@Session() session: Record<string, any>) {
    session.destroy();
    return { message: 'Logged out successfully' };
  }
}
