import mongoose, { Document, Schema } from 'mongoose';

// Define the company interface
interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

// Define the job interface
export interface Job extends Document {
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string; 
  company: Company;
}

// Defines the company schema
const companySchema: Schema<Company> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
});

// Defines the job schema
const jobSchema: Schema<Job> = new Schema({
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
