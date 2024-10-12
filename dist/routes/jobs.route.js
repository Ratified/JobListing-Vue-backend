"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRoutes = void 0;
const express_1 = require("express");
const jobs_controller_1 = require("../controllers/jobs.controller");
const router = (0, express_1.Router)();
// Create a new job
router.post('/', jobs_controller_1.createJob);
// Get all jobs
router.get('/', jobs_controller_1.getAllJobs);
// Get a job by ID
router.get('/:id', jobs_controller_1.getJobById);
// Update a job by ID
router.put('/:id', jobs_controller_1.updateJob);
// Delete a job by ID
router.delete('/:id', jobs_controller_1.deleteJob);
exports.jobRoutes = router;
