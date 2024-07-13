import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './contentApproval.entity';
import { ContentApprovalService } from './contentApproval.service';
import { ContentApprovalController } from './contentApproval.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  providers: [ContentApprovalService],
  controllers: [ContentApprovalController],
})
export class ContentApprovalModule {}
