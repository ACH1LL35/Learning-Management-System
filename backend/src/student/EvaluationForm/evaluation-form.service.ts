import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluationForm } from './evaluation-form.entity';
import { EvaluationFormDto } from './evaluation-form.dto';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';

@Injectable()
export class EvaluationFormService {
  constructor(
    @InjectRepository(EvaluationForm)
    private readonly evaluationFormRepository: Repository<EvaluationForm>,
  ) {}

  async create(evaluationFormDto: EvaluationFormDto, file: Express.Multer.File): Promise<EvaluationForm> {
    const { FormName, Description, FormDate, EvaluatedBy } = evaluationFormDto;

    const uploadPath = './uploads/evaluation-forms/';
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

    const evaluationForm = this.evaluationFormRepository.create({
      FormName,
      Description,
      FormDate,
      EvaluatedBy,
      FilePath: filePath,
    });

    return this.evaluationFormRepository.save(evaluationForm);
  }

  async delete(evaluationFormID: number): Promise<void> {
    const evaluationForm = await this.evaluationFormRepository.findOne({ where: { FormID: evaluationFormID } });
    if (!evaluationForm) {
      throw new NotFoundException(`Evaluation Form with ID ${evaluationFormID} not found`);
    }

    if (evaluationForm.FilePath) {
      fs.unlinkSync(evaluationForm.FilePath);
    }

    await this.evaluationFormRepository.delete(evaluationFormID);
  }

  async findOne(evaluationFormID: number): Promise<EvaluationForm> {
    const evaluationForm = await this.evaluationFormRepository.findOne({ where: { FormID: evaluationFormID } });
    if (!evaluationForm) {
      throw new NotFoundException(`Evaluation Form with ID ${evaluationFormID} not found`);
    }
    return evaluationForm;
  }
}
