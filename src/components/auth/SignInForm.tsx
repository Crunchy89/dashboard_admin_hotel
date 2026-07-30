"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "@/icon";
import Link from "next/link";
import { useState } from "react";

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12 dark:bg-gray-950 lg:py-24">
            <div className="w-full max-w-md md:rounded-2xl md:bg-white p-6 sm:p-8 lg:p-10 md:shadow-xl md:shadow-gray-200/70 dark:bg-gray-900 dark:lg:shadow-black/30">
                    <div>
                        <div className="mb-5 sm:mb-8">
                            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                                Sign In
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Enter your username and password to sign in!
                            </p>
                        </div>
                        <div>
                            <form>
                                <div className="space-y-6">
                                    <div>
                                        <Label>
                                            Email <span className="text-error-500">*</span>{" "}
                                        </Label>
                                        <Input placeholder="info@gmail.com" type="email" />
                                    </div>
                                    <div>
                                        <Label>
                                            Password <span className="text-error-500">*</span>{" "}
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                            />
                                            <span
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                            >
                                                {showPassword ? (
                                                    <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                                                ) : (
                                                    <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Checkbox checked={isChecked} onChange={setIsChecked} />
                                            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                                                Keep me logged in
                                            </span>
                                        </div>
                                        <Link
                                            href="/reset-password"
                                            className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div>
                                        <Button className="w-full" size="sm">
                                            Sign in
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SignInForm;
