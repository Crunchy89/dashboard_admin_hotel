import InstallationSetup from "./components/InstallationSetup";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Installation | Smart Hotel Admin",
  description: "Set device and application installation date range per hotel",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.installation" />
      <InstallationSetup />
    </div>
  );
}
