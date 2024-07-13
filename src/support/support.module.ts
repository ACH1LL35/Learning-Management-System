// support.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Support } from './support.entity';
import { SupportService } from './support.service';
import { SupportController } from './support.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Support]), UserModule],
  providers: [SupportService],
  controllers: [SupportController],
})
export class SupportModule {}
