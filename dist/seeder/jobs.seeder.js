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
const mongoose_1 = __importDefault(require("mongoose"));
const jobs_model_1 = __importDefault(require("../models/jobs.model"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    throw new Error("MongoDB URL is missing. Please check your environment variables.");
}
// MongoDB connection
mongoose_1.default
    .connect(MONGO_URL)
    .then(() => console.log("Connected to MongoDB Atlas for seeding"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
// Seed data
const jobSeedData = [
    {
        title: "Senior Vue Dev",
        type: "Full-Time",
        location: "Boston, MA",
        description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
        salary: "$90K - $100K",
        company: {
            name: "NewTek Solutions",
            description: "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
            contactEmail: "contact@teksolutions.com",
            contactPhone: "555-555-5555",
        },
    },
    {
        title: "Front-End Engineer (Vue)",
        type: "Full-Time",
        description: "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
        location: "Miami, FL",
        salary: "$70K - $80K",
        company: {
            name: "Veneer Solutions",
            description: "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
            contactEmail: "contact@loremipsum.com",
            contactPhone: "555-555-5555",
        },
    },
    {
        id: "3",
        title: "Vue.js Developer",
        type: "Full-Time",
        description: "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
        location: "Brooklyn, NY",
        salary: "$70K - $80K",
        company: {
            name: "Dolor Cloud",
            description: "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
            contactEmail: "contact@dolorsitamet.com",
            contactPhone: "555-555-5555",
        },
    },
    {
        id: "4",
        title: "Vue Front-End Developer",
        type: "Part-Time",
        description: "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
        location: "Pheonix, AZ",
        salary: "$60K - $70K",
        company: {
            name: "Alpha Elite",
            description: "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
            contactEmail: "contact@adipisicingelit.com",
            contactPhone: "555-555-5555",
        },
    },
    {
        id: "5",
        title: "Full Stack Vue Developer",
        type: "Full-Time",
        description: "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
        location: "Atlanta, GA",
        salary: "$90K - $100K",
        company: {
            name: "Browning Technologies",
            description: "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
            contactEmail: "contact@consecteturadipisicing.com",
            contactPhone: "555-555-5555",
        },
    },
    {
        id: "6",
        title: "Vue Native Developer",
        type: "Full-Time",
        description: "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
        location: "Portland, OR",
        salary: "$100K - $110K",
        company: {
            name: "Port Solutions INC",
            description: "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
            contactEmail: "contact@ipsumlorem.com",
            contactPhone: "555-555-5555",
        },
    },
];
// Function to seed data
const seedJobs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Delete any existing jobs to avoid duplicates
        yield jobs_model_1.default.deleteMany({});
        console.log("Existing job records deleted.");
        // Insert new job seed data
        yield jobs_model_1.default.insertMany(jobSeedData);
        console.log("Job seed data successfully inserted.");
        // Close the connection
        mongoose_1.default.connection.close();
        console.log("MongoDB connection closed.");
    }
    catch (error) {
        console.error("Error seeding data:", error);
    }
});
// Run the seeding function
seedJobs();
