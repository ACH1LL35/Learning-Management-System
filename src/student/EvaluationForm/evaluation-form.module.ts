import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationFormService } from './evaluation-form.service';
import { EvaluationFormController } from './evaluation-form.controller';
import { EvaluationForm } from './evaluation-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationForm])],
  controllers: [EvaluationFormController],
  providers: [EvaluationFormService],
})
export class EvaluationFormModule {}
