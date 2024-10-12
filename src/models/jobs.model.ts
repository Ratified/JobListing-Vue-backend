import mongoose, { Document, Schema, Types } from 'mongoose';

// Define the company interface extending Mongoose's Subdocument
interface Company extends Types.Subdocument {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

// Define the job interface extending Mongoose's Document
export interface Job extends Document {
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string; 
  company: Company;
}

// Defines the company schema
const companySchema = new Schema<Company>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
});

// Defines the job schema
const jobSchema = new Schema<Job>({
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  company: { type: companySchema, required: true },
});

// Creates the Job model
const JobModel = mongoose.model<Job>('Job', jobSchema);

export default JobModel;