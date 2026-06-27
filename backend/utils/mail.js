import { Resend } from 'resend'
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendOtpMail = async (to, otp) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.EMAIL,
        subject: `OTP for ${to}`,
        html: `<p>OTP for <b>${to}</b> is <b>${otp}</b>. Expires in 5 minutes.</p>`
    })
}

export const sendDeliveryOtpMail = async (user, otp) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.EMAIL,
        subject: `Delivery OTP for ${user.email}`,
        html: `<p>Delivery OTP for <b>${user.fullName}</b> is <b>${otp}</b>. Expires in 5 minutes.</p>`
    })
}
