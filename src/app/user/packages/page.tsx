import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PackagesTable from "../components/PackagesTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Paket | Smart Hotel Admin",
  description: "Daftar paket subscription",
};

export default function PackagesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.packages" />
      <PackagesTable />
    </div>
  );
}
