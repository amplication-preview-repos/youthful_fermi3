import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "../payment/CreatePaymentDto";
import { PaymentSuccessDto } from "../payment/PaymentSuccessDto";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Get("/:id/confirm-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfirmPayment(
    @common.Body()
    body: CreatePaymentDto
  ): Promise<string> {
        return this.service.ConfirmPayment(body);
      }

  @common.Post("/confirm-payment")
  @swagger.ApiOkResponse({
    type: PaymentSuccessDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfirmStripePayment(
    @common.Body()
    body: CreatePaymentDto
  ): Promise<PaymentSuccessDto> {
        return this.service.ConfirmStripePayment(body);
      }

  @common.Get("/:id/create-payment-intent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePaymentIntent(
    @common.Body()
    body: CreatePaymentDto
  ): Promise<string> {
        return this.service.CreatePaymentIntent(body);
      }

  @common.Post("/initialize-payment")
  @swagger.ApiOkResponse({
    type: PaymentSuccessDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitializeStripePayment(
    @common.Body()
    body: CreatePaymentDto
  ): Promise<PaymentSuccessDto> {
        return this.service.InitializeStripePayment(body);
      }
}
