import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MonthlyPaymentsTable from "./components/MonthlyPaymentsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Finance | Smart Hotel Admin",
  description: "Monthly Smart Hotel & Smart Home user payments",
};

export default function FinancePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Finance" />
      <MonthlyPaymentsTable />
    </div>
  );
}
