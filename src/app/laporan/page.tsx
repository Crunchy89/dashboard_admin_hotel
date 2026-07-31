import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ReportsTable from "./components/ReportsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Laporan | Smart Hotel Admin",
  description: "List laporan user dan progress pengerjaan",
};

export default function LaporanPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Laporan" />
      <ReportsTable />
    </div>
  );
}
