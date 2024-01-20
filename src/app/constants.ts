// Filter Data
import { StaticImageData } from "next/image";
import { OnboardingFormSections } from "./model";

import headerGear from "@/assets/icons/head-gear.svg";

import hero1 from "@/assets/images/front-page-1.webp";
import hero2 from "@/assets/images/front-page-2.webp";
import hero4 from "@/assets/images/front-page-4.webp";
import hero5 from "@/assets/images/front-page-5.webp";
import hero6 from "@/assets/images/front-page-6.webp";
import hero7 from "@/assets/images/front-page-7.webp";
import hero8 from "@/assets/images/front-page-8.webp";
import hero9 from "@/assets/images/front-page-9.webp";
import hero10 from "@/assets/images/front-page-10.webp";
import hero11 from "@/assets/images/front-page-11.webp";

import dashboardIcon from "@/assets/icons/dashboard.svg";

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

export const HeroImages: { [id: number]: StaticImageData } = {
  1: hero1,
  2: hero2,
  3: hero2,
  4: hero4,
  5: hero5,
  6: hero6,
  7: hero7,
  8: hero8,
  9: hero9,
  10: hero10,
  11: hero11,
};

export const menuItems: any = [
  {
    name: "Dashboard",
    icon: dashboardIcon,
    containerClass: "dashboard",
  },
];

export const doctorOnBoardingQuestions: OnboardingFormSections[] = [
  {
    type: "start",
    id: "start",
    text: "Welcome to HealerBuddy therapist onboarding form",
  },
  {
    type: "text",
    text: "Please provide your full name.",
    id: "name",
  },
  {
    type: "text",
    text: "What is your primary email address we can reach you at?",
    id: "email",
  },
  {
    type: "text",
    text: "May we have your phone number for convenient communication?",
    id: "phone",
  },
  {
    type: "text",
    text: "Could you share your address of your current residence?",
    id: "address",
  },
  {
    type: "dropdown",
    text: "To ensure we address you correctly, what are your preferred pronouns?",
    id: "pronouns",
    options: [
      { value: "sheHer", label: "She/Her" },
      { value: "heHim", label: "He/Him" },
      { value: "theyThem", label: "They/Them" },
      { value: "other", label: "Other" },
    ],
  },
  {
    type: "dropdown",
    text: "Please tell us about your highest level of completed education.",
    id: "education",
    options: [
      { value: "highSchool", label: "High School Diploma" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree" },
      { value: "doctorate", label: "Doctorate Degree" },
      { value: "other", label: "Other" }, // Optional: include an "Other" option
    ],
  },
  {
    id: "educationField",
    type: "dropdown",
    text: "In which field did you primarily focus your studies?",
    options: [
      { value: "psychology", label: "Psychology" },
      { value: "socialWork", label: "Social Work" },
      { value: "counseling", label: "Counseling" },
      { value: "medicine", label: "Medicine" },
      { value: "other", label: "Other (please specify)" },
    ],
  },
  {
    id: "certifications",
    type: "dropdown",
    text: "Do you hold any relevant professional certifications or licenses that enhance your expertise?",
    options: [
      { value: "lpc", label: "LPC" },
      { value: "lmft", label: "LMFT" },
      { value: "psyd", label: "PsyD" },
      { value: "lcsw", label: "LCSW" },
      { value: "other", label: "Other (please specify)" },
    ],
  },
  {
    type: "text",
    text: "Have you completed any specialized training or workshops that further refine your therapeutic skills?",
    id: "additionalTraining",
  },
  {
    type: "text",
    text: "How many years of valuable experience do you have as a therapist?",
    id: "experience",
  },
  {
    type: "multi-select",
    text: "Which therapeutic approaches do you typically incorporate into your practice?",
    id: "approaches",
    options: [
      { value: "cbt", label: "CBT" },
      { value: "dbt", label: "DBT" },
      { value: "psychodynamic", label: "Psychodynamic" },
      { value: "existential", label: "Existential" },
      { value: "humanistic", label: "Humanistic" },
      { value: "other", label: "Other (please specify)" },
    ],
  },
  {
    type: "multi-select",
    text: "What are your primary areas of specialization where you excel?",
    id: "specialties",
    options: [
      { value: "anxiety", label: "Anxiety" },
      { value: "depression", label: "Depression" },
      { value: "trauma", label: "Trauma" },
      { value: "relationshipIssues", label: "Relationship Issues" },
      { value: "addiction", label: "Addiction" },
      { value: "griefAndLoss", label: "Grief and Loss" },
      { value: "ptsd", label: "PTSD" },
      { value: "ocd", label: "OCD" },
      { value: "eatingDisorders", label: "Eating Disorders" },
      { value: "angerManagement", label: "Anger Management" },
      { value: "lifeTransitions", label: "Life Transitions" },
      { value: "other", label: "Other" },
    ],
  },

  // Skillset
  {
    id: "expertise",
    type: "multi-select",
    text: "In which areas of expertise do you feel confident and accomplished?",
    options: [
      { value: "individual", label: "Individual Therapy" },
      { value: "couples", label: "Couples Therapy" },
      { value: "family", label: "Family Therapy" },
      { value: "group", label: "Group Therapy" },
      { value: "assessment", label: "Assessment and Diagnosis" },
      { value: "treatment", label: "Treatment Planning" },
      { value: "crisis", label: "Crisis Intervention" },
    ],
  },

  // // Past Records
  // {
  //   type: "boolean",
  //   text: "To ensure transparency, have you ever been the subject of disciplinary action or complaint related to your professional practice?",
  //   id: "disciplinary",
  // },
  // {
  //   type: "text",
  //   text: "If yes, please provide details to ensure full clarity.",
  //   id: "disciplinary-details",
  //   conditional: { questionId: "disciplinary", answerValue: "yes" },
  // },

  // CRPO Number
  { type: "text", text: "Please provide your CRPO number.", id: "crpo" },

  // Availability
  {
    id: "availableDays",
    type: "multi-select",
    text: "Which days of the week are you typically available to connect with clients?",
    options: [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
    ],
  },
  {
    type: "text",
    text: "What are your typical hours of availability during the week?",
    id: "hours",
  },

  // Additional Information
  {
    type: "text",
    text: "Please briefly describe your therapeutic approach and philosophy in a way that showcases your unique perspective and strengths.",
    id: "approachDescription",
  },
  {
    type: "file-upload",
    text: "If you have a resume or CV available, feel free to upload it here for our reference (optional).",
    id: "resume",
  },

  // Basic Payment Details
  {
    id: "paymentMethod",
    type: "dropdown",
    text: "Preferred payment method:",
    options: [
      { value: "creditCard", label: "Credit Card" },
      { value: "debitCard", label: "Debit Card" },
      { value: "paypal", label: "PayPal" },
      { value: "other", label: "Other" },
    ],
  },
  {
    type: "text",
    text: "Cardholder name (if applicable):",
    id: "cardholderName",
  },
  { type: "text", text: "Card number (if applicable):", id: "card-number" },
  // { type: "review", id: "review", text: "Review your changes" },
  {
    id: "accountCreation",
    type: "accountCreation",
    text: "Create your HealerBuddy account",
  },
  {
    type: "end",
    id: "end",
    text: "Thank you for completing the form! Please wait as we redirect you to our accoount registration.",
  },
];

export const patientOnboardinguestions: OnboardingFormSections[] = [
  {
    type: "start",
    id: "start",
    text: "Welcome to HealerBuddy patient onboarding form",
  },

  // Basic Information
  {
    type: "text",
    text: "Please provide your full name.",
    id: "name",
  },
  {
    type: "text",
    text: "What is your primary email address we can reach you at?",
    id: "email",
  },
  {
    type: "text",
    text: "May we have your phone number for convenient communication?",
    id: "phone",
  },
  {
    type: "dropdown",
    text: "To ensure we address you correctly, what are your preferred pronouns?",
    id: "pronouns",
    options: [
      { value: "sheHer", label: "She/Her" },
      { value: "heHim", label: "He/Him" },
      { value: "theyThem", label: "They/Them" },
      { value: "zeHir", label: "Ze/Hir" },
      { value: "faeFaer", label: "Fae/Faer" },
      { value: "xeXem", label: "Xe/Xem" },
      { value: "perThey", label: "Per/They" },
      { value: "singularThey", label: "Singular They" },
      { value: "other", label: "Other" },
    ],
  },
  {
    type: "text",
    text: "What is your age?",
    id: "age",
  },

  // Current Concerns
  {
    type: "multi-select",
    text: "Please select the main concerns or challenges that have brought you here today:",
    id: "concerns",
    options: [
      { value: "anxiety", label: "Anxiety" },
      { value: "depression", label: "Depression" },
      { value: "stress", label: "Stress" },
      { value: "relationship-issues", label: "Relationship Issues" },
      { value: "trauma", label: "Trauma" },
      { value: "grief", label: "Grief" },
      { value: "low-self-esteem", label: "Low Self-Esteem" },
      { value: "other", label: "Other" },
    ],
  },
  {
    type: "multi-select",
    text: "Please select any of the following symptoms or experiences that apply to you:",
    id: "symptoms",
    options: [
      { value: "trouble-sleeping", label: "Trouble Sleeping" },
      { value: "fatigue", label: "Fatigue" },
      { value: "difficulty-concentrating", label: "Difficulty Concentrating" },
      { value: "irritability", label: "Irritability" },
      { value: "loss-of-appetite", label: "Loss of Appetite" },
      { value: "overeating", label: "Overeating" },
      { value: "social-withdrawal", label: "Social Withdrawal" },
      { value: "sadness", label: "Sadness" },
      { value: "hopelessness", label: "Hopelessness" },
      { value: "worry", label: "Worry" },
      { value: "panic-attacks", label: "Panic Attacks" },
      { value: "intrusive-thoughts", label: "Intrusive Thoughts" },
      { value: "other", label: "Other" },
    ],
  },

  // Past Treatment History
  // ... (remaining questions can be kept as previously provided)

  // Account Creation
  {
    id: "accountCreation",
    type: "accountCreation",
    text: "Create your HealerBuddy account",
  },

  // End
  {
    type: "end",
    id: "end",
    text: "Thank you for completing the form! We'll be in touch soon to schedule your first appointment.",
  },
];
