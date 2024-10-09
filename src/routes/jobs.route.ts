import { Router } from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob } from '../controllers/jobs.controller';

const router = Router();

// Create a new job
router.post('/', createJob);

// Get all jobs
router.get('/', getAllJobs);

// Get a job by ID
router.get('/:id', getJobById);

// Update a job by ID
router.put('/:id', updateJob);

// Delete a job by ID
router.delete('/:id', deleteJob);

export const jobRoutes = router;