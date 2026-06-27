import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, // Gmail App Password
  },
});

// Verify transporter when server starts
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail Configuration Error:", error);
  } else {
    console.log("✅ Mail Server is Ready");
  }
});

export const sendOtpMail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"Vingo" <${process.env.EMAIL}>`,
      to: to,
      subject: "Reset Your Password",
      html: `
        <h2>Vingo Password Reset</h2>
        <p>Your OTP is:</p>
        <h1 style="color:#ff5722;">${otp}</h1>
        <p>This OTP will expire in <b>5 minutes</b>.</p>
      `,
    });

    console.log("✅ OTP Email Sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Failed to Send OTP:", error);
    throw error;
  }
};

export const sendDeliveryOtpMail = async (user, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"Vingo" <${process.env.EMAIL}>`,
      to: user.email,
      subject: "Delivery OTP",
      html: `
        <h2>Vingo Delivery Verification</h2>
        <p>Your Delivery OTP is:</p>
        <h1 style="color:#28a745;">${otp}</h1>
        <p>This OTP will expire in <b>5 minutes</b>.</p>
      `,
    });

    console.log("✅ Delivery OTP Sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Failed to Send Delivery OTP:", error);
    throw error;
  }
};
