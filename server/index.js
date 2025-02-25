import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path"; // ✅ Needed to serve React frontend
import emailRoute from "./routes/emailRoute.js"; // Import the email route

const app = express();
app.use(express.json());

// ✅ CORS Configuration
app.use(
  cors({
    origin: [
      // "http://localhost:5173",  // Uncomment for local testing
      "https://abhitrambadiya.onrender.com"
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

console.log("Loaded EMAIL_USER:", process.env.EMAIL_USER);

// ✅ Use email route
app.use("/api/email", emailRoute);

// ✅ Serve React Frontend (Fixes Refresh Issue)
const __dirname = path.resolve(); // Required for ES module
app.use(express.static("client/build")); // Adjust path if needed

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// ✅ Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
