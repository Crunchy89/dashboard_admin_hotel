"use client";

import AdminShell from "@/layout/AdminShell";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
