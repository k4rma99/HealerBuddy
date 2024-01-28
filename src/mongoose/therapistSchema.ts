import mongoose, { Schema } from "mongoose";

const therapistDataSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: [
      "male",
      "female",
      "transgender",
      "genderfluid",
      "nonBinary",
      "genderqueer",
      "agender",
      "genderNonConforming",
      "preferNotToDisclose",
    ],
  },
  preferredPronouns: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  age: {
    type: Number, // Calculated based on dateOfBirth
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  crpoRegNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  qualifications: {
    type: [String],
    default: [],
  },
  specialties: {
    type: [String],
    default: [],
  },
  experience: {
    type: Number,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  availability: {
    type: Object, // Define a flexible structure for representing availability
    default: {},
  },
  lastPaymentId: {
    type: String,
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  biography: {
    type: String,
  },
  profilePhoto: {
    type: String, // Assuming a URL for profile photo storage
  },
  videoMessage: {
    type: String, // Assuming a URL for the video message
  },
  messageForPatients: {
    type: String,
  },
  reviews: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      reviewText: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  reviewScore: {
    type: Number,
    default: 0, // Calculate based on reviews
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Mongoose model
export default mongoose.models.ProviderInformation ||
  mongoose.model("ProviderInformation", therapistDataSchema);
