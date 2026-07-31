import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UsersTable from "./components/UsersTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "List User | Smart Hotel Admin",
  description: "Daftar user Smart Hotel & Smart Home",
};

export default function UsersPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.listUser" />
      <UsersTable />
    </div>
  );
}
