import { Marker as Mark, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { MarkerRecord } from "../utils/types";

type Props = {
  markerDetails: MarkerRecord;
};

const Marker = ({
  markerDetails: { country, cases, recovered, deaths, position },
}: Props) => {
  const marker = new Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [25, 25],
  });
  return (
    <Mark position={position} icon={marker}>
      <Popup>
        <div className="bg-white text-xs">
          <h2 className="uppercase font-semibold">{country}</h2>
          <p>Total Cases: {cases}</p>
          <p>Total Deaths: {deaths}</p>
          <p>Total Recovered: {recovered}</p>
        </div>
      </Popup>
    </Mark>
  );
};

export default Marker;
