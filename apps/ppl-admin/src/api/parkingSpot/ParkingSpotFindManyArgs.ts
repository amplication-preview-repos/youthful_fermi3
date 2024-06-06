import { ParkingSpotWhereInput } from "./ParkingSpotWhereInput";
import { ParkingSpotOrderByInput } from "./ParkingSpotOrderByInput";

export type ParkingSpotFindManyArgs = {
  where?: ParkingSpotWhereInput;
  orderBy?: Array<ParkingSpotOrderByInput>;
  skip?: number;
  take?: number;
};
