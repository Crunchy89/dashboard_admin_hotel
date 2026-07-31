import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ClientPointsTable from "./components/ClientPointsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Client Points | Smart Hotel Admin",
  description:
    "View loyalty points for clients who booked rooms at affiliated hotels",
};

export default function ClientPointsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Client Points" />
      <ClientPointsTable />
    </div>
  );
}
