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
    questionType: "start",
    id: "start",
    text: "Welcome to HealerBuddy therapist onboarding form",
  },

  // Biodata
  {
    questionType: "text",
    text: "Please provide your full name.",
    id: "name",
    validation: {
      type: "text",
      pattern: /^[A-Za-z ]+$/,
      message: "Please enter a valid name (letters and spaces only).",
    },
  },
  {
    questionType: "text",
    id: "dateOfBirth",
    text: "Please enter your date of birth.",
    validation: {
      type: "date",
      message: "Please enter a valid date of birth.",
    },
  },
  {
    questionType: "text",
    id: "age",
    text: "What is your current age?",
    validation: {
      type: "number",
      min: 18,
      message: "You must be at least 18 years old to register.",
    },
  },
  {
    questionType: "dropdown",
    id: "gender",
    text: "Please select your gender:",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "nonbinary", label: "Non-binary" },
      { value: "genderqueer", label: "Genderqueer" },
      { value: "transgender", label: "Transgender" },
      { value: "genderfluid", label: "Genderfluid" },
      { value: "agender", label: "Agender" },
      { value: "other", label: "Other" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your gender.",
    },
  },
  {
    questionType: "dropdown",
    id: "ethnicity",
    text: "Please select your ethnicity (optional):",
    options: [
      { value: "asian", label: "Asian" },
      { value: "black", label: "Black or African American" },
      { value: "hispanic", label: "Hispanic or Latino" },
      { value: "nativeAmerican", label: "Native American or Alaska Native" },
      {
        value: "pacificIslander",
        label: "Native Hawaiian or Other Pacific Islander",
      },
      { value: "white", label: "White" },
      { value: "middleEastern", label: "Middle Eastern" },
      { value: "southAsian", label: "South Asian" },
      { value: "southeastAsian", label: "Southeast Asian" },
      { value: "other", label: "Other" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your ethincity.",
    },
  },
  {
    questionType: "text",
    text: "What is your primary email address we can reach you at?",
    id: "email",
    validation: {
      type: "email",
      message: "Please enter a valid email address.",
    },
  },
  {
    questionType: "text",
    text: "May we have your phone number for convenient communication?",
    id: "phone",
    validation: {
      type: "phone",
      message: "Please enter a valid phone number.",
    },
  },
  {
    questionType: "text",
    text: "Could you share your address of your current residence?",
    id: "address",
    validation: {
      type: "text",
      pattern: /^[A-Za-z0-9\s,.'-]+$/,
      message: "Please enter a valid address.",
    },
  },
  {
    questionType: "dropdown",
    text: "To ensure we address you correctly, what are your preferred pronouns?",
    id: "pronouns",
    options: [
      { value: "sheHer", label: "She/Her" },
      { value: "heHim", label: "He/Him" },
      { value: "theyThem", label: "They/Them" },
      { value: "other", label: "Other" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your preferred pronouns.",
    },
  },
  {
    questionType: "dropdown",
    text: "Please tell us about your highest level of completed education.",
    id: "education",
    options: [
      { value: "highSchool", label: "High School Diploma" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree" },
      { value: "doctorate", label: "Doctorate Degree" },
      { value: "other", label: "Other" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your highest level of education.",
    },
  },
  {
    id: "educationField",
    questionType: "dropdown",
    text: "In which field did you primarily focus your studies?",
    options: [
      { value: "psychology", label: "Psychology" },
      { value: "socialWork", label: "Social Work" },
      { value: "counseling", label: "Counseling" },
      { value: "medicine", label: "Medicine" },
      { value: "other", label: "Other (please specify)" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your area of study.",
    },
  },
  {
    id: "certifications",
    questionType: "dropdown",
    text: "Do you hold any relevant professional certifications or licenses that enhance your expertise?",
    options: [
      { value: "lpc", label: "LPC" },
      { value: "lmft", label: "LMFT" },
      { value: "psyd", label: "PsyD" },
      { value: "lcsw", label: "LCSW" },
      { value: "other", label: "Other (please specify)" },
    ],
    validation: {
      type: "dropdown",
      message: "Please select your relevant certificaition.",
    },
  },
  {
    questionType: "text",
    text: "Have you completed any specialized training or workshops that further refine your therapeutic skills?",
    id: "additionalTraining",
    validation: {
      type: "text",
      message:
        "Please provide a brief description of your additional training or workshops (optional).",
    },
  },

  {
    questionType: "text",
    text: "How many years of valuable experience do you have as a therapist?",
    id: "experience",
    validation: {
      type: "number",
      min: 0,
      message:
        "Please enter a valid number of years of experience (minimum 0).",
    },
  },
  {
    questionType: "multi-select",
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
    validation: {
      type: "multi-select",
      min: 1,
      message: "Please select at least one therapeutic approach.",
    },
  },

  {
    questionType: "multi-select",
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
    validation: {
      type: "multi-select",
      min: 1,
      message: "Please select at least one area of specialization.",
    },
  },

  // Skillset
  {
    id: "expertise",
    questionType: "multi-select",
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
    validation: {
      type: "multi-select",
      min: 1,
      message: "Please select at least one area of expertise.",
    },
  },

  // CRPO Number
  {
    questionType: "text",
    text: "Please provide your CRPO number.",
    id: "crpo",
    validation: {
      type: "regex",
      pattern: /^[A-Z0-9]{6}$/,
      message: "Please enter a valid CRPO number (6 alphanumeric characters).",
    },
  },

  // Availability
  {
    id: "availableDays",
    questionType: "multi-select",
    text: "Which days of the week are you typically available to connect with clients?",
    options: [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
    ],
    validation: {
      type: "multi-select",
      min: 1,
      message: "Please select at least one day of availability.",
    },
  },

  {
    questionType: "text",
    text: "What are your typical hours of availability during the week?",
    id: "hours",
    validation: {
      type: "regex",
      min: 5,
      max: 20,
      message:
        "Please enter valid hours in format HH:MM-HH:MM (optional AM/PM).",
    },
  },

  // Additional Information
  {
    questionType: "text",
    text: "Please briefly describe your therapeutic approach and philosophy in a way that showcases your unique perspective and strengths.(min. 200 words)",
    id: "approachDescription",
    validation: {
      type: "text",
      min: 200,
      max: 500,
      message:
        "Please provide a detailed description of your approach and philosophy (minimum 200 characters, maximum 500 characters).",
    },
  },
  {
    questionType: "file-upload",
    text: "If you have a resume or CV available, feel free to upload it here for our reference (optional).",
    id: "resume",
    validation: {
      type: "text",
      pattern:
        /http(s|):\/\/(www\.)?drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+(\/view)?\?usp=sharing/,
      message:
        "Please provide a valid Google Drive link (starting with https://drive.google.com/file/d/).",
    },
  },

  // Basic Payment Details
  {
    id: "paymentMethod",
    questionType: "dropdown",
    text: "Preferred payment method:",
    options: [
      { value: "creditCard", label: "Credit Card" },
      { value: "debitCard", label: "Debit Card" },
      { value: "paypal", label: "PayPal" },
      { value: "other", label: "Other" },
    ],
  },
  {
    questionType: "text",
    text: "Cardholder name (if applicable):",
    id: "cardholderName",
  },
  { questionType: "text", text: "Card number (if applicable):", id: "card-number" },
  // { type: "review", id: "review", text: "Review your changes" },
  {
    id: "accountCreation",
    questionType: "accountCreation",
    text: "Create your HealerBuddy account",
  },
  {
    questionType: "end",
    id: "end",
    text: "Thank you for completing the form! Please wait as we redirect you to our accoount registration.",
  },
];

export const patientOnboardinguestions: OnboardingFormSections[] = [
  {
    questionType: "start",
    id: "start",
    text: "Welcome to HealerBuddy patient onboarding form",
  },

  // Basic Information
  {
    questionType: "text",
    text: "Please provide your full name.",
    id: "name",
  },
  {
    questionType: "text",
    text: "What is your primary email address we can reach you at?",
    id: "email",
  },
  {
    questionType: "text",
    text: "May we have your phone number for convenient communication?",
    id: "phone",
  },
  {
    questionType: "dropdown",
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
    questionType: "text",
    text: "What is your age?",
    id: "age",
  },

  // Current Concerns
  {
    questionType: "multi-select",
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
    questionType: "multi-select",
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
    questionType: "accountCreation",
    text: "Create your HealerBuddy account",
  },

  // End
  {
    questionType: "end",
    id: "end",
    text: "Thank you for completing the form! We'll be in touch soon to schedule your first appointment.",
  },
];
