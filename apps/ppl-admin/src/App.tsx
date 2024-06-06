import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { ParkingLotList } from "./parkingLot/ParkingLotList";
import { ParkingLotCreate } from "./parkingLot/ParkingLotCreate";
import { ParkingLotEdit } from "./parkingLot/ParkingLotEdit";
import { ParkingLotShow } from "./parkingLot/ParkingLotShow";
import { ParkingSpotList } from "./parkingSpot/ParkingSpotList";
import { ParkingSpotCreate } from "./parkingSpot/ParkingSpotCreate";
import { ParkingSpotEdit } from "./parkingSpot/ParkingSpotEdit";
import { ParkingSpotShow } from "./parkingSpot/ParkingSpotShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PPL"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="ParkingLot"
          list={ParkingLotList}
          edit={ParkingLotEdit}
          create={ParkingLotCreate}
          show={ParkingLotShow}
        />
        <Resource
          name="ParkingSpot"
          list={ParkingSpotList}
          edit={ParkingSpotEdit}
          create={ParkingSpotCreate}
          show={ParkingSpotShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
