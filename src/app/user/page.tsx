import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UsersTable from "./components/UsersTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "List User | Smart Hotel Admin",
  description: "Smart Hotel & Smart Home user list",
};

export default function UsersPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="List User" />
      <UsersTable />
    </div>
  );
}
