import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MonthlyPaymentsTable from "./components/MonthlyPaymentsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Keuangan | Smart Hotel Admin",
  description: "Pembayaran bulanan user Smart Hotel & Smart Home",
};

export default function FinancePage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.finance" />
      <MonthlyPaymentsTable />
    </div>
  );
}
