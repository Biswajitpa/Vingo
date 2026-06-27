import { Resend } from "resend"
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = "Vingo <onboarding@resend.dev>"

export const sendOtpMail = async (to, otp) => {
    await resend.emails.send({
        from: FROM_EMAIL,
        to,
        subject: "Reset Your Password",
        html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
}

export const sendDeliveryOtpMail = async (user, otp) => {
    await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: "Delivery OTP",
        html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
}
