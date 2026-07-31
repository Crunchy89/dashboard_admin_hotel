import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import SalaryTable from "./components/SalaryTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Salary | Smart Hotel Admin",
  description: "Manage internal employee salaries and transfer proof for this month",
};

export default function SalaryPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.salary" />
      <SalaryTable />
    </div>
  );
}
