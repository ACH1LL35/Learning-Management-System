import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsentForm } from './consent-form.entity';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';
import { ConsentFormDto } from './create-consent-form.dto';

@Injectable()
export class ConsentFormService {
  constructor(
    @InjectRepository(ConsentForm)
    private readonly consentFormRepository: Repository<ConsentForm>,
  ) {}

  async create(consentFormDto: ConsentFormDto, file: Express.Multer.File): Promise<ConsentForm> {
    const { FileName } = consentFormDto;

    const uploadPath = './uploads/consent-forms';
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

    const consentForm = this.consentFormRepository.create({
      FileName,
      UploadDate: new Date(),
      FilePath: filePath,
    });

    return this.consentFormRepository.save(consentForm);
  }

  async delete(consentFormID: number): Promise<void> {
    const consentForm = await this.consentFormRepository.findOne({ where: { ConsentFormID: consentFormID } });
    if (!consentForm) {
      throw new NotFoundException(`Consent Form with ID ${consentFormID} not found`);
    }

    if (consentForm.FilePath) {
      fs.unlinkSync(consentForm.FilePath);
    }

    await this.consentFormRepository.delete(consentFormID);
  }

  async findOne(consentFormID: number): Promise<ConsentForm> {
    const consentForm = await this.consentFormRepository.findOne({ where: { ConsentFormID: consentFormID } });
    if (!consentForm) {
      throw new NotFoundException(`Consent Form with ID ${consentFormID} not found`);
    }
    return consentForm;
  }
}
