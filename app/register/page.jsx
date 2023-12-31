"use client";

import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
    // Registration functionality
    const handelRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        router.push(`/api/email?email=${email}`);
    };
    return (
        <div className="flex h-[90vh] items-center">
            <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
                    <p className="text-sm text-gray-400">Create your Account</p>
                </div>
                <form onSubmit={handelRegister} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">
                                    Password
                                </label>
                            </div>
                            <input
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
                                value="Register"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
