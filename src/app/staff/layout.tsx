"use client";

import AdminShell from "@/layout/AdminShell";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
