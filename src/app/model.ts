import { StaticImageData } from "next/image";

export interface ItemProps {
  docInfo: DoctorDataModel;
}

export interface UserModalProps {
  isOpen: boolean;
  handleClose: () => void;
  userData: DoctorDataModel
}

export interface DoctorDataModel {
  docId: string;
  profileImage: string | StaticImageData;
  name: string;
  age: number;
  specialities: Array<number>;
  languages: Array<number>;
  targetGroups: Array<number>;
  locations: Array<number>
  contentMessage: string;
  profilePath: string;
  videoMessage: string;
}