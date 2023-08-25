import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerRecord } from "../utils/types";
import Marker from "./Marker";

type Props = {
  center: LatLngTuple;
  zoom: number;
  markers: MarkerRecord[];
};

const Map = ({ center, zoom, markers }: Props) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker: MarkerRecord, index) => {
        return <Marker markerDetails={marker} key={index} />;
      })}
    </MapContainer>
  );
};

export default Map;
