import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ReportsTable from "./components/ReportsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reports | Smart Hotel Admin",
  description: "User report list and work progress tracking",
};

export default function LaporanPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Reports" />
      <ReportsTable />
    </div>
  );
}
