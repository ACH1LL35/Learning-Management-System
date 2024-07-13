import { Controller, Post, Body, Patch, Param, Session, Delete, BadRequestException, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto, UpdateParentDto } from './parent.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('parents')
export class ParentController {
  private readonly logger = new Logger(ParentController.name);

  constructor(
    private readonly parentService: ParentService,
    private readonly mailerService: MailerService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createParentDto: ParentDto) {
    const createdParent = await this.parentService.create(createParentDto);

    try {
      await this.sendRegistrationEmail(createdParent.Email);
    } catch (error) {
      this.logger.error(`Failed to send registration email to ${createdParent.Email}`, error.stack);
    }

    return { message: 'Profile created successfully / registration complete', parent: createdParent };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateParentDto: UpdateParentDto,
    @Session() session: Record<string, any>,
  ) {
    const sessionParentId = parseInt(session.parentId); // Parse session.parentId to number if necessary
    const updatedParent = await this.parentService.update(id, updateParentDto, sessionParentId);

    try {
      await this.sendProfileUpdatedEmail(updatedParent.Email); // Send email on successful profile update
    } catch (error) {
      this.logger.error(`Failed to send profile updated email to ${updatedParent.Email}`, error.stack);
    }

    return { message: 'Profile edited successfully', parent: updatedParent };
  }

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }, @Session() session: Record<string, any>) {
    const { email, password } = credentials;
    const parent = await this.parentService.findByEmailAndPassword(email, password);
    if (!parent) {
      throw new BadRequestException('Invalid email or password');
    }
    session.parentId = parent.ParentsID.toString(); // Store ParentsID as string in session
    return { message: 'Login successful', parent };
  }

  @Delete('logout')
  logout(@Session() session: Record<string, any>) {
    session.destroy(); // Clear session data
    return { message: 'Logged out successfully' };
  }

  private async sendRegistrationEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Our Platform',
      text: 'Thank you for registering as a parent on our platform.',
    });
  }

  private async sendProfileUpdatedEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Profile Update Notification',
      text: 'Some of your information of your profile on our platform was changed.',
    });
  }
}