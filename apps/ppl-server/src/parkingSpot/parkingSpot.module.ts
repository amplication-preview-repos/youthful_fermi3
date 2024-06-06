import { Module } from "@nestjs/common";
import { ParkingSpotModuleBase } from "./base/parkingSpot.module.base";
import { ParkingSpotService } from "./parkingSpot.service";
import { ParkingSpotController } from "./parkingSpot.controller";
import { ParkingSpotResolver } from "./parkingSpot.resolver";

@Module({
  imports: [ParkingSpotModuleBase],
  controllers: [ParkingSpotController],
  providers: [ParkingSpotService, ParkingSpotResolver],
  exports: [ParkingSpotService],
})
export class ParkingSpotModule {}
