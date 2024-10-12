"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const jobs_route_1 = require("./routes/jobs.route");
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Use job routes
app.use('/api/jobs', jobs_route_1.jobRoutes);
// MongoDB connection
mongoose_1.default.connect('mongodb+srv://George:n7iQtpHpEPygGr6A@backenddb.bwofx.mongodb.net/jobs?retryWrites=true&w=majority&tls=true')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
