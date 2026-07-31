import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import StaffTable from "./components/StaffTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Staff | Smart Hotel Admin",
  description: "Manage internal company employees: technicians, programmers, HR, and operations team",
};

export default function StaffPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.staff" />
      <StaffTable />
    </div>
  );
}
