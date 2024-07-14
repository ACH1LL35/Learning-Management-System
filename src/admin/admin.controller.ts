import { Controller, Post, Patch, Body, Param, Session, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createAdminDto: CreateAdminDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to create a new admin');
    }

    const createdAdmin = await this.adminService.create(createAdminDto, session.UserId);
    return { message: 'Admin created successfully', admin: createdAdmin };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to update admin details');
    }

    const updatedAdmin = await this.adminService.update(id, updateAdminDto, session.UserId);
    return { message: 'Admin updated successfully', admin: updatedAdmin };
  }
}
