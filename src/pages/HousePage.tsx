import { useEffect, useState } from "react";
import IHouse from "../interfaces/IHouse";
import { getEquipments, getHouse } from "../services/api";
import IEquipment from "../interfaces/IEquipment";
import Loading from "../components/Loading";

import "./HousePage.scss";
import Equipment from "../components/Equipment";

export function HousePage() {
  const [house, setHouse] = useState<IHouse | undefined>();
  const [equipments, setEquipments] = useState<IEquipment[] | undefined>();

  useEffect(() => {
    getHouse().then(setHouse);
  }, []);

  useEffect(() => {
    if (house === undefined) {
      setEquipments(undefined);
      return;
    }

    getEquipments().then(setEquipments);
  }, [house]);

  return (house === undefined || equipments === undefined) ? <Loading /> : (
    <div className="housePage">
      <div className="housePage__info">
        Mon addresse : {house.adress} {house.cp} {house.ville}
      </div>
      <div className="housePage__equiments">
        <Equipment />
      </div>
    </div>
  );
}