import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportingService } from './report.service';
import { ReportingController } from './report.controller';
import { Reporting } from './report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reporting])],
  controllers: [ReportingController],
  providers: [ReportingService],
})
export class ReportingModule {}
