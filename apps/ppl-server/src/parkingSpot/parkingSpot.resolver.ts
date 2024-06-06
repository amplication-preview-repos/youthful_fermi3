import * as graphql from "@nestjs/graphql";
import { ParkingSpotResolverBase } from "./base/parkingSpot.resolver.base";
import { ParkingSpot } from "./base/ParkingSpot";
import { ParkingSpotService } from "./parkingSpot.service";

@graphql.Resolver(() => ParkingSpot)
export class ParkingSpotResolver extends ParkingSpotResolverBase {
  constructor(protected readonly service: ParkingSpotService) {
    super(service);
  }
}
