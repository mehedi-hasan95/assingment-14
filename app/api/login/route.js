import { Tokencookie } from "@/utility/TokenCookie";
import { NextResponse } from "next/server";

// When a user successfully login a cookie is set
export async function POST(req) {
    const JSON = await req.json();
    const email = JSON["email"];
    const password = JSON["password"];
    // Right now we have no database hence we use a hardcoded login
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

// When a user successfully log out cookie is remove
export async function GET() {
    cookies().delete("token");
    return NextResponse.json({ status: false, message: "Logout Success" });
}
