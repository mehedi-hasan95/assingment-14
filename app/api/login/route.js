import { Tokencookie } from "@/utility/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req) {
    const JSON = await req.json();
    const email = JSON["email"];
    const password = JSON["password"];
    if (email === "me@me.com" && password === "123") {
        const cookie = await Tokencookie(email);
        return NextResponse.json(
            { status: true, message: "Login Success" },
            { status: 200, headers: cookie }
        );
    } else {
        return NextResponse.json({ status: false, message: "Login failed" });
    }
}

export async function GET() {
    cookies().delete("token");
    return NextResponse.json({ status: false, message: "Logout Success" });
}
