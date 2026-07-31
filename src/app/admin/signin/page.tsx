import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Sign In | Smart Hotel",
  description: "Sign in to access the Smart Hotel admin dashboard",
};

export default function AdminSignInPage() {
  return <SignInForm />;
}
