import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RoomsTable from "../components/RoomsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Room | Smart Hotel Admin",
  description: "Daftar room Smart Hotel & Smart Home",
};

export default function RoomsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.rooms" />
      <RoomsTable />
    </div>
  );
}
