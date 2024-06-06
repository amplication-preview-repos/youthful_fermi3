import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParkingSpotService } from "./parkingSpot.service";
import { ParkingSpotControllerBase } from "./base/parkingSpot.controller.base";

@swagger.ApiTags("parkingSpots")
@common.Controller("parkingSpots")
export class ParkingSpotController extends ParkingSpotControllerBase {
  constructor(protected readonly service: ParkingSpotService) {
    super(service);
  }
}
