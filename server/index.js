import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import emailRoute from "./routes/emailRoute.js"; // Import the email route


// ✅ Allow requests from your deployed frontend
const allowedOrigins = [
    "http://localhost:5173",  // For local development
    "https://abhitrambadiya.onrender.com", // Your deployed frontend
  ];
  
  app.use(
    cors({
      origin: allowedOrigins, // Allow only these origins
      methods: "GET,POST", // Allow specific HTTP methods
      allowedHeaders: "Content-Type", // Allow specific headers
    })
  );

const app = express();
console.log("Loaded EMAIL_USER:", process.env.EMAIL_USER);

app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend access
// Allow all origins
app.use(express.json());

// Use email route
app.use("/api/email", emailRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
