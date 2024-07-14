import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsentFormService } from './consent-form.service';
import { ConsentFormController } from './consent-form.controller';
import { ConsentForm } from './consent-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsentForm])],
  controllers: [ConsentFormController],
  providers: [ConsentFormService],
})
export class ConsentFormModule {}
