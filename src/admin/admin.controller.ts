import { Controller, Post, Body, Patch, Param, Delete, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('admins')
@UseGuards(AuthGuard('jwt'))
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createAdminDto: CreateAdminDto) {
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