import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received request with data:", { name, email, message });

  // Check if request body is missing any data
  if (!name || !email || !message) {
    console.error("Missing required fields");
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ✅ Use Gmail SMTP server
    port: 465, // ✅ Use 465 for SSL (or 587 for TLS)
    secure: true, // ✅ true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  transporter.verify((error, success) => {
    if (error) {
      console.error("Transporter error:", error);
    } else {
      console.log("Email transporter is ready to send messages.");
    }
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: `New Mail from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

export default router;
