import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    let ToEmail = searchParams.get("email");

    // Set verification code
    const verificationNumber = Math.floor(100000 + Math.random() * 900000);
    // Set the sender mail information
    let Transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false },
    });
    // The message body
    let myEmail = {
        form: "From  <info@teamrabbil.com>",
        to: ToEmail,
        subject: "This is subject",
        text: `The verification code is ${verificationNumber}`,
    };
    // The Mail behavior
    try {
        const result = await Transporter.sendMail(myEmail);
        return NextResponse.json({ msg: result });
    } catch (error) {
        return NextResponse.json({ msg: error });
    }
}
