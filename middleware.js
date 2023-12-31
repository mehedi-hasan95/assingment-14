import { CheckCookieAuth } from "@/utility/MiddlewareUtility";

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith("/blog")) {
        return await CheckCookieAuth(req);
    }
}
