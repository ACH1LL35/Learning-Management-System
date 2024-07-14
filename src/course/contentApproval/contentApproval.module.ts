import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentApproval } from './contentApproval.entity';
import { ContentApprovalService } from './contentApproval.service';
import { ContentApprovalController } from './contentApproval.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContentApproval])],
  providers: [ContentApprovalService],
  controllers: [ContentApprovalController],
})
export class ContentApprovalModule {}
