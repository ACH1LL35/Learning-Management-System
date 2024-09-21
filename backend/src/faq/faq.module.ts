import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FAQ } from './faq.entity';
import { FAQService } from './faq.service';
import { FAQController } from './faq.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FAQ])],
  providers: [FAQService],
  controllers: [FAQController],
})
export class FAQModule {}
