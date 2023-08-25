import { LatLngTuple } from "leaflet";
export type ContactRecord = {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
};

export type ModalContent = {
  title: string;
  actionOneText: string;
  handleActionOne: (content: ContactRecord) => void;
  actionTwoText: string;
  handleActionTwo: () => void;
  onCancel: () => void;
  contactDetails?: ContactRecord;
};

export type MarkerRecord = {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  position: LatLngTuple;
};
