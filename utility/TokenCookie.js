import { CreateToken } from "@/utility/JwtHelper";

// Set JWT token in cookie
export async function Tokencookie(email) {
    const token = await CreateToken(email);
    return {
        "Set-Cookie": `token=${token}; Max-Age=7200; path=/; secure HttpOnly; SameSite=Strict`,
    };
}
