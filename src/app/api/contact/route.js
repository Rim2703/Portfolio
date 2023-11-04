import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export async function POST(request, response) {
    try {
        const { email, subject, message } = await request.json();

        if (!email || !subject || !message) {
            return NextResponse.json({ message: 'Missing required fields.' });
        }

        // Nodemailer setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: pass
            },
        });

        // Setup email data
        let mailOptions = {
            from: email,
            to: emailUser,
            subject: subject,
            text: message,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully." });
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Email sending failed.' });
    }
}

