import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DevicesTable from "../components/DevicesTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Device | Smart Hotel Admin",
  description: "Smart Hotel & Smart Home device list",
};

export default function DevicesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Device" />
      <DevicesTable />
    </div>
  );
}
