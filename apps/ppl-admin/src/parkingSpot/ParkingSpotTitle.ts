import { ParkingSpot as TParkingSpot } from "../api/parkingSpot/ParkingSpot";

export const PARKINGSPOT_TITLE_FIELD = "id";

export const ParkingSpotTitle = (record: TParkingSpot): string => {
  return record.id?.toString() || String(record.id);
};
