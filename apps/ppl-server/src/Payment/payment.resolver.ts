import * as graphql from "@nestjs/graphql";
import { PaymentSuccessDto } from "../payment/PaymentSuccessDto";
import { CreatePaymentDto } from "../payment/CreatePaymentDto";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Query(() => String)
  async ConfirmPayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConfirmPayment(args);
  }

  @graphql.Mutation(() => PaymentSuccessDto)
  async ConfirmStripePayment(
    @graphql.Args()
    args: string
  ): Promise<PaymentSuccessDto> {
    return this.service.ConfirmStripePayment(args);
  }

  @graphql.Query(() => String)
  async CreatePaymentIntent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePaymentIntent(args);
  }

  @graphql.Mutation(() => PaymentSuccessDto)
  async InitializeStripePayment(
    @graphql.Args()
    args: CreatePaymentDto
  ): Promise<PaymentSuccessDto> {
    return this.service.InitializeStripePayment(args);
  }
}
