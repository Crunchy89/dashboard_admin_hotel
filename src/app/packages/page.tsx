import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PackagesTable from "./components/PackagesTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Packages | Smart Hotel Admin",
  description:
    "Internal package management: create, update, activate, and deactivate subscription packages",
};

export default function PackagesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Packages" />
      <PackagesTable />
    </div>
  );
}
