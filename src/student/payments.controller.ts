import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PaymentsService } from "./student.service";
import { Payments } from "./student.entity";

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  async getAllPayments(): Promise<Payments[]> {
    return await this.paymentsService.getAllPayments();
  }

  @Post()
  async createPayment(@Body() payment: Payments): Promise<Payments> {
    return await this.paymentsService.createPayment(payment);
  }

  @Put(':id')
  async updatePayment(@Param('id', ParseIntPipe) id: number, @Body() payment: Payments): Promise<Payments> {
    return await this.paymentsService.updatePayment(id, payment);
  }

  @Delete(':id')
  async deletePayment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.paymentsService.deletePayment(id);
  }
}
