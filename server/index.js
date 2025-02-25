import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import emailRoute from "./routes/emailRoute.js"; // Import the email route
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// ✅ Set up CORS AFTER declaring 'app'
app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = [
          // "http://localhost:5173",
          "https://abhitrambadiya.onrender.com"
        ];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );

console.log("Loaded EMAIL_USER:", process.env.EMAIL_USER);

app.use(cors({ origin: "https://abhitrambadiya.onrender.com" })); // Allow frontend access
// Allow all origins
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ✅ Serve React frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

// Use email route
app.use("/api/email", emailRoute);

// ✅ Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
