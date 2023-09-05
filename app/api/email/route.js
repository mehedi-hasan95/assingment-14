import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    let ToEmail = searchParams.get("email");

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
    let myEmail = {
        form: "From test <info@teamrabbil.com>",
        to: ToEmail,
        subject: "This is subject",
        text: "This is body",
    };
    try {
        const result = await Transporter.sendMail(myEmail);
        return NextResponse.json({ msg: result });
    } catch (error) {
        return NextResponse.json({ msg: error });
    }
}
