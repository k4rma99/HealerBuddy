import { StaticImageData } from "next/image";

export interface ItemProps {
  docInfo: DoctorDataModel;
}

export interface UserModalProps {
  isOpen: boolean;
  handleClose: () => void;
  userData: DoctorDataModel;
}

export interface DoctorDataModel {
  docId: string;
  profileImage: string | StaticImageData;
  name: string;
  age: number;
  specialities: Array<number>;
  languages: Array<number>;
  targetGroups: Array<number>;
  locations: Array<number>;
  contentMessage: string;
  profilePath: string;
  videoMessage: string;
}

export interface OnboardingFormSections {
  id: string;
  questionType:
    | "text"
    | "dropdown"
    | "multi-select"
    | "boolean"
    | "file-upload"
    | "start"
    | "end"
    | "accountCreation"
    | "review";
  text: string;
  options?: OnboardingFormOptions[];
  maxRating?: number;
  conditional?: OnboardingFormConditionaluestion;
  validation?: OnboardingFormValidation;
}

export interface OnboardingFormValidation {
  type: string;
  pattern?: any;
  min?: number;
  max?: number;
  message: string;
}

export interface OnboardingFormOptions {
  value: string;
  label: string;
}

export interface OnboardingFormConditionaluestion {
  questionId: string;
  answerValue: string;
}
