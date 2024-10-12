"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.getAllJobs = exports.createJob = void 0;
const jobs_model_1 = __importDefault(require("../models/jobs.model"));
// Create a new job listing (already done)
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newJob = new jobs_model_1.default(req.body);
        yield newJob.save();
        res.status(201).json(newJob);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating job listing', error });
    }
});
exports.createJob = createJob;
// Get all job listings (already done)
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield jobs_model_1.default.find();
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching job listings', error });
    }
});
exports.getAllJobs = getAllJobs;
// Get a single job listing by ID
const getJobById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield jobs_model_1.default.findById(req.params.id);
        if (!job) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }
        res.json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching job listing', error });
    }
});
exports.getJobById = getJobById;
// Update a job listing by ID
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedJob = yield jobs_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedJob) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }
        res.json(updatedJob);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating job listing', error });
    }
});
exports.updateJob = updateJob;
// Delete a job listing by ID
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedJob = yield jobs_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }
        res.json({ message: 'Job deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting job listing', error });
    }
});
exports.deleteJob = deleteJob;
