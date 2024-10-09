import { Request, Response } from 'express';
import JobModel, { Job } from '../models/jobs.model';

// Create a new job listing (already done)
export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const newJob: Job = new JobModel(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: 'Error creating job listing', error });
  }
};

// Get all job listings (already done)
export const getAllJobs = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job listings', error });
  }
};

// Get a single job listing by ID
export const getJobById = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await JobModel.findById(req.params.id);
    if (!job) {
      res.status(404).json({ message: 'Job not found' });
      return;
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job listing', error });
  }
};

// Update a job listing by ID
export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) {
      res.status(404).json({ message: 'Job not found' });
      return;
    }
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job listing', error });
  }
};

// Delete a job listing by ID
export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedJob = await JobModel.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      res.status(404).json({ message: 'Job not found' });
      return;
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job listing', error });
  }
};