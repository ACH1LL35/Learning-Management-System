import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsentForm } from './consent-form.entity';
import { ConsentFormDto } from './consent-form.dto';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';

@Injectable()
export class ConsentFormService {
  constructor(
    @InjectRepository(ConsentForm)
    private readonly consentFormRepository: Repository<ConsentForm>,
  ) {}

  async create(consentFormDto: ConsentFormDto, file: Express.Multer.File, userID: number): Promise<ConsentForm> {
    const { FormName, Description, FormDate, CollectedBy } = consentFormDto;

    const uploadPath = './uploads/consent-forms/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(uploadPath, fileName);

    await new Promise<void>((resolve, reject) => {
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', error => reject(error));
      fileStream.on('finish', () => resolve());
      fileStream.end(file.buffer);
    });

    const consentForm = this.consentFormRepository.create({
      FormName,
      Description,
      FormDate,
      CollectedBy,
      FilePath: filePath,
      UserID: userID,
    });

    return this.consentFormRepository.save(consentForm);
  }

  async delete(consentFormID: number): Promise<void> {
    const consentForm = await this.consentFormRepository.findOne({ where: { FormID: consentFormID } });
    if (!consentForm) {
      throw new NotFoundException(`Consent Form with ID ${consentFormID} not found`);
    }

    if (consentForm.FilePath) {
      fs.unlinkSync(consentForm.FilePath);
    }

    await this.consentFormRepository.delete(consentFormID);
  }

  async findOne(consentFormID: number): Promise<ConsentForm> {
    const consentForm = await this.consentFormRepository.findOne({ where: { FormID: consentFormID } });
    if (!consentForm) {
      throw new NotFoundException(`Consent Form with ID ${consentFormID} not found`);
    }
    return consentForm;
  }
}