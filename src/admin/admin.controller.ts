import { Controller, Post, Body, Patch, Param, Delete, Get, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException, Req } from '@nestjs/common';
import { Request } from 'express';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('admins')
// @UseGuards(AuthGuard('jwt')) // Uncomment this line if you want to guard all routes with JWT authentication
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Req() req: Request, @Body() createAdminDto: CreateAdminDto) {
    // Check if UserType is admin based on session
    const sessionUserType = (req.session as any)?.UserType; // Type assertion to any

    if (sessionUserType !== 'Admin') {
      throw new UnauthorizedException('Only admins can create new admins');
    }

    // Use sessionUserID to set createAdminDto.UserID
    createAdminDto.UserID = (req.session as any)?.userID; // Assuming userID is the correct property name

    // Check if UserID already exists in admin table
    const existingAdmin = await this.adminService.findByUserID(createAdminDto.UserID);
    if (existingAdmin) {
      throw new BadRequestException('UserID already exists in admin table');
    }

    // Create new admin
    const createdAdmin = await this.adminService.create(createAdminDto);
    return { message: 'Admin created successfully', admin: createdAdmin };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() updateAdminDto: UpdateAdminDto) {
    const updatedAdmin = await this.adminService.update(id, updateAdminDto);
    return { message: 'Admin updated successfully', admin: updatedAdmin };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.adminService.delete(id);
    return { message: 'Admin deleted successfully' };
  }

  @Get()
  async findAll() {
    const admins = await this.adminService.findAll();
    return { message: 'Admins retrieved successfully', admins };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const admin = await this.adminService.findOne(id);
    return { message: 'Admin retrieved successfully', admin };
  }
}
