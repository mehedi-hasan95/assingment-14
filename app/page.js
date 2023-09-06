"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    // Login functionality
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = { email, password };

        // Implement the login api
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json["status"] === true) {
            router.replace("/blog");
        } else {
            alert(json["message"]);
        }
    };
    return (
        <div className="flex items-center h-[90vh]">
            <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-400">
                        Sign in to access your account
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                            >
                                Email address
                            </label>
                            <input
                                defaultValue="me@me.com"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                            </div>
                            <input
                                defaultValue="123"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input
                                type="submit"
                                value="Sign In"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer"
                            />
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400">
                            Don&apos;t have an account yet?
                            <Link
                                rel="noopener noreferrer"
                                href="/register"
                                className="hover:underline text-violet-400"
                            >
                                Sign up
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
