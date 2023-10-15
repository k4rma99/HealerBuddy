// Filter Data
import { StaticImageData } from "next/image";

import headerGear from "@/assets/icons/head-gear.svg";

export const cities = [
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Winnipeg",
  "Quebec City",
  "Hamilton",
  "London",
  "Halifax",
  "Victoria",
  "Regina",
  "Saskatoon",
  "St. John's",
  "Charlottetown",
  "Yellowknife",
  "Whitehorse",
  "Iqaluit",
];

export const targetGroups = [
  "Young children (0-4)",
  "Children (5-12) ",
  "Teen (13-17) ",
  "Young adults (18-24) ",
  "Adults (25-64) ",
  "Seniors (65+) ",
];

export const genderGroups = [
  "Male",
  "Female",
  "Cisgender",
  "Transgender",
  "Non-Binary",
  "Genderqueer",
  "Genderfluid",
  "Agender",
  "Bigender",
];

export const langs = [
  "English",
  "French",
  "Spanish",
  "Arabic",
  "Chinese (Mandarin)",
  "Punjabi",
  "Tagalog",
  "Italian",
  "German",
  "Portuguese",
  "Urdu",
  "Tamil",
];

export const splts = [
  "Depression",
  "Anxiety",
  "Bipolar Disorder",
  "Schizophrenia",
  "Post-Traumatic Stress Disorder (PTSD)",
  "Obsessive-Compulsive Disorder (OCD)",
  "Eating Disorders",
  "Borderline Personality Disorder",
  "Attention-Deficit/Hyperactivity Disorder (ADHD)",
  "Autism Spectrum Disorder",
  "Substance Use Disorders",
  "Self-Harm",
  "Suicidal Thoughts",
  "Dissociative Disorders",
  "Personality Disorders",
  "Panic Disorder",
  "Generalized Anxiety Disorder",
  "Social Anxiety Disorder",
  "Specific Phobias",
];

export const sltData: {
  [id: string]: { name: string; icon: string | StaticImageData };
} = {
  adhd: {
    name: "ADHD",
    icon: headerGear,
  },
  depes: {
    name: "Depression",
    icon: headerGear,
  },
  anxit: {
    name: "Anxiety",
    icon: headerGear,
  },

  stress: {
    name: "Stress",
    icon: headerGear,
  },

  bdd: {
    name: "BDD",
    icon: headerGear,
  },
};

export const GenderGroups: {
  [id: number]: string;
} = {
  1: "Male",
  2: "Female",
  3: "Cisgender",
  4: "Transgender",
  5: "Non-Binary",
  6: "Genderqueer",
  7: "Genderfluid",
  8: "Agender",
  9: "Bigender",
};

export const TargetAgeGroups: {
  [id: number]: string;
} = {
  1: "Young children (0-4)",
  2: "Children (5-12)",
  3: "Teen (13-17)",
  4: "Young adults (18-24)",
  5: "Adults (25-64)",
  6: "Seniors (65+)",
};

export const Langauges: {
  [id: number]: string;
} = {
  1: "English",
  2: "French",
  3: "Spanish",
  4: "Arabic",
  5: "Chinese (Mandarin)",
  6: "Punjabi",
  7: "Tagalog",
  8: "Italian",
  9: "German",
  10: "Portuguese",
  11: "Urdu",
  12: "Tamil",
};

export const SpecialitiesGroups: {
  [id: number]: string;
} = {
  1: "Depression",
  2: "Anxiety",
  3: "Bipolar Disorder",
  4: "Schizophrenia",
  5: "Post-Traumatic Stress Disorder (PTSD)",
  6: "Obsessive-Compulsive Disorder (OCD)",
  7: "Eating Disorders",
  8: "Borderline Personality Disorder",
  9: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
  10: "Autism Spectrum Disorder",
  11: "Substance Use Disorders",
  12: "Self-Harm",
  13: "Suicidal Thoughts",
  14: "Dissociative Disorders",
  15: "Personality Disorders",
  16: "Panic Disorder",
  17: "Generalized Anxiety Disorder",
  18: "Social Anxiety Disorder",
  19: "Specific Phobias",
};

export const CitiesGroups: {
  [id: number]: string;
} = {
  1: "Toronto",
  2: "Montreal",
  3: "Vancouver",
  4: "Calgary",
  5: "Edmonton",
  6: "Ottawa",
  7: "Winnipeg",
  8: "Quebec City",
  9: "Hamilton",
  10: "London",
  11: "Halifax",
  12: "Victoria",
  13: "Regina",
  14: "Saskatoon",
  15: "St. John's",
  16: "Charlottetown",
  17: "Yellowknife",
  18: "Whitehorse",
  19: "Iqaluit",
};

export const FilterCategory: {
  [id: number]: { labelname: string; filterValue: string; data: Array<string> };
} = {
  1: {
    labelname: "Gender",
    filterValue: "",
    data: Object.values(GenderGroups),
  },
  2: {
    labelname: "Language",
    filterValue: "",
    data: Object.values(Langauges),
  },
  3: {
    labelname: "Specialities",
    filterValue: "",
    data: Object.values(SpecialitiesGroups),
  },
  4: {
    labelname: "Location",
    filterValue: "",
    data: Object.values(CitiesGroups),
  },
  5: {
    labelname: "Target Age Groups",
    filterValue: "",
    data: Object.values(TargetAgeGroups),
  },
};
