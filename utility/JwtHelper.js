import { SignJWT, jwtVerify } from "jose";

// Set the functionality of create a token and its features
export async function CreateToken(email) {
    const secret = new TextEncoder().encode(process.env.JWT_TOKEN);
    const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRE)
        .setIssuedAt()
        .sign(secret);
    return token;
}

// Decoded the created token
export async function VerifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_TOKEN);
    const verifyJwtToken = await jwtVerify(token, secret);
    return verifyJwtToken["payload"];
}
