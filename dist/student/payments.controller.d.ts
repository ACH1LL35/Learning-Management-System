import { PaymentsService } from "./student.service";
import { Payments } from "./student.entity";
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    getAllPayments(): Promise<Payments[]>;
    createPayment(payment: Payments): Promise<Payments>;
    updatePayment(id: number, payment: Payments): Promise<Payments>;
    deletePayment(id: number): Promise<void>;
}
