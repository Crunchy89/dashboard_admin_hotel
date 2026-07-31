import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MaintenanceTable from "./components/MaintenanceTable";
import MaintenanceRightPanel from "./components/MaintenanceRightPanel";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maintenance | Smart Hotel Admin",
  description: "Jadwal maintenance hotel, room, dan device",
};

export default function MaintenancePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Maintenance" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-9">
          <MaintenanceTable />
        </div>
        <div className="col-span-12 xl:col-span-3">
          <MaintenanceRightPanel />
        </div>
      </div>
    </div>
  );
}
