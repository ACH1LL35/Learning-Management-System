import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsentForm } from './consent-form.entity';
import { ConsentFormController } from './consent-form.controller';
import { ConsentFormService } from './consent-form.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConsentForm])],
  controllers: [ConsentFormController],
  providers: [ConsentFormService],
})
export class ConsentFormModule {}
