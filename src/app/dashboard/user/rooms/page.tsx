import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RoomsTable from "../components/RoomsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Room | Smart Hotel Admin",
  description: "Smart Hotel & Smart Home room list",
};

export default function RoomsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Room" />
      <RoomsTable />
    </div>
  );
}
