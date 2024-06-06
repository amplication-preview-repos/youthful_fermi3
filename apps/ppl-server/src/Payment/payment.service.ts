import { Injectable } from "@nestjs/common";
import { PaymentSuccessDto } from "../payment/PaymentSuccessDto";
import { CreatePaymentDto } from "../payment/CreatePaymentDto";

@Injectable()
export class PaymentService {
  constructor() {}
  async ConfirmPayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ConfirmStripePayment(args: string): Promise<PaymentSuccessDto> {
    throw new Error("Not implemented");
  }
  async CreatePaymentIntent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitializeStripePayment(args: CreatePaymentDto): Promise<PaymentSuccessDto> {
    throw new Error("Not implemented");
  }
}
