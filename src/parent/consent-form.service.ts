import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConsentFormDto } from './create-consent-form.dto';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';
import { ConsentForm } from './consent-form.entity';

@Injectable()
export class ConsentFormService {
  constructor(
    @InjectRepository(ConsentForm)
    private readonly consentFormRepository: Repository<ConsentForm>,
  ) {}

  async create(userId: number, userType: string, createConsentFormDto: CreateConsentFormDto, file: Express.Multer.File): Promise<ConsentForm> {
    // Check session for authorization
    if (!userId || userType !== 'Parents') {
      throw new UnauthorizedException('You must be logged in as a Parent to upload consent form');
    }

    const { fileName } = createConsentFormDto;

    // File upload logic
    const uploadPath = './uploads/consent-forms/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    const storedFileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(uploadPath, storedFileName);

    await new Promise<void>((resolve, reject) => {
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', error => reject(error));
      fileStream.on('finish', () => resolve());
      fileStream.end(file.buffer);
    });

    // Create and save consent form entity
    const consentForm = this.consentFormRepository.create({
      fileName,
      filePath,
    });

    return this.consentFormRepository.save(consentForm);
  }

  async delete(id: number): Promise<void> {
    const consentForm = await this.consentFormRepository.findOne({where:{id:id}});
    if (!consentForm) {
      throw new NotFoundException(`Consent form with ID ${id} not found`);
    }

    if (consentForm.filePath) {
      fs.unlinkSync(consentForm.filePath);
    }

    await this.consentFormRepository.delete(id);
  }

  async findOne(id: number): Promise<ConsentForm> {
    const consentForm = await this.consentFormRepository.findOne({where:{id:id}});
    if (!consentForm) {
      throw new NotFoundException(`Consent form with ID ${id} not found`);
    }
    return consentForm;
  }
}
