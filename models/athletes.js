import mongoose from 'mongoose';

const medicalIncidentsSchema = new mongoose.Schema({
  medicDetails: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: true,
  },

  medicalIncident: {
    type: String,
    required: true,
  },
  descriptionOfIncident: {
    type: String,
    required: true,
  },
  medicalTreatment: {
    type: String,
    required: true,
  },
  counterIndications: {
    type: String,
    required: true,
  },
  barredFromHeavyExercise: {
    type: Boolean,
  },
  barredFromLightExercise: {
    type: Boolean,
  },
  durationOfBarFromExceriseDays: {
    type: Number,
  },
});

const athleteSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    profilePhotoUrl: { type: String },
    yearStartedCycling: { type: Number, required: true },
    previousSportingExperience: { type: String, required: true },
    injury: { type: String, required: true },
    biography: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    employmentStatus: { type: String, required: true },
    applicationStatus: { type: String, required: true },
    medicalIncidents: [medicalIncidentsSchema],
    attendance: [{ type: mongoose.Types.ObjectId, ref: 'Sessions' }],
    dateAccepted: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('Athletes', athleteSchema);
